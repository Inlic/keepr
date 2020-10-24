using System;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultKeepsService
  {
    private readonly VaultKeepsRepository _repo;
    private readonly VaultsRepository _vrepo;
    public VaultKeepsService(VaultKeepsRepository repo, VaultsRepository vrepo)
    {
      _repo = repo;
      _vrepo = vrepo;
    }
    internal VaultKeep Create(VaultKeep newVk)
    {
      var data = _vrepo.GetById(newVk.VaultId);
      if (data.CreatorId != newVk.CreatorId)
      {
        throw new Exception("Cannot add Keeps to a Vault You Don't Own");
      }
      int id = _repo.Create(newVk);
      newVk.Id = id;
      return newVk;
    }
    public VaultKeep GetById(int id)
    {
      var data = _repo.GetById(id);
      if (data == null)
      {
        throw new Exception("Invalid Id");
      }
      return data;
    }
    internal bool Delete(int id, string userId)
    {
      var original = _repo.GetById(id);
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