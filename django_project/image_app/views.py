import json
from .models import UploadImage
from django.views import View
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.core.serializers import serialize
from django.contrib.auth import logout, authenticate, login


class Signup(View):
    def get(self, request):
        return redirect('http://localhost:4200/signup')

    def post(self, request):
        try:
            data = json.loads(request.body)
            username = data['username']
            email = data['email']
            password = data['password']
            if ((password != "") and (username != "") and (email != "")):
                user = User.objects.create_user(
                    username=email, password=password, email=username)
                login(request, user)
                print('is_anonymous', request.user.is_anonymous)
                user.save()
                return JsonResponse({'success': 'done'})
            else:
                return JsonResponse({'failed': "All Fields Are Required To Register"})
        except Exception as e:
            return JsonResponse({'failed': "Email-ID Must Be Unique"})


class LoginUser(View):
    def get(self, request):
        return redirect('http://localhost:4200/login')

    def post(self, request):
        try:
            data = json.loads(request.body)
            email = data['email']
            password = data['password']
            user = authenticate(request, username=email, password=password)
            if user is not None:
                login(request, user)
                print('is_anonymous', request.user.is_anonymous)
                return JsonResponse({'success': 'done'})
            else:
                return JsonResponse({"failed": "Email Or Password Doesn't Match"})
        except Exception as e:
            return JsonResponse({'error': str(e)})


class Image(View):
    def get(self, request):
        objects = UploadImage.objects.all()
        data = serialize('json', objects)
        return JsonResponse(data, safe=False)

    def post(self, request):
        try:
            image = request.FILES['image']
            title = request.POST['title']
            desc = request.POST['desc']
            if ((image != "") and (title != "") and (desc != "")):
                img_doc = UploadImage(image=image, title=title, desc=desc)
                img_doc.save()
                return JsonResponse({"success": "done"})
            else:
                return JsonResponse({"failed": "All Fields Are Required To Upload A Pic"})
        except Exception as e:
            return JsonResponse({"failed": str(e)})


class SoloImage(View):
    def get(self, request, id):
        try:
            img_object = UploadImage.objects.get(id=id)
            data = serialize('json', [img_object])
            print(data)
            return JsonResponse(data, safe=False)
        except Exception as e:
            return JsonResponse({'error': str(e)})


class Delete(View):
    def get(self, request, id):
        try:
            UploadImage.objects.get(id=id).delete()
            return JsonResponse({"success": "done"})
        except Exception as e:
            return JsonResponse({"failure": str(e)})


class LogoutUser(View):
    def get(self, request):
        print(request)
        logout(request)
        return redirect("http://localhost:4200/signup")


class Home(View):
    def get(self, request):
        return redirect('http://localhost:4200/signup')
