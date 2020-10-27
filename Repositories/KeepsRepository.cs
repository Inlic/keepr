using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using Keepr.Models;

namespace Keepr.Repositories
{
  public class KeepsRepository
  {
    private readonly IDbConnection _db;

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }
    public List<Keep> Get()
    {
      return _db.Query<Keep, Profile, Keep>(@"
      SELECT k.*,
      p.*
      FROM keeps k
      JOIN profiles p ON k.creatorid = p.id;
      ", (keep, profile) =>
      {
        keep.Creator = profile;
        return keep;
      }, splitOn: "id").ToList();
    }
    public Keep GetById(int id)
    {
      return _db.Query<Keep, Profile, Keep>(@"
      SELECT k.*,
      p.*
      FROM keeps k
      JOIN profiles p ON k.creatorid = p.id
      WHERE k.id = @id", (keep, profile) =>
      {
        keep.Creator = profile;
        return keep;
      }, new { id }, splitOn: "id").FirstOrDefault();
    }

    internal IEnumerable<Keep> GetKeepsByVaultId(int vaultId)
    {
      return _db.Query<VaultKeepViewModel, Profile, VaultKeepViewModel>(@"
      SELECT k.*,
      p.*,
      vk.id AS VaultKeepId
      FROM vaultkeeps vk
      JOIN keeps k ON k.id = vk.keepid
      JOIN profiles p ON k.creatorid = p.id 
      WHERE vaultid = @vaultId
      ", (vaultkeep, profile) =>
      {
        vaultkeep.Creator = profile;
        return vaultkeep;
      }, new { vaultId });
    }

    public Keep Create(Keep keep)
    {
      int id = _db.ExecuteScalar<int>(@"
      INSERT INTO keeps(creatorid, name, description, img, views, shares, keeps)
      VALUES(@CreatorId, @Name, @Description, @Img, @Views, @Shares, @Keeps); SELECT LAST_INSERT_ID();
      ", keep);
      keep.Id = id;
      return keep;
    }

    public Keep Update(Keep keep)
    {
      _db.Execute(@"
      UPDATE keeps
      SET
      name = @Name,
      description = @Description,
      img = @Img,
      views = @Views,
      shares = @Shares,
      keeps = @Keeps
      WHERE id = @Id
      ", keep);
      return keep;
    }

    internal object UpdateStats(Keep keep)
    {
      _db.Execute(@"
      UPDATE keeps
      SET
      views = @Views,
      shares = @Shares,
      keeps = @Keeps
      WHERE id = @Id
      ", keep);
      return keep;
    }

    internal IEnumerable<Keep> GetKeepsByCreatorId(string userinfoId)
    {
      return _db.Query<Keep, Profile, Keep>(@"
      SELECT k.*,
      p.*
      FROM keeps k
      JOIN profiles p on k.creatorid = p.id
      WHERE creatorid = @userinfoId;
      ", (keep, profile) =>
      {
        keep.Creator = profile;
        return keep;
      }, new { userinfoId }, splitOn: "id");
    }

    public bool Delete(int id)
    {
      int success = _db.Execute(@"
      DELETE FROM keeps WHERE id = @id
      ", new { id });
      return success > 0;
    }
  }
}