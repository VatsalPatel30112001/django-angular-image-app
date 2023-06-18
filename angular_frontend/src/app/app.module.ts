import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ImageComponent } from './image/image.component';
import { SoloimageComponent } from './soloimage/soloimage.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DeleteimageComponent } from './deleteimage/deleteimage.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ImageComponent,
    SoloimageComponent,
    DeleteimageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
