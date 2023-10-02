using AutoMapper;
using webapi.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace webapi.Repository;

public class TripRepository : ITripRepository
{
    private static readonly IEnumerable<Trip> tripCollection = TripDataStore.GetTripCollection().AsQueryable();
    private readonly IMapper mapper;
    public TripRepository(IMapper mapper)
    {
        this.mapper = mapper;
    }

    public IEnumerable<MultiTrip> GetAllTrips()
    {
        var trips = mapper.Map<IEnumerable<Trip>, IEnumerable<MultiTrip>>(tripCollection);
        return trips;
    }

    public IEnumerable<MultiTrip> GetPagedTrips(int page, int pageSize = 6)
    {
        var trips = mapper.Map<IEnumerable<Trip>, IEnumerable<MultiTrip>>(tripCollection);
        var totalCount = trips.Count();
        var totalPages = (int)Math.Ceiling((double)totalCount / pageSize);
        if (page <= totalPages)
            trips = trips.Skip((page - 1) * pageSize).Take(pageSize);

        return trips;
    }

    public SingleTrip GetSingleTripById(int id)
    {
        var trip = tripCollection.FirstOrDefault(t => t.id == id);
        return mapper.Map<Trip, SingleTrip>(trip);
    }
}
