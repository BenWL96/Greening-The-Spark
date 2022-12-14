# Generated by Django 4.1.1 on 2022-12-30 13:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("greening_the_spark_api", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="field_related_info",
            options={
                "verbose_name": "Field Related Info",
                "verbose_name_plural": "Field Related Info",
            },
        ),
        migrations.AlterModelOptions(
            name="info_panel_questions_and_answers",
            options={
                "verbose_name": "Info Panel Q&A",
                "verbose_name_plural": "Info Panel Q&A's",
            },
        ),
        migrations.AlterModelOptions(
            name="simulation_report",
            options={
                "verbose_name": "Simulation Report",
                "verbose_name_plural": "Simulation Reports",
            },
        ),
        migrations.RemoveField(
            model_name="simulation_report", name="average_CO2_score",
        ),
        migrations.RemoveField(
            model_name="simulation_report", name="average_cost_score",
        ),
    ]
