using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace IdentityServer
{
    public class Startup
    {
        //readonly string SpecificOrigins = "_mySpecificOrigins";

        public void ConfigureServices(IServiceCollection services)
        {
            // uncomment, if you want to add an MVC-based UI
            services.AddControllersWithViews();

            //services.AddCors(options =>
            //{
            //    options.AddPolicy(name: SpecificOrigins,
            //                      policy =>
            //                      {
            //                          policy.WithOrigins("https://localhost:8080",
            //                              "http://localhost:8080");
            //                      });
            //});

            services.AddIdentityServer()
                // not recommended for production - you need to store your key material somewhere secure
                .AddDeveloperSigningCredential()
                .AddInMemoryApiScopes(Config.ApiScopes)
                .AddInMemoryClients(Config.Clients);
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseDeveloperExceptionPage();

            // uncomment if you want to add MVC
            app.UseStaticFiles();
            app.UseRouting();

            //app.UseCors(SpecificOrigins);

            app.UseIdentityServer();

            // uncomment, if you want to add MVC
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
            });
        }
    }
}
