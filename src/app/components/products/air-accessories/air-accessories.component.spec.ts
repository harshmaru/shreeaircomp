import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirAccessoriesComponent } from './air-accessories.component';

describe('AirAccessoriesComponent', () => {
  let component: AirAccessoriesComponent;
  let fixture: ComponentFixture<AirAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
