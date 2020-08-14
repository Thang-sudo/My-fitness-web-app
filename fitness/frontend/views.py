from django.shortcuts import render, redirect

def index(request):
    return render(request, 'frontend/index.html')

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        return redirect('dashboard')
    else:
        return render(request,'frontend/index.html')

def register(request):
    return render(request, 'frontend/index.html')
