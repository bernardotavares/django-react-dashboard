from rest_framework import routers
from .api import StudentViewSet

router = routers.DefaultRouter()
router.register('api/students', StudentViewSet, 'student')

urlpatterns = router.urls