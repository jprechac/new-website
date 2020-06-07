"""
"""

from django.db.models import Prefetch
from rest_framework import viewsets, permissions

from resume.models import Bullet, Item

from .serializers import ItemSerializer

# -----------------------------------------------------------------------------


class ItemReadOnlyViewset(viewsets.ReadOnlyModelViewSet):
    # queryset = Job.objects.filter(active=True)
    serializer_class = ItemSerializer
    permission_classes = [permissions.AllowAny,]

    def get_queryset(self):
        # base_jobs = Job.objects.filter(active=True)

        # combined = base_jobs.order_by('-is_present', '-end_date', '-start_date')

        # return combined
        items = Item.objects.filter(active=True).order_by('-is_present', '-end_date', '-start_date').prefetch_related(
            Prefetch(
                'bullets',
                queryset=Bullet.objects.filter(active=True)
            )
        )

        return items


