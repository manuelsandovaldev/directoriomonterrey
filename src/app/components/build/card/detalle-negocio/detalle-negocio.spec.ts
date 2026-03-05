import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNegocio } from './detalle-negocio';

describe('DetalleNegocio', () => {
  let component: DetalleNegocio;
  let fixture: ComponentFixture<DetalleNegocio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleNegocio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleNegocio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
