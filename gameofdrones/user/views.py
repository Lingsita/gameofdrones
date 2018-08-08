from django.contrib.auth.models import User
from django.shortcuts import render

# Create your views here.
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from user.filters import UserFilter
from user.mixins import BulkCreateMixin
from user.serializers import UserSerializer


class UserViewset(BulkCreateMixin, ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_class = UserFilter

