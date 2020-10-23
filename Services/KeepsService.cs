using System;
using System.Collections.Generic;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class KeepsService
  {
    private readonly KeepsRepository _repo;

    public KeepsService(KeepsRepository repo)
    {
      _repo = repo;
    }
    public List<Keep> Get()
    {
      return _repo.Get();
    }

    public Keep GetById(int id)
    {
      var data = _repo.GetById(id);
      if (data == null)
      {
        throw new Exception("Invalid Id");
      }
      return data;
    }

    public Keep Create(Keep keep)
    {
      return _repo.Create(keep);
    }

    public Keep Update(Keep keep)
    {
      var original = GetById(keep.Id);
      if (original == null)
      {
        throw new Exception("Invalid Id");
      }
      if (original.CreatorId != keep.CreatorId)
      {
        throw new Exception("Invalid Permissions");
      }
      keep.Name = keep.Name != null ? keep.Name : original.Name;
      keep.Description = keep.Description != null ? keep.Description : original.Description;
      keep.Img = keep.Img != null ? keep.Img : original.Img;
      keep.Views = keep.Views > 0 ? keep.Views : original.Views;
      keep.Shares = keep.Shares > 0 ? keep.Shares : original.Shares;
      keep.Keeps = keep.Keeps > 0 ? keep.Keeps : original.Keeps;
      return _repo.Update(keep);
    }

    public bool Delete(int id, string userId)
    {
      var original = GetById(id);
      if (original == null)
      {
        throw new Exception("Invalid Id");
      }
      if (original.CreatorId != userId)
      {
        throw new Exception("Invalid Permissions");
      }
      _repo.Delete(id);
      return true;
    }
  }
}