using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CodeWorks.Auth0Provider;
using Keepr.Models;
using Keepr.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Keepr.Controllers
{
  [Route("/api/[controller]")]
  [ApiController]
  public class VaultsController : ControllerBase
  {
    private readonly VaultsService _vserve;
    private readonly KeepsService _kserve;

    public VaultsController(VaultsService vserve, KeepsService kserve)
    {
      _vserve = vserve;
      _kserve = kserve;
    }
    [HttpGet]
    public ActionResult<IEnumerable<Vault>> Get()
    {
      try
      {
        return Ok(_vserve.Get());
      }
      catch (Exception error)
      {
        return BadRequest(error.Message);
      }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Vault>> Get(int id)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        return Ok(_vserve.GetById(userInfo?.Id, id));
      }
      catch (Exception error)
      {
        return BadRequest(error.Message);
      }
    }

    [HttpGet("{id}/keeps")]
    public ActionResult<IEnumerable<VaultKeepViewModel>> GetKeepsByVaultId(int id)
    {
      try
      {
        return Ok(_kserve.GetKeepsByVaultId(id));
      }
      catch (Exception error)
      {
        return BadRequest(error.Message);
      }
    }
    [HttpPost]
    [Authorize]
    public async Task<ActionResult<Vault>> Create([FromBody] Vault vault)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        vault.CreatorId = userInfo.Id;
        vault.Creator = userInfo;
        return Ok(_vserve.Create(vault));
      }
      catch (Exception error)
      {
        return BadRequest(error.Message);
      }
    }
    [HttpPut("{id}")]
    [Authorize]
    public async Task<ActionResult<Vault>> Update([FromBody] Vault vault, int id)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        vault.CreatorId = userInfo.Id;
        vault.Creator = userInfo;
        vault.Id = id;
        return Ok(_vserve.Update(vault));
      }
      catch (Exception error)
      {
        return BadRequest(error.Message);
      }
    }
    [HttpDelete("{id}")]
    [Authorize]
    public async Task<ActionResult<bool>> Delete(int id)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        return Ok(_vserve.Delete(id, userInfo.Id));
      }
      catch (Exception error)
      {
        return BadRequest(error.Message);
      }
    }
  }
}