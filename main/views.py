from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'recipe_site_frontend_react.jsx')