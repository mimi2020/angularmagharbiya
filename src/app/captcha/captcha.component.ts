import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {
  captchaText: string = '';
  captchaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.captchaForm = this.fb.group({
      captchaEntered: ['']
    });
  }

  ngOnInit(): void {
    this.generateCaptcha();
  }

  generateCaptcha(): void {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.captchaText = Array.from({ length: 5 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    this.captchaForm.reset();
  }

  validateCaptcha(): void {
    const enteredText = this.captchaForm.get('captchaEntered')?.value;
    
    if (enteredText === this.captchaText) {
      alert('Captcha validated successfully!');
    } else {
      alert('Captcha validation failed. Please try again.');
      this.generateCaptcha();
    }
  }
}
