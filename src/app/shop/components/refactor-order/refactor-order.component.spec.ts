import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefactorOrderComponent } from './refactor-order.component';

describe('RefactorOrderComponent', () => {
  let component: RefactorOrderComponent;
  let fixture: ComponentFixture<RefactorOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefactorOrderComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefactorOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
