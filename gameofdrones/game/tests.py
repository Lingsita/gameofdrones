from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth.models import User

from game.models import GameResult
from game.choices import WIN_POSIBILITIES


class GameTests(APITestCase):
    def setUp(self):
        player = User.objects.create(username="myuser")
        GameResult.objects.create(winner=player, won=3, lost=2)
        GameResult.objects.create(winner=player, won=3, lost=0)

    def test_calculate_valid_result(self):
        """
        Ensure we can calculate who wins the match.
        """
        url = reverse('gameresult-calculate-result')
        for data in WIN_POSIBILITIES:
            json_data = {
                "choice_1": data,
                "choice_2": WIN_POSIBILITIES.get(data)
            }
            response = self.client.post(url, json_data, format='json')
            self.assertEqual(response.status_code, status.HTTP_200_OK)
            self.assertEqual(response.data.get('choice'), data)
            self.assertEqual(response.data.get('winner'), 'player_1')

    def test_calculate_invalid_result(self):
        """
        Ensure won't process wrong choices.
        """

        url = reverse('gameresult-calculate-result')
        json_data = {
            "choice_1": 'rock',
            "choice_2": 'papers'
        }
        response = self.client.post(url, json_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data.get('message'), 'Please select a valid choice')


    def test_get_user_resume(self):
        pass


    def get_user_games(self):
        pass
