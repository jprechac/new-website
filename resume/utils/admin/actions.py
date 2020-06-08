"""
"""

# -----------------------------------------------------------------------------


def activate_item(modeladmin, request, queryset):
    queryset.update(active=True)
activate_item.short_description = "Activate selected items"

def deactivate_item(modeladmin, request, queryset):
    queryset.update(active=False)
deactivate_item.short_description = "Deactivate selected items"
