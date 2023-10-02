using JsonFlatFileDataStore;
using webapi.Models;

namespace webapi.Repository
{
    public static class TripDataStore
    {
        private static string filePath = @".\Data\trips.json";

        // Open database (create new if file doesn't exist)
        private static DataStore store = new DataStore(filePath);

        // Get employee collection LINQ to query items
        private static readonly IDocumentCollection<Trip> tripCollection = store.GetCollection<Trip>();

        public static IDocumentCollection<Trip> GetTripCollection()
        {
            return tripCollection;
        }
    }
}