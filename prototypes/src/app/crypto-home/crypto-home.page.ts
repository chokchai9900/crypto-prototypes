import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-home',
  templateUrl: './crypto-home.page.html',
  styleUrls: ['./crypto-home.page.scss'],
})
export class CryptoHomePage implements OnInit {

  public data: any[] = [];

  public templates: ListInfo[] = [
    new ListInfo("(1) รูปแบบกรอกจำนวนและ convert ในหน้าเดียว", "/crypto-wallet/1"),
    new ListInfo("(2) รูปแบบกรอกจำนวนและ convert คนละหน้า", "/crypto-wallet/2"),
  ];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        title: "Navigator",
        data: this.templates
      },
    ];
  }

}

export class ListInfo {
  constructor(private title: string, private link: string = "", private required: string = "", private isSub: boolean = false) { }
}
