import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Flow, GetTitle, Wallet, WalletType } from 'src/models/Wallet';

@Component({
  selector: 'app-crypto-transfer-list',
  templateUrl: './crypto-transfer-list.page.html',
  styleUrls: ['./crypto-transfer-list.page.scss'],
})
export class CryptoTransferListPage implements OnInit {
  public title: string;

  public wallets: Wallet[] = [
    { icon: "assets/imgs/promtpayicon.png", name: "บัญชีของฉัน", currency: "THB", exhangeRate: 1, idOrAddress: "0944566698", ownerOrNetwork: "อานน บางสาน", walletType: WalletType.PROMPAY, amount: 3000 },
    { icon: "assets/imgs/krungthai.png", name: "เงินเดือน", currency: "THB", exhangeRate: 1, idOrAddress: "4055236478", ownerOrNetwork: "อานน บางสาน", walletType: WalletType.BANK, amount: 2000 }
  ];

  private fixWallet: Wallet = { icon: "assets/imgs/2844386_crypto_eth_ethcoin_etherium_icon.png", name: "ANON_ETH", currency: "ETH", exhangeRate: 60000, idOrAddress: "03366988744", ownerOrNetwork: "อานน บางสาน", walletType: WalletType.CRYPTOX, amount: 100 }

  private flow = Flow.DEPOSITE_QR;

  constructor(private router: Router) {
    this.title = GetTitle(this.flow);
  }

  ngOnInit() {
  }

  public goNext(account: any) {
    let param: NavigationExtras = { queryParams: { flow: this.flow, sender: JSON.stringify(this.fixWallet), reciever: JSON.stringify(account) } };
    if(this.flow == Flow.DEPOSITE_QR)this.router.navigate(['/crypto-deposit-qr-edit'], param);
    else if(this.flow == Flow.WITHDRAW_ADRESS) this.router.navigate(['/crypto-withdraw-address'], param);
    else this.router.navigate(['/crypto-transfer-edit'], param);
  }
}
