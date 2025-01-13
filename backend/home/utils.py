from django.core.mail import send_mail
from django.conf import settings

def send_mail_to_emp():
    send_mail(
        subject = "Shift Allocated Table" , 
        message = "This provides you the table for the allocated shifts", 
        from_email= settings.EMAIL_HOST_USER
        receipient_list = # **import from database needed**
    )