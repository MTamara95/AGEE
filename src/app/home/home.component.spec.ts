import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CredentialsComponent } from '../credentials/credentials.component';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      declarations: [HomeComponent, CredentialsComponent, MatFormField, MatLabel, LoginButtonComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
