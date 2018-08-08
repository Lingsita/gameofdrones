from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth.models import User


class UserTests(APITestCase):
    def test_create_user(self):
        """
        Ensure we can create a new user object.
        """
        url = reverse('user-list')
        data = {'username': 'myuser'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().username, 'myuser')

    def test_bulk_create_user(self):
        """
            Ensure we can get or create a list users.
        """
        url = reverse('user-list')
        data = [{'username': 'myuser'}, {'username': 'myuser2'}]
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 2)
        self.assertEqual(tuple(User.objects.all().values_list('username', flat=True)), ('myuser', 'myuser2'))
