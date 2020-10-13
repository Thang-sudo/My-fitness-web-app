from django.db import models

class Fitness(models.Model):
    foodName = models.CharField(max_length=100)
    caloriesCount = models.FloatField()
    amount = models.FloatField()
