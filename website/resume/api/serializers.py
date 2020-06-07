"""
"""

from rest_framework import serializers

from resume.models import Bullet, Item

# -----------------------------------------------------------------------------

class BulletSeriailzer(serializers.ModelSerializer):
    class Meta:
        model = Bullet
        fields = [
            'id',
            'text',
        ]


class ItemSerializer(serializers.ModelSerializer):

    bullets = BulletSeriailzer(read_only=True, many=True)

    class Meta:
        model = Item
        fields = [
            'id',
            'title',
            'institution_name',
            'city',
            'state',
            'start_date',
            'end_date',
            'gpa',
            'display_description',
            'bullets',
        ]

