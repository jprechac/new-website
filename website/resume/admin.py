from django.contrib import admin

from .models import Job

# -----------------------------------------------------------------------------


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {
            "fields": ('title', 'company_name', 'city', 'state', 'start_date', 'end_date',),
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

