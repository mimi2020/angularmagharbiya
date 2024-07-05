import { NgModule, CUSTOM_ELEMENTS_SCHEMA }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { QuisommesnousComponent } from './quisommesnous/quisommesnous.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { LoginComponent } from './login/login.component';
import { HomeclientComponent } from './homeclient/homeclient.component';
import { SidebarclientComponent } from './sidebarclient/sidebarclient.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { ValeursComponent } from './valeurs/valeurs.component';
import { VisionComponent } from './vision/vision.component';
import { StrategieComponent } from './strategie/strategie.component';
import { ObjectifComponent } from './objectif/objectif.component';
import { MissionComponent } from './mission/mission.component';
import { ReassureursComponent } from './reassureurs/reassureurs.component';
import { ContactComponent } from './contact/contact.component';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidatureComponent,
    QuisommesnousComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    PartenaireComponent,
    LoginComponent,
    HomeclientComponent,
    SidebarclientComponent,
    CaptchaComponent,
    ValeursComponent,
    VisionComponent,
    StrategieComponent,
    ObjectifComponent,
    MissionComponent,
    ReassureursComponent,
    ContactComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RecaptchaFormsModule,
    RecaptchaModule,
   
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {
}
