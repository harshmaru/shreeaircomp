import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitStructComponent } from './split-struct.component';

describe('SplitStructComponent', () => {
  let component: SplitStructComponent;
  let fixture: ComponentFixture<SplitStructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitStructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
