using System;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultKeepsService
  {
    private readonly VaultKeepsRepository _repo;
    public VaultKeepsService(VaultKeepsRepository repo)
    {
      _repo = repo;
    }
    internal VaultKeep Create(VaultKeep newVk)
    {
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