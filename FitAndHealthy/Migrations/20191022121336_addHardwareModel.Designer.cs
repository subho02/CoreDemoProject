﻿// <auto-generated />
using FitAndHealthy.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace FitAndHealthy.Migrations
{
    [DbContext(typeof(WorkoutDataContext))]
    [Migration("20191022121336_addHardwareModel")]
    partial class addHardwareModel
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FitAndHealthy.Models.AddHardware", b =>
                {
                    b.Property<string>("HardwareID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("HardwareCategory");

                    b.Property<string>("HardwareDescription");

                    b.Property<string>("HardwareName");

                    b.Property<string>("HardwareVendor");

                    b.HasKey("HardwareID");

                    b.ToTable("Hardwares");
                });

            modelBuilder.Entity("FitAndHealthy.Models.ExceptionDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ControllerName");

                    b.Property<string>("ExceptionMessage");

                    b.Property<string>("ExceptionStackTrace");

                    b.Property<DateTime>("LogTime");

                    b.HasKey("Id");

                    b.ToTable("Exception");
                });

            modelBuilder.Entity("FitAndHealthy.Models.Workout", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTimeOffset>("Date");

                    b.Property<int>("DistanceInMeters");

                    b.Property<long>("TimeInSeconds");

                    b.HasKey("Id");

                    b.ToTable("Workout");
                });
#pragma warning restore 612, 618
        }
    }
}
