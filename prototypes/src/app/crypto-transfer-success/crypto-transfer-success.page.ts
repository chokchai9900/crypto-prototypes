import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wallet } from 'src/models/wallet';

@Component({
  selector: 'app-crypto-transfer-success',
  templateUrl: './crypto-transfer-success.page.html',
  styleUrls: ['./crypto-transfer-success.page.scss'],
})
export class CryptoTransferSuccessPage implements OnInit {

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
