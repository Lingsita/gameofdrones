import django_filters
from django.contrib.auth.models import User
from django.db.models import Count
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics, filters
from rest_framework.decorators import action
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework import status

from game.choices import WIN_POSIBILITIES
from game.filters import GameResultFilter
from game.models import GameResult
from game.serializers import GameResultSerializer, UserResultSerializer

# Create your views here.


class GameResultViewset(ModelViewSet):
    """
       get:
       Return a list of all the existing game results.

       post:
       Create a new record for a game result.
    """

    serializer_class = GameResultSerializer
    queryset = GameResult.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_class = GameResultFilter

    @action(methods=['post'], detail=False)
    def calculate_result(self, request):
        '''
        Return the winner for the given choices
        '''

        data = request.data
        choice1 = data.pop('choice_1')
        choice2 = data.pop('choice_2')

        if choice1 != choice2:
                if choice2 == WIN_POSIBILITIES.get(choice1):
                    result = {
                        "winner": "player_1",
                        "choice": choice1
                    }
                elif choice1 == WIN_POSIBILITIES.get(choice2):
                    result = {
                        "winner": "player_2",
                        "choice": choice2
                    }
                else:
                    return Response({"message": "Please select a valid choice"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            result = {
                        "winner": "tie",
                        "choice": choice1
                     }

        return Response(result, status=status.HTTP_200_OK)


class UserResultAPIView(generics.ListAPIView):
    """
        Return a list of all the existing users and their summary of victories.
    """
    serializer_class = UserResultSerializer
    queryset = User.objects.all()
    pagination_class = LimitOffsetPagination

