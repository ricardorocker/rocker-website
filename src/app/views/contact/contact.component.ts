import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact!: FormGroup;

  constructor(private form: FormBuilder) {}

  ngOnInit(): void {
    this.contact = this.form.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.contact.valid) {
      const name = this.contact.get('name')?.value;
      const email = this.contact.get('email')?.value;
      const message = this.contact.get('message')?.value;

      const whatsappNumber = '55083991222886';
      const text = `Hi, my name is ${name}. My email is ${email}. I have a message for you: ${message}`;
      const encodedText = encodeURIComponent(text);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

      window.open(whatsappURL, '_blank');
    }
  }
}
