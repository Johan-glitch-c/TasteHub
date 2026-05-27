from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='categories/',blank=False,null=False,verbose_name="image",default='categories/default.jpg')
    description = models.TextField(blank=False,null=True,verbose_name="description")
    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'
        verbose_name = 'Category'

class Recipe(models.Model):
    name=models.CharField(max_length=100,verbose_name="recipe name")
    ingredients=models.TextField(blank=False,null=False,verbose_name="ingredients")
    category=models.ForeignKey(Category,on_delete=models.CASCADE,verbose_name="category")
    image=models.ImageField(upload_to='recipe_images/',blank=True,null=True,verbose_name="image")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Recipes'
        verbose_name = 'Recipe'


