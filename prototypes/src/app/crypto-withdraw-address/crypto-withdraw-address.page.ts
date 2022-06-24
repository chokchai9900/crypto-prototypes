import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ExangeRateFromCurrency, Flow, GetGasRate, WalletType } from 'src/services/wallet.service';

@Component({
  selector: 'app-crypto-withdraw-address',
  templateUrl: './crypto-withdraw-address.page.html',
  styleUrls: ['./crypto-withdraw-address.page.scss'],
})
export class CryptoWithdrawAddressPage implements OnInit {
  public sender: any;
  private flow = Flow.WITHDRAW_CRYPTO_ADRESS;

  public fg: FormGroup;
  public free: number = 0.5;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.fg = this.fb.group({
      'addess': [null],
      'network': [null],
      'amount': [null],
      'converted': [null],
      'gas': [null],
      'fee': [null]
    });
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.sender = JSON.parse(params["sender"]);
      });
    }
  }

  ngOnInit() {
  }

  public goNext() {
    var currency: string;
    var icon: string;

    if (this.fg.get("network").value == "BTC main network") {
      icon = "assets/imgs/bitcoin.png";
      currency = "BTC";
    } else {
      icon = "assets/imgs/etherium.png";
      currency = "ETH";
    }

    var exhangeLate =  ExangeRateFromCurrency(this.sender.currency, currency);
    var converted = this.fg.get("amount").value * exhangeLate;
    
    var gas = GetGasRate(this.sender.currency);

    this.fg.get("converted").setValue(converted);
    this.fg.get("gas").setValue(gas);
    this.fg.get("fee").setValue(this.free);

    let reciever =
    {
      icon: icon,
      name: this.fg.get("network").value,
      address: this.fg.get("addess").value,
      network: this.fg.get("network").value,
      currency: currency,
      walletType: WalletType.CRYPTO,
      balance: 0,
      extraPrefix: new Array("Address", "Network"),
      extraText: new Array(this.fg.get("addess").value, this.fg.get("network").value),
    };

    let param: NavigationExtras = { queryParams: { flow: this.flow, sender: JSON.stringify(this.sender), reciever: JSON.stringify(reciever), transaction: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/crypto-transfer-confirm'], param);
  }
}
