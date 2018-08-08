import django_filters
from game.models import GameResult


class GameResultFilter(django_filters.FilterSet):
    player_id = django_filters.CharFilter(field_name="winner")
    player = django_filters.CharFilter(field_name="winner__username", lookup_expr='iexact')
    date= django_filters.DateTimeFilter(field_name="date", lookup_expr='gte')

    class Meta:
        model = GameResult
        fields = ('player', 'date')
