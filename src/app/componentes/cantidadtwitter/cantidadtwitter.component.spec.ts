import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadtwitterComponent } from './cantidadtwitter.component';

describe('CantidadtwitterComponent', () => {
  let component: CantidadtwitterComponent;
  let fixture: ComponentFixture<CantidadtwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantidadtwitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadtwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
