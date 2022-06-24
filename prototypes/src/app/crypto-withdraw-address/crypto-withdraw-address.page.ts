import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ExangeRateFromCurrency, Flow, WalletType } from 'src/services/wallet.service';

@Component({
  selector: 'app-crypto-withdraw-address',
  templateUrl: './crypto-withdraw-address.page.html',
  styleUrls: ['./crypto-withdraw-address.page.scss'],
})
export class CryptoWithdrawAddressPage implements OnInit {
  public sender: any;
  private flow = Flow.WITHDRAW_ADRESS;

  public fg: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.fg = this.fb.group({
      'addess': [null],
      'network': [null],
      'amount': [null],
      'converted': [null],
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
    var convertRate = 1;

    if (this.fg.get("network").value == "BTC main network") {
      icon = "assets/imgs/bitcoin.png";
      currency = "BTC";
      convertRate = 600000;
    } else {
      icon = "assets/imgs/etherium.png";
      currency = "ETH";
      convertRate = 60000;
    }

    var exhangeLate = ExangeRateFromCurrency(this.sender.currency, "THB");
    var converted = this.fg.get("amount").value * exhangeLate;

    this.fg.get("converted").setValue(converted);
    this.fg.get("fee").setValue(0.01);

    let reciever = { icon: icon, name: this.fg.get("network").value, currency: currency, exhangeRate: 0, idOrAddress: this.fg.get("addess").value, ownerOrNetwork: this.fg.get("network").value, walletType: WalletType.CRYPTO, amount: 0 };
    let param: NavigationExtras = { queryParams: { flow: this.flow, sender: JSON.stringify(this.sender), reciever: JSON.stringify(reciever), transaction: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/crypto-transfer-confirm'], param);
  }
}
