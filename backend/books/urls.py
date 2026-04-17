from django.urls import path
from . import views

urlpatterns = [
    path('books/', views.get_books),
    path('books/<int:pk>/', views.book_detail),
    path('upload/', views.upload_books),
    path('ask/', views.ask_question),
    path('recommend/', views.recommend_books),
]