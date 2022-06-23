import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CryptoSelectMethodPage } from './crypto-select-method.page';

describe('CryptoSelectMethodPage', () => {
  let component: CryptoSelectMethodPage;
  let fixture: ComponentFixture<CryptoSelectMethodPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoSelectMethodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoSelectMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
