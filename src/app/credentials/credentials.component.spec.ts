import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsComponent } from './credentials.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CredentialsComponent', () => {
  let component: CredentialsComponent;
  let fixture: ComponentFixture<CredentialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatInputModule, FormsModule, BrowserAnimationsModule],
      declarations: [CredentialsComponent]
    });
    fixture = TestBed.createComponent(CredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
