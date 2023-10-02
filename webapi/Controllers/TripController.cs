using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using webapi.Repository;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class TripController : ControllerBase
{
    private readonly ILogger<TripController> logger;
    private readonly ITripRepository repo;

    public TripController(ILogger<TripController> logger, ITripRepository repo)
    {
        this.logger = logger;
        this.repo = repo;
    }

    [HttpGet(Name = "GetSingleTrip")]
    public SingleTrip Get(int id)
    {
        return repo.GetSingleTripById(id);
    }    

}
