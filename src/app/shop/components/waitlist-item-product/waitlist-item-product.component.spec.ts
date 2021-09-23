import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlistItemProductComponent } from './waitlist-item-product.component';

describe('WaitlistItemProductComponent', () => {
  let component: WaitlistItemProductComponent;
  let fixture: ComponentFixture<WaitlistItemProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitlistItemProductComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistItemProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
