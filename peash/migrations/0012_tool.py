# Generated by Django 4.2.7 on 2024-03-05 20:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('peash', '0011_repodest_alter_project_icon_repo_extraimage'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tool',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tool_project', to='peash.project')),
            ],
        ),
    ]
