import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Flow, Method, MockModel, WalletType } from 'src/services/wallet.service';

@Component({
  selector: 'app-crypto-select-method',
  templateUrl: './crypto-select-method.page.html',
  styleUrls: ['./crypto-select-method.page.scss'],
})
export class CryptoSelectMethodPage implements OnInit {

  public sender: any;
  public method: string;
  public prefix: string;

  public manaWallets = MockModel.manaWallets;
  public cryptoWallets = MockModel.cryptoWallets;
  public bankWallets = MockModel.backWallets;

  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.sender = JSON.parse(params["sender"]);
        this.method = params["method"];

        if (this.method == Method.DEPOSIT) this.prefix = "เติม";
        if (this.method == Method.WITHDRAW) this.prefix = "ถอน";
      });
    }
  }

  ngOnInit() {
  }

  private goWithdrawAddress() {
    let param: NavigationExtras = { queryParams: { flow: Flow.WITHDRAW_CRYPTO_ADRESS, sender: JSON.stringify(this.sender) } };
    this.router.navigate(['/crypto-withdraw-address'], param);
  }

  private goDepositAddress() {
    let param: NavigationExtras = { queryParams: { flow: Flow.DEPOSITE_CRYPTO_QR, reciever: JSON.stringify(this.sender) } };
    this.router.navigate(['/crypto-deposit-qr-edit'], param);
  }

  private goListSelect(flow: string, wallets: any) {
    let param: NavigationExtras = { queryParams: { flow: flow, sender: JSON.stringify(this.sender), wallets: JSON.stringify(wallets) } };
    this.router.navigate(['/crypto-transfer-list'], param);
  }

  public goNext(flow: string) {
    if (this.method == Method.WITHDRAW) {
      if (flow == "address") this.goWithdrawAddress();
      if (flow == "manawallet") this.goListSelect(Flow.WITHDRAW_FIAT_MANA, this.manaWallets);
      if (flow == "crypto") this.goListSelect(Flow.WITHDRAW_CRYPTO, this.cryptoWallets);
      if (flow == "bank") this.goListSelect(Flow.WITHDRAW_FIAT_BANK, this.bankWallets);
    }
    if (this.method == Method.DEPOSIT) {
      if (flow == "address") this.goDepositAddress();
      if (flow == "manawallet") this.goListSelect(Flow.DEPOSITE_FIAT_MANA, this.manaWallets);
      if (flow == "crypto") this.goListSelect(Flow.DEPOSITE_CRYPTO, this.cryptoWallets);
      if (flow == "bank") this.goListSelect(Flow.DEPOSITE_FIAT_BANK, this.bankWallets);
    }
  }

}
