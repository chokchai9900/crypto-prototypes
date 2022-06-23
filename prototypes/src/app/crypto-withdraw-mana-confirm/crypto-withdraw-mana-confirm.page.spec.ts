import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CryptoWithdrawManaConfirmPage } from './crypto-withdraw-mana-confirm.page';

describe('CryptoWithdrawManaConfirmPage', () => {
  let component: CryptoWithdrawManaConfirmPage;
  let fixture: ComponentFixture<CryptoWithdrawManaConfirmPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoWithdrawManaConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoWithdrawManaConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
