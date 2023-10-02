using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using webapi.Repository;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class AllTripsController : ControllerBase
{
    private readonly ILogger<AllTripsController> logger;
    private readonly ITripRepository repo;

    public AllTripsController(ILogger<AllTripsController> logger, ITripRepository repo)
    {
        this.logger = logger;
        this.repo = repo;
    }

    [HttpGet(Name = "GetAllTrips")]
    public IEnumerable<MultiTrip> Get()
    {
        return repo.GetAllTrips();
    }
}
