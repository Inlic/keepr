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
  [ApiController]
  [Route("api/[controller]")]
  public class ProfilesController : ControllerBase
  {
    private readonly ProfilesService _ps;
    private readonly VaultsService _vs;
    private readonly KeepsService _ks;
    public ProfilesController(ProfilesService ps, VaultsService vs, KeepsService ks)
    {
      _ps = ps;
      _vs = vs;
      _ks = ks;
    }


    [HttpGet]
    [Authorize]
    public async Task<ActionResult<Profile>> Get()
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        return Ok(_ps.GetOrCreateProfile(userInfo));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpGet("{id}")]
    public ActionResult<Profile> GetProfileById(string id)
    {
      try
      {
        return Ok(_ps.GetProfileById(id));
      }
      catch (Exception error)
      {
        return BadRequest(error.Message);
      }
    }
    [HttpGet("{id}/keeps")]
    public async Task<ActionResult<IEnumerable<Keep>>> GetKeepsByProfile(string id)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        Profile queryProfile = _ps.GetProfileById(id);
        if (queryProfile == null)
        {
          throw new Exception("Invalid Id");
        }
        return Ok(_ks.GetKeepsByCreatorId(queryProfile.Id, userInfo?.Id));
      }
      catch (Exception error)
      {
        return BadRequest(error.Message);
      }
    }

    [HttpGet("{id}/vaults")]
    public async Task<ActionResult<IEnumerable<Vault>>> GetVaultsByProfile(string id)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        Profile queryProfile = _ps.GetProfileById(id);
        if (queryProfile == null)
        {
          throw new Exception("Invalid Id");
        }
        return Ok(_vs.GetVaultsByCreatorId(queryProfile.Id, userInfo?.Id));
      }
      catch (Exception error)
      {
        return BadRequest(error.Message);
      }
    }
  }
}