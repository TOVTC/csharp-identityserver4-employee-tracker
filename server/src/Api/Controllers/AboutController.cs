using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AboutController : Controller
    {
        public AboutUs Get()
        {
            return new AboutUs
            {
                Description = "At our company, imagination takes form and creativity knows no bounds. We are a dynamic and innovative creative agency committed to transforming visions into vibrant, tangible realities. We are here to infuse your brand, project, or campaign with the kind of creativity that leaves a lasting impression. Our diverse team of visionaries, artists, strategists, and storytellers is united by a common goal: to craft exceptional experiences and narratives that captivate, inspire, and engage.\r\n\r\nWhether you're a startup seeking an identity or an established brand looking to refresh, we're here to turn your aspirations into a vibrant mosaic of success. Join us, and together, we'll bring your vision to life, one piece at a time. Your vision is our mission, and we're excited to explore the limitless possibilities with you."
            };
        }
    }
}
