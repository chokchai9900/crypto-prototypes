import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CryptoTransactionWaitingResultPage } from './crypto-transaction-waiting-result.page';

describe('CryptoTransactionWaitingResultPage', () => {
  let component: CryptoTransactionWaitingResultPage;
  let fixture: ComponentFixture<CryptoTransactionWaitingResultPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoTransactionWaitingResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoTransactionWaitingResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
