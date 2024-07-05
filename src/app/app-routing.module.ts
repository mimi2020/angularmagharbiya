import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { QuisommesnousComponent } from './quisommesnous/quisommesnous.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { LoginComponent } from './login/login.component';
import { ProfilclientComponent } from './profilclient/profilclient.component';
import { HomeclientComponent } from './homeclient/homeclient.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { VisionComponent } from './vision/vision.component';
import { ValeursComponent } from './valeurs/valeurs.component';
import { ReassureursComponent } from './reassureurs/reassureurs.component';
import { StrategieComponent } from './strategie/strategie.component';
import { ObjectifComponent } from './objectif/objectif.component';
import { MissionComponent } from './mission/mission.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"candidature",component:CandidatureComponent},
  {path:"quisommesnous",component:QuisommesnousComponent},
  {path:"partenaire",component:PartenaireComponent},
  {path:"login",component:LoginComponent},
  {path:"profil/:id",component:ProfilclientComponent},
  {path:"homeclient",component:HomeclientComponent},
  {path:"captcha",component:CaptchaComponent},
  {path:"vision",component:VisionComponent},
  {path:"valeurs",component:ValeursComponent},
  {path:"reassureurs",component:ReassureursComponent},
  {path:"strategie",component:StrategieComponent},
  {path:"objectif",component:ObjectifComponent},
  {path:"mission",component:MissionComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
