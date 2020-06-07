"""
"""

from rest_framework import viewsets, permissions

from resume.models import Job

from .serializers import JobSerializer

# -----------------------------------------------------------------------------


class JobReadOnlyViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Job.objects.filter(active=True)
    serializer_class = JobSerializer
    permission_classes = [permissions.AllowAny,]


