# Generated by Django 2.2.1 on 2019-06-01 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lacolley_portfolio', '0002_auto_20190530_1415'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vfxwork',
            name='video_link',
        ),
        migrations.AddField(
            model_name='vfxwork',
            name='video_code',
            field=models.CharField(max_length=200, null=True),
        ),
    ]