using System;
using System.Collections.Generic;
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

    public Vault GetById(int id)
    {
      var data = _vrepo.GetById(id);
      if (data == null)
      {
        throw new Exception("Invalid Id");
      }
      return data;
    }

    public Vault Create(Vault vault)
    {
      return _vrepo.Create(vault);
    }

    public Vault Update(Vault vault)
    {
      var original = GetById(vault.Id);
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
      var original = GetById(id);
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