using System.Collections.Generic;
using IdentityServer.Helpers;
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
                    AllowedScopes = new List<string> { "openid", "profile", ConstantsHelper.AllowedScope, "custom.profile" },
                    RedirectUris = new List<string> { ConstantsHelper.AngularClientRedirectUris },
                    PostLogoutRedirectUris = new List<string> { ConstantsHelper.AngularClientPostLogoutRedirectUris },
                    AllowedCorsOrigins = new List<string> { ConstantsHelper.AngularClientAllowedCorsOrigins },
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
                    AllowedScopes = { ConstantsHelper.AllowedScope }
                },
                // OpenID Connect hybrid flow and client credentials client (MVC)
                new Client
                {
                    ClientId = "mvc",
                    ClientName = "MVC Client",
                    AllowedGrantTypes = GrantTypes.HybridAndClientCredentials,

                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },

                    RedirectUris = { ConstantsHelper.MVCClientRedirectUris },
                    PostLogoutRedirectUris = { ConstantsHelper.MVCClientPostLogoutRedirectUris },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        ConstantsHelper.AllowedScope
                    },
                    AllowOfflineAccess = true
                },
            };
        }
    }
}