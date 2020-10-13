from rest_framework import serializers
from fitnessmanager.models import Fitness

class FitnessSerializers(serializers.ModelSerializer):
    class Meta:
        model = Fitness
        fields = '__all__'