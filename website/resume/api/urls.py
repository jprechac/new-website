"""
"""

from django.urls import path, include
from rest_framework import routers

from . import views

# -----------------------------------------------------------------------------

router = routers.DefaultRouter()
router.register("items", views.ItemReadOnlyViewset, "items")

urlpatterns = [
    path("", include(router.urls)),
]

