import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSignUpComponent } from './dialog-sign-up.component';

describe('DialogSignUpComponent', () => {
  let component: DialogSignUpComponent;
  let fixture: ComponentFixture<DialogSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSignUpComponent]
    });
    fixture = TestBed.createComponent(DialogSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
