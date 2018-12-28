import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletMovementComponent } from './wallet-movement.component';

describe('WalletMovementComponent', () => {
  let component: WalletMovementComponent;
  let fixture: ComponentFixture<WalletMovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletMovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
