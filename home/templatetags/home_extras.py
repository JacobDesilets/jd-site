from django import template

register = template.Library()

@register.simple_tag(takes_context=True)
def filename(context):
    '''Returns filename minus the extension'''
    return context.template_name.split('.')[0]