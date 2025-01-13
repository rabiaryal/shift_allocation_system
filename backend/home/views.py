from django.shortcuts import render
from django.http import HttpResponse


def login_page(request):
   # return render(request, 'login.html')
    return HttpResponse("login page")