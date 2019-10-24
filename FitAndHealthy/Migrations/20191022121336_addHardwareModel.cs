using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace FitAndHealthy.Migrations
{
    public partial class addHardwareModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Hardwares",
                columns: table => new
                {
                    HardwareID = table.Column<string>(nullable: false),
                    HardwareCategory = table.Column<string>(nullable: true),
                    HardwareDescription = table.Column<string>(nullable: true),
                    HardwareName = table.Column<string>(nullable: true),
                    HardwareVendor = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hardwares", x => x.HardwareID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Hardwares");
        }
    }
}
