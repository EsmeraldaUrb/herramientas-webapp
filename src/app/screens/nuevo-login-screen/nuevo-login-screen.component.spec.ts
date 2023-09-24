import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoLoginScreenComponent } from './nuevo-login-screen.component';

describe('NuevoLoginScreenComponent', () => {
  let component: NuevoLoginScreenComponent;
  let fixture: ComponentFixture<NuevoLoginScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoLoginScreenComponent]
    });
    fixture = TestBed.createComponent(NuevoLoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
