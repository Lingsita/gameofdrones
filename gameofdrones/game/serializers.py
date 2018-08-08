from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField

from game.models import GameResult
from user.serializers import UserSerializer


class GameResultSerializer(serializers.ModelSerializer):
    winner = UserSerializer(read_only=True)
    winner_id = PrimaryKeyRelatedField(source='winner', queryset=User.objects.all(), write_only=True)

    class Meta:
        model = GameResult
        fields = '__all__'
        depth = 1


class UserResultSerializer(serializers.ModelSerializer):
    wins = serializers.SerializerMethodField()
    # wins = serializers.IntegerField() TODO: Check annotation performance in View

    class Meta:
        model = User
        fields = ('id', 'username', 'wins')

    def get_wins(self, obj):
        return obj.victories.count()
