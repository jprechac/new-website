from django.contrib import admin

from .models import Bullet, Item
from .utils.admin.inlines import BulletInline

# -----------------------------------------------------------------------------


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {
            "fields": ('title', 'institution_name',),
            "classes": ('extrapretty', 'wide',),
        }),
        ("Descriptors", {
            "fields": ('city', 'state', 'start_date', 'end_date', 'gpa', 'display_description',),
            "classes": ('extrapretty', 'wide',),
        }),
        ("Extras", {
            "fields": ('active', 'description', 'date_created', 'last_changed', 'id',),
            "classes": ('extrapretty', 'wide', 'collapse', 'in',),
        })
    )
    readonly_fields = (
        'id',
        'date_created', 'last_changed',
    )

    inlines = [
        BulletInline,
    ]


@admin.register(Bullet)
class BulletAdmin(admin.ModelAdmin):
    pass

