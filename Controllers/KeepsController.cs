using System.Collections.Generic;
using Keepr.Models;
using Keepr.Services;
using Microsoft.AspNetCore.Mvc;

namespace Keepr.Controllers
{
  [Route("/api/[controller]")]
  [ApiController]
  public class KeepsController : ControllerBase
  {
    private readonly KeepsService _serv;

    public KeepsController(KeepsService serv)
    {
      _serv = serv;
    }
    [HttpGet]
    public ActionResult<IEnumerable<Keep>> Get()
    {
      try
      {
        return Ok(_serv.Get());
      }
      catch (System.Exception error)
      {
        return BadRequest(error.Message);
      }
    }

    // [HttpGet("{id}")]
    // [HttpPost]
    // [HttpPut("{id}")]
    // [HttpDelete("{id}")]
  }
}