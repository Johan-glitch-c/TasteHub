from django.http import HttpResponse
from django.shortcuts import render,get_object_or_404
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

def Recipes(request):
    recipes = Recipe.objects.all()
    categories = Category.objects.all().exclude(name='All Categories')
    return render(request,'Recipes.html',{'recipes':recipes,'categories':categories})

def category_recipes(request,id):
    category=get_object_or_404(Category,id=id)
    recipes = Recipe.objects.filter(category=category)
    context = {'recipes':recipes,'category':category}
    return render(request,'category_recipes.html',context)