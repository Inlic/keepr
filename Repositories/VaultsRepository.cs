using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using Keepr.Models;

namespace Keepr.Repositories
{
  public class VaultsRepository
  {
    private readonly IDbConnection _db;
    public VaultsRepository(IDbConnection db)
    {
      _db = db;
    }
    public List<Vault> Get()
    {
      return _db.Query<Vault, Profile, Vault>(@"
      SELECT v.*,
      p.*
      FROM vaults v
      JOIN profiles p ON v.creatorid = p.id;
      ", (vault, profile) =>
      {
        vault.Creator = profile;
        return vault;
      }, splitOn: "id").ToList();
    }

    public Vault GetById(int id)
    {
      return _db.Query<Vault, Profile, Vault>(@"
      SELECT v.*,
      p.*
      FROM vaults v
      JOIN profiles p ON v.creatorid = p.id
      WHERE v.id = @id", (vault, profile) =>
      {
        vault.Creator = profile;
        return vault;
      }, new { id }, splitOn: "id").FirstOrDefault();
    }

    internal IEnumerable<Vault> GetVaultsByCreatorId(string userinfoId)
    {
      return _db.Query<Vault, Profile, Vault>(@"
      SELECT v.*,
      p.*
      FROM vaults v
      JOIN profiles p ON v.creatorid = p.id
      WHERE creatorid = @userinfoId;
      ", (vault, profile) =>
      {
        vault.Creator = profile;
        return vault;
      }, new { userinfoId }, splitOn: "id");
    }

    public Vault Create(Vault vault)
    {
      int id = _db.ExecuteScalar<int>(@"
     INSERT INTO vaults(name, description, isprivate, creatorid)
     VALUES(@Name, @Description, @IsPrivate, @CreatorId); SELECT LAST_INSERT_ID();
     ", vault);
      vault.Id = id;
      return vault;
    }

    public Vault Update(Vault vault)
    {
      _db.Execute(@"
      UPDATE vaults
      SET
      name = @Name,
      description = @Description,
      isprivate = @IsPrivate
      WHERE id = @Id
      ", vault);
      return vault;
    }

    public bool Delete(int id)
    {
      int success = _db.Execute(@"
      DELETE FROM vaults WHERE id = @id
      ", new { id });
      return success > 0;
    }
  }
}