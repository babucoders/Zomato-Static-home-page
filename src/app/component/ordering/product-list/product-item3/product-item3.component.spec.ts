import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItem3Component } from './product-item3.component';

describe('ProductItem3Component', () => {
  let component: ProductItem3Component;
  let fixture: ComponentFixture<ProductItem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItem3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
