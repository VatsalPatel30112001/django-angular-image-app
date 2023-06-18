from django.db import models


class UploadImage(models.Model):
    image = models.ImageField(upload_to='images/')
    title = models.CharField(max_length=50, blank=False)
    desc = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.title
