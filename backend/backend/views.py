from django.http import HttpResponse
from django.contrib.auth import authenticate, login


def my_view(request):
    username = request.POST["username"]
    password = request.POST["password"]
    user = authenticate(request, username=username, password=password)
    if user is not None:
      login(request, user)
      return redirect('home')
        
    else:
      message.sucess(request, ("Wrong login detail."))
      return redirect('login')


def login_page(request):
    return render(request, 'shift_allocation_system/frontend/scr/components/shared/LoginPage.tsx')

def home(request):
    return HttpResponse("login page")