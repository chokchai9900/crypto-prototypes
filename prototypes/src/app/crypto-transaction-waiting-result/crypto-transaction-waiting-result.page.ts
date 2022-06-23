import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wallet } from 'src/models/wallet';

@Component({
  selector: 'app-crypto-transaction-waiting-result',
  templateUrl: './crypto-transaction-waiting-result.page.html',
  styleUrls: ['./crypto-transaction-waiting-result.page.scss'],
})
export class CryptoTransactionWaitingResultPage implements OnInit {

  public sender: Wallet;
  public reciever: Wallet;
  public flow: string;
  public now: any = new Date().toISOString()

  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.sender = JSON.parse(params["sender"]);
        this.reciever = JSON.parse(params["reciever"]);
        this.flow = params["flow"];
      });
    }
  }

  ngOnInit() {
  }

}
