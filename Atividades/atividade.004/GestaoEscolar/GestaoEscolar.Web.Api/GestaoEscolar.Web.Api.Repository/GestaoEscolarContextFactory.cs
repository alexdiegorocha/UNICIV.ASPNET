using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace GestaoEscolar.Web.Api.Repository
{
    public class GestaoEscolarContextFactory
    : IDesignTimeDbContextFactory<GestaoEscolarContext>
    {
        public GestaoEscolarContext CreateDbContext(string[] args = null)
        {
            var basePath = Directory.GetCurrentDirectory();
            var appSettingsFileName = "appsettings.json";

            #if DEBUG
            basePath = Path.Combine(basePath, "GestaoEscolar.Web.Api", "GestaoEscolar.Web.Api.App");
            var appSettingsFilePath = Path.Combine(basePath, appSettingsFileName);

            if (!File.Exists(appSettingsFilePath))
            {
                basePath = Directory.GetCurrentDirectory();
                basePath = Path.Combine(basePath, "..", "GestaoEscolar.Web.Api.App", "bin", "Debug","net6.0");
            }
            #endif

            var configuration = new ConfigurationBuilder()
                .SetBasePath(basePath)
                .AddJsonFile(appSettingsFileName)
                .Build();

            var builder = new DbContextOptionsBuilder<GestaoEscolarContext>();
            var connectionString = "GestaoEscolarConnectionString";
            builder.UseNpgsql(configuration.GetConnectionString(connectionString));
            var result = new GestaoEscolarContext(builder.Options);
            return result;
        }
    }
}