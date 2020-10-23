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
  }
}