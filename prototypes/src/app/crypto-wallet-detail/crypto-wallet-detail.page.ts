
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-crypto-wallet-detail',
  templateUrl: './crypto-wallet-detail.page.html',
  styleUrls: ['./crypto-wallet-detail.page.scss'],
})
export class CryptoWalletDetailPage implements OnInit {
  public data: any[] = [];
  public wallet : any;
  public templates: ListInfo[] = [
    new ListInfo("เติมเงิน", "success", "", "assets/imgs/transaction-deposit.png"),
    new ListInfo("ถอนเงิน", "danger", "", "assets/imgs/transaction-withdraw.png"),
    new ListInfo("ซื้อของ", "primary", "", "assets/imgs/transaction-shop2.png"),
    new ListInfo("โอนเงิน", "danger", "", "assets/imgs/transaction-out.png"),
    new ListInfo("เงินเข้าบัญชี", "success", "", "assets/imgs/transaction-in.png"),
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.wallet = JSON.parse(params["wallet"]);
      });
    }
  }

  ngOnInit() {
    this.data = [
      {
        title: "Crypto wallet pages list",
        data: this.templates
      },
    ];
  }

  public goNext(method:string)
  {
    let param: NavigationExtras = { queryParams: { method: method, sender: JSON.stringify(this.wallet) } };
    this.router.navigate(['/crypto-select-method'], param);
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
