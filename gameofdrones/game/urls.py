from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from game.views import GameResultViewset, UserResultAPIView

router = DefaultRouter()
router.register(r'game', GameResultViewset)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^game/results', UserResultAPIView.as_view()),
]