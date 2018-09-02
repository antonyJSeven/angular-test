import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfTestPageComponent } from './ff-test-page.component';

describe('FfTestPageComponent', () => {
  let component: FfTestPageComponent;
  let fixture: ComponentFixture<FfTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
