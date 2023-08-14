import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsComponent } from './credentials.component';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CredentialsComponent', () => {
  let component: CredentialsComponent;
  let fixture: ComponentFixture<CredentialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      declarations: [CredentialsComponent, MatFormField, MatInput, MatLabel]
    });
    fixture = TestBed.createComponent(CredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
