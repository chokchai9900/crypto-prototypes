import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetLineText, GetTitle, MockModel } from 'src/services/wallet.service';

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

  public now: any = new Date().toISOString()

  public totalPay:string;

  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.sender = JSON.parse(params["sender"]);
        this.reciever = JSON.parse(params["reciever"]);
        this.transaction = JSON.parse(params["transaction"]);
        this.flow = params["flow"];

        this.title = GetTitle(this.flow);

        this.totalPay = this.transaction.amount + this.transaction.fee;
        if (this.transaction.gas != null) this.totalPay += this.transaction.gas.amount;
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
