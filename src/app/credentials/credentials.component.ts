import { Component, Input } from '@angular/core';
import { CredentialsService } from 'src/services/credentials.service';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent {
  @Input() username: string = "";
  @Input() password: string = "";

  constructor(private credentialsService: CredentialsService){}

  onUsernameChange(){
    this.credentialsService.username = this.username;
  }

  onPasswordChange(){
    this.credentialsService.password = this.password;
  }
}
