import { Component } from '@angular/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private emailComposer: EmailComposer) {}
  composeEmail() {
    this.emailComposer.isAvailable().then((available: boolean)=> {
      if (available) {}
    });
    const email = {
      to: 'max@email.com',
      cc: 'sarah@email.com',
      bcc: ['randy@email.com', 'julie@email.com'],
      subject: 'Email',
      body: 'Hey Sarah!'
    };
    this.emailComposer.open(email);
  }
}
