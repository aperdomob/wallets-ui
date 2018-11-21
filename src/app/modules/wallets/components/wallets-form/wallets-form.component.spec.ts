import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletsFormComponent } from './wallets-form.component';

describe('WalletsFormComponent', () => {
  let component: WalletsFormComponent;
  let fixture: ComponentFixture<WalletsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
