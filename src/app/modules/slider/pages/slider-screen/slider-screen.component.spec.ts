import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderScreenComponent } from './slider-screen.component';

describe('SliderScreenComponent', () => {
  let component: SliderScreenComponent;
  let fixture: ComponentFixture<SliderScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderScreenComponent]
    });
    fixture = TestBed.createComponent(SliderScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
