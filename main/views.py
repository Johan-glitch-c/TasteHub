from django.shortcuts import render
from .models import Recipe, Category


# Create your views here.
def index(request):
    recipes = Recipe.objects.all()
    categories = Category.objects.values_list('name',flat=True)
    context = {
        'recipes': recipes,
        'categories': categories,
    }
    return render(request,'index.html',context)

def Recipes(request):
    recipes = Recipe.objects.all()
    categories = Category.objects.all().exclude(name='All Categories')
    return render(request,'Recipes.html',{'recipes':recipes,'categories':categories})