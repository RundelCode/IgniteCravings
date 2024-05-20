import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRScreenComponent } from './qrscreen.component';

describe('QRScreenComponent', () => {
  let component: QRScreenComponent;
  let fixture: ComponentFixture<QRScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QRScreenComponent]
    });
    fixture = TestBed.createComponent(QRScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
