from .base import *

DEBUG = False
ALLOWED_HOSTS = [
    '.herokuapp.com',
    '*.herokuapp.com',
    'jordanprechac.com',
    '.jordanprechac.com',
]

# REST Framework Production
# Remove the Browsable API in production
REST_FRAMEWORK['DEFAULT_RENDERER_CLASSES'] = [
    'rest_framework.renderers.JSONRenderer',
]

