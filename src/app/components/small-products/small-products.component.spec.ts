import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProductsComponent } from './small-products.component';

describe('SmallProductsComponent', () => {
  let component: SmallProductsComponent;
  let fixture: ComponentFixture<SmallProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
