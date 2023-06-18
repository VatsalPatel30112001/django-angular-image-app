from django.shortcuts import redirect
from django.urls import path, include, re_path
from .views import Home, Image, LoginUser, LogoutUser, Signup, SoloImage, Delete

urlpatterns = [
    path('', Home.as_view(), name="home"),
    path('image', Image.as_view(), name="image"),
    path('signup', Signup.as_view(), name="signup"),
    path('login', LoginUser.as_view(), name="login"),
    path('logout', LogoutUser.as_view(), name="logout"),
    path('delete/<int:id>', Delete.as_view(), name="delete"),
    path('soloimage/<int:id>', SoloImage.as_view(), name="soloimage"),
    # re_path(r'^.*$', lambda request: redirect('http://localhost:4200/signup')),
]
