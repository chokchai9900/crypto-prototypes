import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetLineText, GetTitle } from 'src/services/wallet.service';

@Component({
  selector: 'app-crypto-transfer-success',
  templateUrl: './crypto-transfer-success.page.html',
  styleUrls: ['./crypto-transfer-success.page.scss'],
})
export class CryptoTransferSuccessPage implements OnInit {

  public title: string;

  public sender: any;
  public reciever: any;
  public flow: string;
  public transaction:any;

  public lineText: any;
  public now: any = new Date().toISOString()

  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.sender = JSON.parse(params["sender"]);
        this.reciever = JSON.parse(params["reciever"]);
        this.transaction = JSON.parse(params["transaction"]);
        this.flow = params["flow"];

        this.lineText = GetLineText(this.reciever.walletType);
        this.title = GetTitle(this.flow);
      });
    }
  }

  ngOnInit() {
  }

  public goHome()
  {
    this.router.navigate(['/']);
  }

}
