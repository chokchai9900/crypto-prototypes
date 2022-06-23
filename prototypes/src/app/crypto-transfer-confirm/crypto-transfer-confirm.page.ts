import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Flow, GetLineText, GetTitle, Wallet } from 'src/models/wallet';

@Component({
  selector: 'app-crypto-transfer-confirm',
  templateUrl: './crypto-transfer-confirm.page.html',
  styleUrls: ['./crypto-transfer-confirm.page.scss'],
})
export class CryptoTransferConfirmPage implements OnInit {

  public title: string;

  public sender: Wallet;
  public reciever: Wallet;
  public flow: string;

  public lineText: any;
  public transaction: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.sender = JSON.parse(params["sender"]);
        this.reciever = JSON.parse(params["reciever"]);
        this.transaction = JSON.parse(params["transaction"]);
        console.log(JSON.stringify(this.transaction));

        this.flow = params["flow"];

        this.lineText = GetLineText(this.reciever.walletType);
        this.title = GetTitle(this.flow);
      });
    }
  }

  ngOnInit() {
  }

  public goNext() {
    let param: NavigationExtras = { queryParams: { flow: this.flow, sender: JSON.stringify(this.sender), reciever: JSON.stringify(this.reciever), transaction: JSON.stringify(this.transaction) } };
    if (this.flow == Flow.WITHDRAW_CRYPTO || this.flow == Flow.WITHDRAW_ADRESS) this.router.navigate(['/crypto-transaction-waiting-result'], param);
    else this.router.navigate(['/crypto-transfer-success'], param);
  }

}
