using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using webapi.Models;
using webapi.Repository;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class PagedTripsController : ControllerBase
{
    private readonly ILogger<AllTripsController> logger;
    private readonly ITripRepository repo;

    public PagedTripsController(ILogger<AllTripsController> logger, ITripRepository repo)
    {
        this.logger = logger;
        this.repo = repo;
    }

    [HttpGet(Name = "GetPagedTrips")]
    public IEnumerable<MultiTrip> Get(int page)
    {
        return repo.GetPagedTrips(page);
    }
}
