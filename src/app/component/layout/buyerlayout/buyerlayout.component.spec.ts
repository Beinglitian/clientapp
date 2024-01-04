import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerlayoutComponent } from './buyerlayout.component';

describe('BuyerlayoutComponent', () => {
  let component: BuyerlayoutComponent;
  let fixture: ComponentFixture<BuyerlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyerlayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyerlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
