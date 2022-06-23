import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CryptoWithdrawManaSuccessPage } from './crypto-withdraw-mana-success.page';

describe('CryptoWithdrawManaSuccessPage', () => {
  let component: CryptoWithdrawManaSuccessPage;
  let fixture: ComponentFixture<CryptoWithdrawManaSuccessPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoWithdrawManaSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoWithdrawManaSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
