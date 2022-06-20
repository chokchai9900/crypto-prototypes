/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-main',
  templateUrl: './crypto-main.page.html',
  styleUrls: ['./crypto-main.page.scss'],
})
export class CryptoMainPage implements OnInit {

  public data: any[] = [];
  public templates: ListInfo[] = [
    new ListInfo("Main wallet page", "/crypto-wallet","Main wallet"),
    new ListInfo("Deposit page", "/crypto-deposit","wallet information for reciveing crypto currency"),
    new ListInfo("Withdraw page", "","form for sending crypto currency to another account"),
    new ListInfo("Withdraw via crypto network page", "/crypto-withdraw-ex", "sending crypto currency by crypto network (External)",true),
    new ListInfo("Withdraw via Emall/Phone/ID", "/crypto-withdraw-in", "sending crypto currency by Phone / ID / Email (Internal)",true),
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
  constructor(private title: string, private link: string = "", private required: string = "", private isSub: boolean = false) { }
}
