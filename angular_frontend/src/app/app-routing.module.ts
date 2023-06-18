import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ImageComponent } from './image/image.component';
import { SoloimageComponent } from './soloimage/soloimage.component';
import { BrowserModule } from '@angular/platform-browser';
import { DeleteimageComponent } from './deleteimage/deleteimage.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'image', component: ImageComponent },
  { path: 'soloimage/:id', component: SoloimageComponent },
  { path: 'delete/:id', component: DeleteimageComponent },
  // { path: '**', redirectTo: 'signup' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
