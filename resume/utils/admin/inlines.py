"""
"""

from django.contrib import admin

from resume.models import Bullet

from .forms import BulletInlineForm

# -----------------------------------------------------------------------------


class BulletInline(admin.TabularInline):
    model = Bullet
    form = BulletInlineForm

    extra = 1


