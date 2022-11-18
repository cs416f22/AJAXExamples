from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='yelp-index'),
    path('v2/', views.index_v2, name='yelp-index_v2'),
]
