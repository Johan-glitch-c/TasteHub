from django.http import HttpResponse, JsonResponse
from django.shortcuts import render,get_object_or_404,redirect
from .models import Recipe, Category
from .forms import SearchForm
from django.db.models import Q

# Create your views here.
def index(request):
    recipes = Recipe.objects.all()
    categories = Category.objects.all()

    search = request.GET.get('search', '').strip()
    category = request.GET.get('category', '').strip()

    if search:
        recipes = recipes.filter(name__icontains=search)

    if category.isdigit():
        recipes = recipes.filter(category_id=int(category))

    return render(request, 'index.html', {
        'recipes': recipes,
        'categories': categories,
        'search': search,
        'selected_category': category,
    })

def Recipes(request):
    recipes = Recipe.objects.all()
    categories = Category.objects.all().exclude(name='All Categories')
    return render(request,'Recipes.html',{'recipes':recipes,'categories':categories})

def category_recipes(request,id):
    category=get_object_or_404(Category,id=id)
    recipes = Recipe.objects.filter(category=category)
    context = {'recipes':recipes,'category':category}
    return render(request,'category_recipes.html',context)


def About(request):
    return render(request,'About.html')