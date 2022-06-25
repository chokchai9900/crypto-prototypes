import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ExangeRateFromCurrency, GetGasRate, GetTitle, MockModel } from 'src/services/wallet.service';

@Component({
  selector: 'app-crypto-transfer-edit-two',
  templateUrl: './crypto-transfer-edit-two.page.html',
  styleUrls: ['./crypto-transfer-edit-two.page.scss'],
})
export class CryptoTransferEditTwoPage implements OnInit{
  public title: string;

  public sender: any;
  public reciever: any;
  public flow: string;
  public exhangeLate: number;
  public lineText: any;

  public transaction:any;
  public GasWallet:any = MockModel.cryptoWallets[0];
  
  constructor(private route: ActivatedRoute, private router: Router) {

    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.sender = JSON.parse(params["sender"]);
        this.reciever = JSON.parse(params["reciever"]);
        this.flow = params["flow"];
        this.transaction = JSON.parse(params["transaction"]);
        this.exhangeLate = ExangeRateFromCurrency(this.sender.currency, this.reciever.currency);
        this.title = GetTitle(this.flow);
      });
    }
  }

  ngOnInit() {
  }

  public goNext() {
    let param: NavigationExtras = { queryParams: { flow: this.flow, sender: JSON.stringify(this.sender), reciever: JSON.stringify(this.reciever), transaction: JSON.stringify(this.transaction) } };
    this.router.navigate(['/crypto-transfer-confirm'], param);
  }

}
