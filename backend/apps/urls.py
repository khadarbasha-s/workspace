from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'modules', views.ModuleViewSet, basename='module')
router.register(r'lessons', views.LessonViewSet, basename='lesson')
router.register(r'progress', views.UserProgressViewSet, basename='progress')
router.register(r'notes', views.UserNoteViewSet, basename='note')

urlpatterns = [
    path('', include(router.urls)),
]