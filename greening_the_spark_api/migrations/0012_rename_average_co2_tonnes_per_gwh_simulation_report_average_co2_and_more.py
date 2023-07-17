# Generated by Django 4.1.1 on 2023-07-17 14:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("greening_the_spark_api", "0011_remove_simulation_report_efficiency_score"),
    ]

    operations = [
        migrations.RenameField(
            model_name="simulation_report",
            old_name="average_CO2_tonnes_per_gwh",
            new_name="average_CO2",
        ),
        migrations.RenameField(
            model_name="simulation_report",
            old_name="average_cost_million_pounds_per_gwh",
            new_name="average_cost",
        ),
        migrations.RenameField(
            model_name="simulation_report",
            old_name="fossil_fuels_utilisation_percentage",
            new_name="fossil_fuels_utilisation",
        ),
        migrations.RenameField(
            model_name="simulation_report",
            old_name="nuclear_fuels_utilisation_percentage",
            new_name="nuclear_fuels_utilisation",
        ),
        migrations.RenameField(
            model_name="simulation_report",
            old_name="storage_discrepancy",
            new_name="storage_change",
        ),
        migrations.RenameField(
            model_name="simulation_report",
            old_name="efficiency_score_comment",
            new_name="storage_change_comment",
        ),
        migrations.RenameField(
            model_name="simulation_report",
            old_name="total_CO2_tonnes",
            new_name="total_CO2",
        ),
        migrations.RenameField(
            model_name="simulation_report",
            old_name="total_cost_million_pounds",
            new_name="total_cost",
        ),
        migrations.RemoveField(
            model_name="simulation_report", name="storage_discrepancy_comment",
        ),
    ]
