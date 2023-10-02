using webapi.Models;

namespace webapi.Repository
{
    public interface ITripRepository
    {
        IEnumerable<MultiTrip> GetAllTrips();
        IEnumerable<MultiTrip> GetPagedTrips(int page, int pageSize=6);
        SingleTrip GetSingleTripById(int id);
    }
}
