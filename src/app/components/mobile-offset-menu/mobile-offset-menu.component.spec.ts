import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOffsetMenuComponent } from './mobile-offset-menu.component';

describe('MobileOffsetMenuComponent', () => {
  let component: MobileOffsetMenuComponent;
  let fixture: ComponentFixture<MobileOffsetMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOffsetMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOffsetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
