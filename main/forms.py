from django import forms
from .models import Recipe

class SearchForm(forms.Form):

    class Meta:
        model = Recipe

        fields=['name','category']


