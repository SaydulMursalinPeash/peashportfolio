# Generated by Django 5.0.2 on 2024-02-29 00:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peash', '0006_experience_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=400)),
                ('edu_from', models.CharField(max_length=400)),
                ('year', models.CharField(max_length=400)),
                ('logo', models.ImageField(upload_to='edu/')),
            ],
        ),
        migrations.CreateModel(
            name='Extracurricular',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=400)),
                ('edu_from', models.CharField(max_length=400)),
                ('year', models.CharField(max_length=400)),
                ('logo', models.ImageField(upload_to='edu/')),
            ],
        ),
    ]
