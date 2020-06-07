"""
"""

from django.db import models
from django.db.models import Case, When, Value

# -----------------------------------------------------------------------------


class BaseItemManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().annotate(is_present=Case(
            When(end_date__isnull=True, then=Value(True)),
            default=Value(False),
            output_field=models.BooleanField()
        ))

