import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeradcrumbsComponent } from './beradcrumbs.component';

describe('BeradcrumbsComponent', () => {
  let component: BeradcrumbsComponent;
  let fixture: ComponentFixture<BeradcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeradcrumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeradcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
