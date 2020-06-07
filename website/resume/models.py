from django.db import models
from django.utils.translation import gettext_lazy as _

from . import managers

# -----------------------------------------------------------------------------


class Item(models.Model):

    title = models.CharField(
        max_length=255,
        null=False, blank=False,
        verbose_name=_("job title")
    )
    institution_name = models.CharField(
        max_length=255,
        null=False, blank=False,
        verbose_name=_("institution name")
    )

    city = models.CharField(
        max_length=255,
        null=False, blank=False
    )
    state = models.CharField(
        max_length=255,
        null=False, blank=False
    )

    start_date = models.DateField(
        null=False, blank=False,
        verbose_name=_("start date")
    )
    end_date = models.DateField(
        null=True, blank=True,
        verbose_name=_("end date")
    )

    display_description = models.TextField(
        null=True, blank=True
    )
    gpa = models.DecimalField(
        max_digits=5, decimal_places=2,
        null=True, blank=True
    )


    # extras
    active = models.BooleanField(
        null=False, blank=False, default=True
    )
    description = models.TextField(
        null=True, blank=True
    )
    date_created = models.DateTimeField(
        auto_now_add=True
    )
    last_changed = models.DateTimeField(
        auto_now=True
    )

    objects = managers.BaseItemManager()

    def __str__(self):
        return f"{self.title} - {self.institution_name}"


class Bullet(models.Model):

    item = models.ForeignKey(
        to='Item',
        on_delete=models.CASCADE,
        related_name='bullets',
        null=False, blank=False
    )
    text = models.TextField(
        null=False, blank=False
    )
    order = models.IntegerField(
        null=False, blank=False, default=0
    )

    # extras
    active = models.BooleanField(
        null=False, blank=False, default=True
    )
    description = models.TextField(
        null=True, blank=True
    )
    date_created = models.DateTimeField(
        auto_now_add=True
    )
    last_changed = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        ordering = ['order']




