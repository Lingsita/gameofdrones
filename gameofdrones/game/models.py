from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class GameResult(models.Model):

    winner = models.ForeignKey(User, related_name='victories', db_index=True)
    won = models.IntegerField(default=0)
    lost = models.IntegerField(default=0)
    date = models.DateTimeField(auto_now_add=True)
