/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-wallet',
  templateUrl: './crypto-wallet.page.html',
  styleUrls: ['./crypto-wallet.page.scss'],
})
export class CryptoWalletPage implements OnInit {

  public data: any[] = [];
  public templates: ListCurrency[] = [
    new ListCurrency("Etherium","ETH", "/crypto-wallet-detail","12","assets/imgs/2844386_crypto_eth_ethcoin_etherium_icon.png"),
    new ListCurrency("Bitcoin","BTC","/crypto-wallet-detail","30","assets/imgs/2844381_bitoin_btc_coin_crypto_icon.png"),
  ];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        title: "Crypto wallet pages list",
        data: this.templates
      },
    ];
  }

}

export class ListCurrency {
  constructor(
    private currencyName: string = "",
    private currencySymbol: string = "",
    private link: string = "",
    private balance: string = "",
    private imgUrl: string = "") { }
}
