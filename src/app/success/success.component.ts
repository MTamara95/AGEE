import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  emailAddress: string | null = '';
  role: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.emailAddress = this.route.snapshot.paramMap.get('emailAddress');
    this.role = this.route.snapshot.paramMap.get('role');
  }
}