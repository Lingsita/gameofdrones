from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from user.views import UserViewset

router = DefaultRouter()
router.register(r'users', UserViewset)

urlpatterns = [
    url(r'^', include(router.urls)),
]