using System;
using System.Collections.Generic;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class KeepsService
  {
    private readonly KeepsRepository _krepo;
    private readonly VaultsRepository _vrepo;

    public KeepsService(KeepsRepository krepo, VaultsRepository vrepo)
    {
      _krepo = krepo;
      _vrepo = vrepo;
    }
    public List<Keep> Get()
    {
      return _krepo.Get();
    }

    public Keep GetById(int id)
    {
      var data = _krepo.GetById(id);
      if (data == null)
      {
        throw new Exception("Invalid Id");
      }
      return data;
    }

    internal IEnumerable<VaultKeepViewModel> GetKeepsByVaultId(int vaultId)
    {
      var data = _vrepo.GetById(vaultId);
      if (data == null)
      {
        throw new Exception("Invalid Id");
      }
      return _krepo.GetKeepsByVaultId(vaultId);
    }

    public Keep Create(Keep keep)
    {
      return _krepo.Create(keep);
    }

    public Keep Update(Keep keep)
    {
      var original = _krepo.GetById(keep.Id);
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
      return _krepo.Update(keep);
    }

    internal object UpdateStats(Keep keep)
    {
      var original = _krepo.GetById(keep.Id);
      if (original == null)
      {
        throw new Exception("Invalid Id");
      }
      keep.Views = keep.Views > 0 ? keep.Views : original.Views;
      keep.Shares = keep.Shares > 0 ? keep.Shares : original.Shares;
      keep.Keeps = keep.Keeps > 0 ? keep.Keeps : original.Keeps;
      return _krepo.UpdateStats(keep);
    }

    internal IEnumerable<Keep> GetKeepsByCreatorId(string queryProfileId, string userinfoId)
    {
      return _krepo.GetKeepsByCreatorId(queryProfileId);
    }

    public bool Delete(int id, string userId)
    {
      var original = _krepo.GetById(id);
      if (original == null)
      {
        throw new Exception("Invalid Id");
      }
      if (original.CreatorId != userId)
      {
        throw new Exception("Invalid Permissions");
      }
      _krepo.Delete(id);
      return true;
    }


  }
}