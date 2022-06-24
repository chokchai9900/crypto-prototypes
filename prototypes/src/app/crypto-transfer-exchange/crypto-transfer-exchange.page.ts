import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { GetLineText, GetTitle, ExangeRateFromCurrency } from 'src/services/wallet.service';

@Component({
  selector: 'app-crypto-transfer-exchange',
  templateUrl: './crypto-transfer-exchange.page.html',
  styleUrls: ['./crypto-transfer-exchange.page.scss'],
})
export class CryptoTransferExchangePage implements OnInit {
  public fg: FormGroup;
  public title: string;

  public sender: any;
  public reciever: any;
  public flow: string;

  public lineText: any;

  public exhangeLate: number;
  public converted: number = 0;
  public fee: number = 0.5;
  public feeCurrentcy: string;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.fg = this.fb.group({
      'amount': [null],
      'converted': [null],
      'fee': [null]
    });

    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.sender = JSON.parse(params["sender"]);
        this.reciever = JSON.parse(params["reciever"]);
        this.flow = params["flow"];

        this.lineText = GetLineText(this.reciever.walletType);
        this.title = GetTitle(this.flow);

        this.exhangeLate = ExangeRateFromCurrency(this.sender.currency, this.reciever.currency);

        this.feeCurrentcy = this.sender.currency;
        if (this.sender.currency == "USDT") this.feeCurrentcy = "ETH"

        // ETH  => Fee currentcy
        // USDT => Sender currentcy
        // totalFee = fee*(ETH/USDT)
      });
    }
  }

  ngOnInit() {
  }

  public onChangeAmount(event) {
    var amount = event.target.value;
    this.converted = amount * this.exhangeLate;
  }

  public goNext() {
    this.fg.get("converted").setValue(this.converted);
    this.fg.get("fee").setValue(this.fee);
    let param: NavigationExtras = { queryParams: { flow: this.flow, sender: JSON.stringify(this.sender), reciever: JSON.stringify(this.reciever), transaction: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/crypto-transfer-confirm'], param);
  }

}
