from django.http import HttpRequest
from django.shortcuts import render
from django.utils.translation import gettext_lazy as _

from products.models import Product


# Create your views here.


def index_page(request: HttpRequest):
    context = {
        'data': _('Hello World !!!'),
        'products': Product.objects.all()
    }
    return render(request, 'home/index.html', context)
