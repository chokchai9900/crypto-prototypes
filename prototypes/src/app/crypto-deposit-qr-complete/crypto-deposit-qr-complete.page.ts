import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetLineText, GetTitle, Wallet } from 'src/models/Wallet';

@Component({
  selector: 'app-crypto-deposit-qr-complete',
  templateUrl: './crypto-deposit-qr-complete.page.html',
  styleUrls: ['./crypto-deposit-qr-complete.page.scss'],
})
export class CryptoDepositQrCompletePage implements OnInit {

  public title: string;

  public sender: Wallet;
  public reciever: Wallet;
  public flow: string;

  public lineText: any;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.reciever = JSON.parse(params["reciever"]);
        this.flow = params["flow"];

        this.lineText = GetLineText(this.reciever.walletType);
        this.title = GetTitle(this.flow);
      });
    }
  }

  ngOnInit() {
  }

}
