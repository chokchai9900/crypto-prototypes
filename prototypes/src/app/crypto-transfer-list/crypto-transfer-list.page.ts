import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Flow, GetTitle, Method, Wallet, WalletType } from 'src/models/Wallet';

@Component({
  selector: 'app-crypto-transfer-list',
  templateUrl: './crypto-transfer-list.page.html',
  styleUrls: ['./crypto-transfer-list.page.scss'],
})
export class CryptoTransferListPage implements OnInit {
  public title: string;

  public wallets: Wallet[];
  private sender: Wallet;
  private flow: string;


  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.sender = JSON.parse(params["sender"]);
        this.wallets = JSON.parse(params["wallets"]);
        this.flow = params["flow"];

        this.title = GetTitle(this.flow);
      });
    }
  }

  ngOnInit() {
  }

  public goNext(account: any) {
    var method = this.flow.split("_")[0];

    var sender: Wallet;
    var reciever: Wallet;

    if (method == Method.WITHDRAW) {
      sender = this.sender;
      reciever = account;
    } else {
      sender = account;
      reciever = this.sender;
    }

    let param: NavigationExtras = { queryParams: { flow: this.flow, sender: JSON.stringify(sender), reciever: JSON.stringify(reciever) } };
    if (this.flow == Flow.DEPOSITE_QR) this.router.navigate(['/crypto-deposit-qr-edit'], param);
    else if (this.flow == Flow.WITHDRAW_ADRESS) this.router.navigate(['/crypto-withdraw-address'], param);
    else this.router.navigate(['/crypto-transfer-edit'], param);
  }
}
