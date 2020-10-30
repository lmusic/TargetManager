using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TargetManager.Domain;
using TargetManager.Domain.EFCore;
using TargetManager.Domain.Repository;
using TargetManager.Services;

namespace TargetManager.API
{
    public class Startup
    {
        private IConfiguration Configuration { get; }

        private const string AllowAnyCorsPolicy = "AllowAny";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            var connection = Configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<DataBaseContext>(options => options.UseSqlServer(connection));

            services.AddCors(options =>
            {
                options.AddPolicy(AllowAnyCorsPolicy, builder =>
                {
                    builder.AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowAnyOrigin();
                });
            });

            services.AddControllers();

            //services
            services.AddScoped<ITargetService, TargetService>();

            //repositories
            services.AddScoped<DbContext, DataBaseContext>();
            services.AddScoped<IRepository<Target>, Repository<Target>>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseCors(AllowAnyCorsPolicy);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
