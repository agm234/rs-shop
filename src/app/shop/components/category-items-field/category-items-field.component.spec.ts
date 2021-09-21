import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemsFieldComponent } from './category-items-field.component';

describe('CategoryItemsFieldComponent', () => {
  let component: CategoryItemsFieldComponent;
  let fixture: ComponentFixture<CategoryItemsFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryItemsFieldComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
