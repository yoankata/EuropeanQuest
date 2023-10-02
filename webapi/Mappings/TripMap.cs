using AutoMapper;
using System.Linq;
using webapi.Models;

namespace webapi.Mappings
{
    public class TripMap : Profile
    {
        public TripMap()
        {
            CreateMap<Trip, MultiTrip>()
                .ForMember(dest => dest.numcountries,
                           opt => opt.MapFrom(src => src.countries.Count));            
            CreateMap<Trip, SingleTrip>()
                .ForMember(dest => dest.advantages,
                           opt => opt.MapFrom(src =>
                               src != null && src.advantages.Any() ? src.advantages.Select(x => x.description) : null));
        }
    }
}
