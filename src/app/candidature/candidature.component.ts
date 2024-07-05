import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../services/myservices.service';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit{
  form: FormGroup;
  captchaText: string;
  candidatureEnregistree: boolean = false;

  ngOnInit(): void {
    
  }

  constructor(private fb: FormBuilder,private service:MyserviceService) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      NumTel: ['', Validators.required],
      niveau: ['', Validators.required],
      typedestage: ['', Validators.required],
      contact: ['', Validators.required],
      fileCV: [null, Validators.required],
      fileLM: [null, Validators.required],
      captchaEntered: ['', Validators.required]
    });

    this.generateCaptcha();
  }

  generateCaptcha() {
    this.captchaText = Math.random().toString(36).substring(2, 7).toUpperCase();
  }

  validateCaptcha() {
    if (this.form.value.captchaEntered === this.captchaText) {
      console.log('Captcha validé');
    } else {
      console.log('Captcha invalide');
    }
  }

  AddCandidature() {
    if (this.form.valid && this.form.value.captchaEntered === this.captchaText) {
      this.candidatureEnregistree = true;
      console.log('Formulaire soumis avec succès');

 let formdata= new FormData()

 console.log("nom",this.form.value.nom)
 console.log("prenom",this.form.value.prenom)
 console.log("NumTel",this.form.value.NumTel)
 console.log("niveau",this.form.value.niveau)
 console.log("typedestage",this.form.value.typedestage)
 console.log("email",this.form.value.Email)
 console.log("contact",this.form.value.contact)



//  formdata.append("file",this.form.value.contact)
//  formdata.append("file1",this.form.value.contact)

 this.service.CreateCandidat(formdata).subscribe(
  (res)=>{console.log("sucess")},
  (error)=>{console.log("error")}
 )

    } else {
      this.candidatureEnregistree = false;
      console.log('Formulaire invalide ou captcha incorrect');
    }
  }

  handleFileInput(event: any, type: string) {
    const file = event.target.files[0];
    if (type === 'cv') {
      this.form.patchValue({ fileCV: file });
    } else if (type === 'lm') {
      this.form.patchValue({ fileLM: file });
    }
  }


 
}
