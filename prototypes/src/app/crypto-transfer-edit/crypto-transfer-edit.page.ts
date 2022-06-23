import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ExangeRate, GetLineText, GetTitle, Wallet } from 'src/models/wallet';

@Component({
  selector: 'app-crypto-transfer-edit',
  templateUrl: './crypto-transfer-edit.page.html',
  styleUrls: ['./crypto-transfer-edit.page.scss'],
})
export class CryptoTransferEditPage implements OnInit {
  public fg: FormGroup;
  public title: string;

  public sender: Wallet;
  public reciever: Wallet;
  public flow: string;

  public lineText: any;

  public exhangeLate: number;
  public converted: number = 0;
  public fee: number = 0.01;

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

        this.exhangeLate = ExangeRate(this.sender.exhangeRate, this.reciever.exhangeRate);
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
