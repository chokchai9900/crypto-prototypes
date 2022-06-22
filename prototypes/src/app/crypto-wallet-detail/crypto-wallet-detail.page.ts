/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-wallet-detail',
  templateUrl: './crypto-wallet-detail.page.html',
  styleUrls: ['./crypto-wallet-detail.page.scss'],
})
export class CryptoWalletDetailPage implements OnInit {

  public data: any[] = [];
  public templates: ListInfo[] = [
    new ListInfo("เติมเงิน", "success","","assets/imgs/transaction-deposit.png"),
    new ListInfo("ถอนเงิน", "danger","","assets/imgs/transaction-withdraw.png"),
    new ListInfo("ซื้อของ", "primary","","assets/imgs/transaction-shop2.png"),
    new ListInfo("โอนเงิน", "danger","","assets/imgs/transaction-out.png"),
    new ListInfo("เงินเข้าบัญชี", "success","","assets/imgs/transaction-in.png"),
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

export class ListInfo {
  constructor(
    private title: string = "",
    private logType: string = "",
    private link: string = "",
    private imgLink: string = ""
    ) { }
}
