import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CryptoDepositQrCompletePage } from './crypto-deposit-qr-complete.page';

describe('CryptoDepositQrCompletePage', () => {
  let component: CryptoDepositQrCompletePage;
  let fixture: ComponentFixture<CryptoDepositQrCompletePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoDepositQrCompletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoDepositQrCompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
