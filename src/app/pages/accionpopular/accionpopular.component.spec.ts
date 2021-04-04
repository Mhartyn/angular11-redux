import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionpopularComponent } from './accionpopular.component';

describe('AccionpopularComponent', () => {
  let component: AccionpopularComponent;
  let fixture: ComponentFixture<AccionpopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionpopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionpopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
