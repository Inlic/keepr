using System;
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
  public class VaultKeepsController : ControllerBase
  {
    private readonly VaultKeepsService _serve;

    public VaultKeepsController(VaultKeepsService serve)
    {
      _serve = serve;
    }
    [HttpGet("{vaultid}/{keepid}")]
    public ActionResult<int> Get(int vaultid, int keepid)
    {
      try
      {
        return Ok(_serve.Get(vaultid, keepid));
      }
      catch (Exception error)
      {
        return BadRequest(error.Message);
      }
    }
    [HttpPost]
    [Authorize]
    public async Task<ActionResult<VaultKeep>> Post([FromBody] VaultKeep newVk)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        newVk.CreatorId = userInfo.Id;
        return Ok(_serve.Create(newVk));
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
        return Ok(_serve.Delete(id, userInfo.Id));
      }
      catch (Exception error)
      {
        return BadRequest(error.Message);
      }
    }
  }
}