using System;
using System.Net.Http;
using System.Threading.Tasks;
using IdentityModel.Client;
using Newtonsoft.Json.Linq;

namespace ConsoleClient
{
    class Program
    {
        static void Main(string[] args) => MainAsync().GetAwaiter().GetResult();

        private static async Task MainAsync()
        {
            //Discover the identity server
            var identityServer = await DiscoveryClient.GetAsync("http://localhost:52075/");

            if (identityServer.IsError)
            {
                Console.WriteLine(identityServer.Error);
                return;
            }

            //Get the token
            var tokenClient = new TokenClient(identityServer.TokenEndpoint, "client", "secret");
            var tokenResponse = await tokenClient.RequestResourceOwnerPasswordAsync("ars", "LukE4321LukE#", "api1");

            //Call the API
            HttpClient client = new HttpClient();
            client.SetBearerToken(tokenResponse.AccessToken);

            var response = await client.GetAsync("http://localhost:49282/api/values");
            var content = await response.Content.ReadAsStringAsync();
            Console.WriteLine(JArray.Parse(content));
            Console.ReadKey();
        }
    }
}
