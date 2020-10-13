from rest_framework import routers
from .api import FitnessViewSet

router = routers.DefaultRouter()
router.register('api/nutrition', FitnessViewSet, 'nutrition')

urlpatterns = router.urls