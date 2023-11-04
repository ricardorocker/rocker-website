import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(private form: FormBuilder) {}

  get formControls() {
    return this.contactForm.controls;
  }

  ngOnInit(): void {
    this.contactForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formElement = document.createElement('form');
      formElement.target = '_blank';
      formElement.action = 'https://formsubmit.co/contact@ricardorocker.com';
      formElement.method = 'POST';

      for (const key in this.contactForm.value) {
        if (this.contactForm.value.hasOwnProperty(key)) {
          const inputElement = document.createElement('input');
          inputElement.type = 'hidden';
          inputElement.name = key;
          inputElement.value = this.contactForm.value[key];
          formElement.appendChild(inputElement);
        }
      }

      document.body.appendChild(formElement);
      formElement.submit();
    } else {
      // Handle form validation errors and display error messages.
      Object.keys(this.contactForm.controls).forEach((controlName) => {
        const control = this.contactForm.get(controlName);
        if (control && control.invalid) {
          control.markAsTouched(); // Mark the control as touched to trigger error messages.
        }
      });
    }
  }
}
