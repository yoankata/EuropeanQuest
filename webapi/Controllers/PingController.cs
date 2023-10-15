using Microsoft.AspNetCore.Mvc;
using webapi.Repository;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class PingController : ControllerBase
{
    private readonly ILogger<TripController> logger;

    public PingController(ILogger<TripController> logger, ITripRepository repo)
    {
        this.logger = logger;
    }

    [HttpGet(Name = "Ping")]
    public OkResult Get()
    {
        return Ok();
    }    

}
