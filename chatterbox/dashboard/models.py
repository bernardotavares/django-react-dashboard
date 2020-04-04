from django.db import models

# Many of the following fields should be models of their own,
# but considering the purpose of this exercise and not having more information about the business,
# will not be using models relationships but a single model for everything

class Student(models.Model):
    course = models.CharField(max_length=100)
    student = models.CharField(max_length=100)
    student_email = models.EmailField(max_length=100, unique=True)
    organization = models.CharField(max_length=100)
    enrol_datetime = models.DateField(auto_now_add=True)
    last_booking = models.DateField()
    total_credits = models.IntegerField()
    remaining_credits = models.IntegerField()
