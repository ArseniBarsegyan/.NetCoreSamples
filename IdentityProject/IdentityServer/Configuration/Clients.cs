using System.Collections.Generic;
using IdentityServer4;
using IdentityServer4.Models;

namespace IdentityServer.Configuration
{
    public class Clients
    {
        public static IEnumerable<Client> Get()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "Client1",
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AllowedScopes = { "ResourceApi" }
                },
                new Client
                {
                    ClientId = "mvc",
                    ClientName = "MVC",
                    AllowedGrantTypes = GrantTypes.Implicit,

                    RequireConsent = false,

                    // where to redirect to after login
                    RedirectUris = { "http://localhost:52075/signin-oidc" },

                    // where to redirect to after logout
                    PostLogoutRedirectUris = { "http://localhost:52075/signout-callback-oidc" },

                    AllowedScopes = new List<string>
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "ResourceApi"
                    },
                    AlwaysIncludeUserClaimsInIdToken = true //It should be true to send Claims with token
                }   
            };
        }
    }
}