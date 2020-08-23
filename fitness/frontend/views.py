from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import auth
import json

def index(request):
    return render(request, 'frontend/index.html')
@csrf_exempt
def login(request):
    if request.method == 'POST':
        decodedRequest = request.body.decode('utf-8')
        json_acceptable_string = decodedRequest.replace("'", "\"")
        d = json.loads(json_acceptable_string)
        s = json.loads(d["body"])

        username = s["username"]
        password = s["password"]
        
        user = auth.authenticate(username=username, password=password)
        
        if user is not None:
            auth.login(request, user)
            return HttpResponse("True")
        else:
            return HttpResponse("False")
    else:
        return render(request,'frontend/index.html')

@csrf_exempt
def register(request):
    if request.method == 'POST':
        decodedRequest = request.body.decode('utf-8')
        json_acceptable_string = decodedRequest.replace("'","\"")
        d = json.loads(json_acceptable_string)
        s = json.loads(d["body"])

        username = s["username"]
        password = s["password1"]
        password2 = s["password2"]

        if password == password2:
            if User.objects.filter(username=username).exists():
                print("user is already existed")
                return HttpResponse("False")
            else:
                user = User.objects.create_user(username=username, password=password)
                print(user)
                user.save()
                auth.login(request, user)
                print("user is created")
                return HttpResponse("True")
        else:
            print("password1 is not the same as password2")
            return HttpResponse("False")
    return render(request, 'frontend/index.html')
@csrf_exempt
def logout(request):
    if request.method == 'POST':
        auth.logout(request)
        print("User has been logged out")
        return HttpResponse("True")

def dashboard(request):
    return render(request, 'frontend/index.html')
