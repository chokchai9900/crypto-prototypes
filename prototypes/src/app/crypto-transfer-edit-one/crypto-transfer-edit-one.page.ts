import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ExangeRateFromCurrency, GetGasRate, GetTitle } from 'src/services/wallet.service';

@Component({
  selector: 'app-crypto-transfer-edit-one',
  templateUrl: './crypto-transfer-edit-one.page.html',
  styleUrls: ['./crypto-transfer-edit-one.page.scss'],
})
export class CryptoTransferEditOnePage implements OnInit {
  public fg: FormGroup;
  public title: string;

  public sender: any;
  public reciever: any;
  public flow: string;

  public lineText: any;

  public exhangeLate: number;
  public converted: number = 0;
  public fee: number = 0.5;
  public gas:any;
  
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.fg = this.fb.group({
      'amount': [null],
      'converted': [null],
      'gas': [null],
      'fee': [null]
    });

    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.sender = JSON.parse(params["sender"]);
        this.reciever = JSON.parse(params["reciever"]);
        this.flow = params["flow"];
        this.title = GetTitle(this.flow);

        this.exhangeLate = ExangeRateFromCurrency(this.sender.currency, this.reciever.currency);
        

        if (this.sender.walletType == "CRYPTO") {
          this.gas = GetGasRate(this.sender.currency);
        }
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
    this.fg.get("gas").setValue(this.gas);
    let param: NavigationExtras = { queryParams: { flow: this.flow, sender: JSON.stringify(this.sender), reciever: JSON.stringify(this.reciever), transaction: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/crypto-transfer-edit-two'], param);
  }

}
