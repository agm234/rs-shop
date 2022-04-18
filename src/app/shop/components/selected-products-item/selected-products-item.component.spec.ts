import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProductsItemComponent } from './selected-products-item.component';

describe('SelectedProductsItemComponent', () => {
  let component: SelectedProductsItemComponent;
  let fixture: ComponentFixture<SelectedProductsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedProductsItemComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
