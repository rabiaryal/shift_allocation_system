from django.core.mail import send_mail
from django.conf import settings

#def send_mail_to_emp():
 #   send_mail(
 #       subject = "Shift Allocated Table" , 
  #      message = "This provides you the table for the allocated shifts", 
   #     from_email= settings.EMAIL_HOST_USER
    #    receipient_list = # **import from database needed**
    #)

def send_mail_with_attachment():
    
    subject = "Shift Allocated Table" , 
    message = "This provides you the table for the allocated shifts", 
    from_email= settings.EMAIL_HOST_USER
    receipient_list = # **import from database needed**
    send_mail_attach(
       email = EmailMessage(subject,message, from_email, receipient_list)
    )
    email.attach_files(*#filepath#
                                  )
