using System;
using System.Collections.Generic;
using System.Linq;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultsService
  {
    private readonly VaultsRepository _vrepo;

    public VaultsService(VaultsRepository vrepo)
    {
      _vrepo = vrepo;
    }
    public List<Vault> Get()
    {
      return _vrepo.Get();
    }

    public Vault GetById(string userId, int id)
    {
      var data = _vrepo.GetById(id);
      if (data == null)
      {
        throw new Exception("Invalid Id");
      }
      if (data.CreatorId != userId && data.IsPrivate == true)
      {
        throw new Exception("You Do Not Own This Vault");
      }
      return data;
    }
    internal List<Vault> GetVaultsByCreatorId(string queryProfileId, string userinfoId)
    {
      return _vrepo.GetVaultsByCreatorId(queryProfileId).ToList().FindAll(v => v.CreatorId == queryProfileId && v.IsPrivate == false);
    }
    public Vault Create(Vault vault)
    {
      return _vrepo.Create(vault);
    }

    public Vault Update(Vault vault)
    {
      var original = _vrepo.GetById(vault.Id);
      if (original == null)
      {
        throw new Exception("Invalid Id");
      }
      if (original.CreatorId != vault.CreatorId)
      {
        throw new Exception("Invalid Permissions");
      }
      vault.Name = vault.Name != null ? vault.Name : original.Name;
      vault.Description = vault.Description != null ? vault.Name : original.Name;
      return _vrepo.Update(vault);
    }

    public bool Delete(int id, string userId)
    {
      var original = _vrepo.GetById(id);
      if (original == null)
      {
        throw new Exception("Invalid Id");
      }
      if (original.CreatorId != userId)
      {
        throw new Exception("Invalid Permissions");
      }
      _vrepo.Delete(id);
      return true;
    }
  }
}