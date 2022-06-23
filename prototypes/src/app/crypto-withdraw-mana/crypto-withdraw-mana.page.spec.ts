import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CryptoWithdrawManaPage } from './crypto-withdraw-mana.page';

describe('CryptoWithdrawManaPage', () => {
  let component: CryptoWithdrawManaPage;
  let fixture: ComponentFixture<CryptoWithdrawManaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoWithdrawManaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoWithdrawManaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
