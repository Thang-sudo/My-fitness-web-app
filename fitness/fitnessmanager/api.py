from fitnessmanager.models import Fitness
from rest_framework import viewsets, permissions
from .serializers import FitnessSerializers

#Nutrion viewset

class FitnessViewSet(viewsets.ModelViewSet):
    queryset = Fitness.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = FitnessSerializers