namespace webapi.Models;
public class Trip
{
    public int id { get; set; }
    public string photourl { get; set; }
    public string title { get; set; }
    public string subtitle { get; set; }
    public List<string> countries { get; set; }
    public int days { get; set; }
    public double co2kilograms { get; set; }
    public double rating { get; set; }
    public string description { get; set; }
    public List<Advantage> advantages { get; set; }

}
