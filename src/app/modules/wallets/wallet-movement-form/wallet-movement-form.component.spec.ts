import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletMovementFormComponent } from './wallet-movement-form.component';

describe('WalletMovementFormComponent', () => {
  let component: WalletMovementFormComponent;
  let fixture: ComponentFixture<WalletMovementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletMovementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletMovementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
