/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MockModel } from 'src/services/wallet.service';

@Component({
  selector: 'app-crypto-wallet',
  templateUrl: './crypto-wallet.page.html',
  styleUrls: ['./crypto-wallet.page.scss'],
})
export class CryptoWalletPage implements OnInit {

  public data: any[] = [];
  public templates = MockModel.cryptoWalletsX;

  constructor(private router: Router) { }

  ngOnInit() {
    this.data = [
      {
        title: "Crypto wallet pages list",
        data: this.templates
      },
    ];
  }

  public goNext(wallet: any) {
    let param: NavigationExtras = { queryParams: { wallet: JSON.stringify(wallet) } };
    this.router.navigate(['/crypto-wallet-detail'], param);
  }

}
