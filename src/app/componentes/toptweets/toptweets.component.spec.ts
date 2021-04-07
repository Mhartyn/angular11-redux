import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptweetsComponent } from './toptweets.component';

describe('ToptweetsComponent', () => {
  let component: ToptweetsComponent;
  let fixture: ComponentFixture<ToptweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToptweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
