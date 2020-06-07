"""
"""

from rest_framework import serializers

from resume.models import Job

# -----------------------------------------------------------------------------


class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Job
        fields = [
            'id',
            'title',
            'company_name',
            'city',
            'state',
            'start_date',
            'end_date',
        ]

