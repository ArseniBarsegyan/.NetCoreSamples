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
                // Angular client example
                new Client
                {
                    ClientId = "Angular_client",
                    ClientName = "Angular 4 Client",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowedScopes = new List<string> { "openid", "profile", "MD.CoreApi", "custom.profile" },
                    RedirectUris = new List<string> { "http://localhost:4200/auth-callback" },
                    PostLogoutRedirectUris = new List<string> { "http://localhost:4200/logout-callback" },
                    AllowedCorsOrigins = new List<string> { "http://localhost:4200" },
                    AllowAccessTokensViaBrowser = true
                },
                // Console client
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
                // OpenID Connect hybrid flow and client credentials client (MVC)
                new Client
                {
                    ClientId = "mvc",
                    ClientName = "MVC Client",
                    AllowedGrantTypes = GrantTypes.HybridAndClientCredentials,

                    RequireConsent = true,

                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },

                    RedirectUris = { "http://localhost:52075/signin-oidc" },
                    PostLogoutRedirectUris = { "http://localhost:52075/signout-callback-oidc" },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "ResourceApi"
                    },
                    AllowOfflineAccess = true
                }
            };
        }
    }
}