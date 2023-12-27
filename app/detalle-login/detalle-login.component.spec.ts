import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLoginComponent } from './detalle-login.component';

describe('DetalleLoginComponent', () => {
  let component: DetalleLoginComponent;
  let fixture: ComponentFixture<DetalleLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
