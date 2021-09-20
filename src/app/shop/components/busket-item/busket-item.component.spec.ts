import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusketItemComponent } from './busket-item.component';

describe('BusketItemComponent', () => {
  let component: BusketItemComponent;
  let fixture: ComponentFixture<BusketItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusketItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
