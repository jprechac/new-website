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
        filters = {
            'active': True
        }

        params = self.request.query_params
        section = params.get('section', None)
        if section:
            filters['section'] = section

        # return combined
        items = Item.objects.filter(**filters).order_by('-is_present', '-end_date', '-start_date').prefetch_related(
            Prefetch(
                'bullets',
                queryset=Bullet.objects.filter(active=True)
            )
        )

        return items


