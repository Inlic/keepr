using Keepr.Models;

namespace keepr.Models
{
  public class Keep
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Img { get; set; }
    public int views { get; set; }
    public int shares { get; set; }
    public int keeps { get; set; }
    public string CreatorId { get; set; }
    public Profile Creator { get; set; }
  }
}