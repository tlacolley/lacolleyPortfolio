from django.db import models

# Create your models here.


class WebWork(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    img = models.ImageField(upload_to = 'images/web')
    link = models.URLField(max_length=200,null=True)

    def __str__(self):
        return self.name


class VFXWork(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    img = models.ImageField(upload_to = 'images/vfx')
    video_code = models.CharField(max_length=200,null=True)
    CAT_CHOICE = [
    ('comp', 'Compositing'),
    ('mat', 'Matte Painting'),
    ('trk', 'Tracking/Green Screen'),
    ('oth', 'Others'),
    ]
    category = models.CharField(
        max_length=50,
        choices=CAT_CHOICE,
        default= 'oth',
    )    
    
    def __str__(self):
        return self.name