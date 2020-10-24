using System;
using System.Data;
using Dapper;
using Keepr.Models;

namespace Keepr.Repositories
{
  public class VaultKeepsRepository
  {
    private readonly IDbConnection _db;
    public VaultKeepsRepository(IDbConnection db)
    {
      _db = db;
    }
    internal int Create(VaultKeep newVk)
    {
      return _db.ExecuteScalar<int>(@"
      INSERT INTO vaultkeeps (vaultid, keepid, creatorid)
      VALUES (@VaultId, @KeepId, @CreatorId);
      SELECT LAST_INSERT_ID();", newVk);
    }

    internal VaultKeep GetById(int id)
    {
      return _db.QueryFirstOrDefault<VaultKeep>(@"
      SELECT *
      FROM vaultkeeps 
      WHERE id = @id
      ", new { id });
    }

    internal bool Delete(int id)
    {
      int success = _db.Execute(@"
      DELETE FROM vaultkeeps WHERE id = @id", new { id });
      return success > 0;
    }
  }
}