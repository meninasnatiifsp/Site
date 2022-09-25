import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadoresComponent } from './coordenadores.component';

describe('CoordenadoresComponent', () => {
  let component: CoordenadoresComponent;
  let fixture: ComponentFixture<CoordenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
