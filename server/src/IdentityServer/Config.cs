using IdentityServer4;
using IdentityServer4.Models;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using System.Collections.Generic;

namespace IdentityServer
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> IdentityResources =>
        new List<IdentityResource>
        {
                    new IdentityResources.OpenId(),
                    new IdentityResources.Profile(),
        };

        public static IEnumerable<ApiScope> ApiScopes =>
            new List<ApiScope>
            {
                new ApiScope("trackerApi", "Employee Tracker Api")
            };

        public static IEnumerable<Client> Clients =>
            new List<Client>
            {
                new Client
                {
                    ClientId = "client",
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    ClientSecrets =
                    {
                        new Secret("EmployeeTracker".Sha256())
                    },
                    AllowedScopes = {"trackerApi"}
                },
                new Client
                {
                    ClientId = "js",
                    ClientName = "VueApi JavaScript Client",
                    AllowedGrantTypes = GrantTypes.Code,
                    RequireClientSecret = false,
                    AllowAccessTokensViaBrowser = true,

                    RedirectUris = { "https://localhost:8080/callback",
                    // this second redirect uri is for silent token renewal
                    "https://localhost:8080/static/silent-renew.html"
                    },
                    PostLogoutRedirectUris = { "https://localhost:8080" },
                    AllowedCorsOrigins = { "https://localhost:8080", "http://localhost:8080" },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "trackerApi"
                    },

                    // silent renew options
                    AllowOfflineAccess = true,
                    AccessTokenLifetime = 90,
                    AbsoluteRefreshTokenLifetime = 0,
                    RefreshTokenUsage = TokenUsage.OneTimeOnly,
                    RefreshTokenExpiration = TokenExpiration.Sliding,
                    UpdateAccessTokenClaimsOnRefresh = true,
                    RequireConsent = false,
                }
            };
    }
}