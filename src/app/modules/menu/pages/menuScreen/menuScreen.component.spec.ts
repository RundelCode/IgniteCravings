import { ComponentFixture, TestBed } from '@angular/core/testing';

import { menuScreenComponent } from './menuScreen.component';

describe('menuScreenComponent', () => {
  let component: menuScreenComponent;
  let fixture: ComponentFixture<menuScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [menuScreenComponent]
    });
    fixture = TestBed.createComponent(menuScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
