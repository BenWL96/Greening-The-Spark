from pathlib import Path
from decouple import config
import os
import oracledb

BASE_DIR = Path(__file__).resolve().parent.parent


SECRET_KEY=config("SECRET_KEY", default='')


DEBUG = True

ALLOWED_HOSTS = []

#'greening-the-spark.herokuapp.com'


INSTALLED_APPS = [
    'baton',
    'django.contrib.admin',

    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'greening_the_spark_api',

    'baton.autodiscover',
    'rest_framework',
    'corsheaders',
    'drf_yasg'

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

C_IP=config("C_IP", default='')
B_IP=config("B_IP", default='')

CORS_ALLOW_ALL_ORIGINS = False
CORS_ALLOWED_ORIGINS = [
    "http://127.0.0.1:8000",
    B_IP,
    C_IP
]

""""#cors allowed origins
https://greening-the-spark.herokuapp.com",
    C_IP,
    B_IP,"""

ROOT_URLCONF = 'greening_the_spark.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'greening_the_spark.wsgi.application'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': config("DATABASE_NAME", default=''),
        'USER': config('DATABASE_USER', default=''),
        'HOST': config('DATABASE_HOST', default=''),
        'PORT': config('PORT', default='3306', cast=float),
        'PASSWORD': config('DATABASE_PASS', default=''),
        'OPTIONS': {'sql_mode': 'traditional'}}
}

"""FOR RAILWAY..

import dj_database_url

DATABASE_URL = os.getenv("DATABASE_URL")

DATABASES = {
    "default": dj_database_url.config(default=DATABASE_URL, conn_max_age=1800),
}"""

"""DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.oracle',
        'NAME': 'TM3W2QQKPVEIWLS0',
        'USER': 'ADMIN',
        'PASSWORD': 'aFASFQE141$!$!1afF',
        'HOST': '81.98.137.255',
        'PORT': '1521',
    }
}

"""
"""connection = oracledb.connect(user="ADMIN",
                              password="aFASFQE141$!$!1afF",
                              dsn="localhost:1521/TM3W2QQKPVEIWLS0"
                              )"""
#host="localhost", port=1521, service_name="TM3W2QQKPVEIWLS0"




REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
   'rest_framework.permissions.AllowAny',
    ]
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'build/static')
]
STATICFILES_STORAGE = "whitenoise.storage.CompressedStaticFilesStorage"

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


BATON = {
    'SITE_HEADER': 'Greening The Spark',
    'SITE_TITLE': 'Greening The Spark',
    'INDEX_TITLE': 'Site administration',
    'SUPPORT_HREF': 'https://github.com/otto-torino/django-baton/issues',
    'COPYRIGHT': 'copyright © 2017 <a href="www.cornucopia.co.uk/"Cornucopia</a>', # noqa
    'POWERED_BY': '<a href="https://www.cornucopia.co.uk/">Cornucopia</a>',
    'CONFIRM_UNSAVED_CHANGES': True,
    'SHOW_MULTIPART_UPLOADING': True,
    'ENABLE_IMAGES_PREVIEW': True,
    'CHANGELIST_FILTERS_IN_MODAL': True,
    'CHANGELIST_FILTERS_ALWAYS_OPEN': False,
    'CHANGELIST_FILTERS_FORM': True,
    'COLLAPSABLE_USER_AREA': False,
    'MENU_ALWAYS_COLLAPSED': False,
    'MENU_TITLE': 'Menu',
    'MESSAGES_TOASTS': False,
    'GRAVATAR_DEFAULT_IMG': 'retro',
    'LOGIN_SPLASH': '/static/core/img/login-splash.png',
    'SEARCH_FIELD': {
        'label': 'Search contents...',
        'url': '/search/',
    }
}