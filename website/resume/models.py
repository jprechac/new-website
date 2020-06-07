from django.db import models
from django.utils.translation import gettext_lazy as _

# -----------------------------------------------------------------------------


class Job(models.Model):

    title = models.CharField(
        max_length=255,
        null=False, blank=False,
        verbose_name=_("job title")
    )
    company_name = models.CharField(
        max_length=255,
        null=False, blank=False,
        verbose_name=_("company name")
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



