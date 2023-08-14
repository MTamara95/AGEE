import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessComponent } from './success.component';
import { AppRoutingModule } from '../app-routing.module';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [SuccessComponent]
    });
    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
