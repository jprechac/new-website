"""
"""

from django import forms

from resume.models import Bullet

# -----------------------------------------------------------------------------


class BulletInlineForm(forms.ModelForm):
    class Meta:
        model = Bullet
        fields = [
            'item',
            'text',
            'order',
            'active',
        ]
