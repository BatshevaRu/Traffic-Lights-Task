using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TrafficLights.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LightsController : ControllerBase
    {
        class serverAnswer
        {
           public string color;
           public string time;
        }


        [HttpPost]
        public string Post([FromBody] string color)
        {
            serverAnswer currentServerAnswer = new serverAnswer();
            switch (color)
            {

                case "red":
                    currentServerAnswer.color = "redYellow";
                    currentServerAnswer.time = "1.5";
                    break;
                case "redYellow":
                    currentServerAnswer.color = "green";
                    currentServerAnswer.time = "3";
                    break;
                case "yellow":
                    currentServerAnswer.color = "red";
                    currentServerAnswer.time = "3";
                    break;
                case "green":
                    currentServerAnswer.color = "yellow";
                    currentServerAnswer.time = "1.5";
                    break; 
                default:
                    currentServerAnswer.color = "red";
                    currentServerAnswer.time = "3";
                    break; 
            }
            return JsonConvert.SerializeObject(currentServerAnswer);


        }
    }
}
