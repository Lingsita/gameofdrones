from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.fields import CharField


class UserSerializer(serializers.ModelSerializer):
    username = CharField()

    class Meta:
        model = User
        fields = ('id', 'username',)
        read_only_fields = ('id',)

    def create(self, validated_data):
        instance, _ = self.Meta.model.objects.get_or_create(**validated_data)
        return instance