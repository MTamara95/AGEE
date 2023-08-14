import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginButtonComponent } from './login-button.component';
import { HttpClientModule } from '@angular/common/http';

describe('LoginButtonComponent', () => {
  let component: LoginButtonComponent;
  let fixture: ComponentFixture<LoginButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [LoginButtonComponent]
    });
    fixture = TestBed.createComponent(LoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
