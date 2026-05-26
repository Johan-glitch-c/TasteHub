from django.shortcuts import render
from .models import Recipe, Category


# Create your views here.
def index(request):
    recipes = Recipe.objects.all()
    categories = Category.objects.all()
    context = {
        'recipes': recipes,
        'categories': categories,
    }
    return render(request,'index.html',context)