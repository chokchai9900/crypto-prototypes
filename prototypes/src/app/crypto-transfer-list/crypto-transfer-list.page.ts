import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Flow, Wallet, WalletType } from 'src/models/Wallet';

@Component({
  selector: 'app-crypto-transfer-list',
  templateUrl: './crypto-transfer-list.page.html',
  styleUrls: ['./crypto-transfer-list.page.scss'],
})
export class CryptoTransferListPage implements OnInit {

  public wallets: Wallet[] = [
    { icon: "assets/imgs/promtpayicon.png", name: "บัญชีของฉัน", currency: "THB", exhangeRate: 1, id: "0944566698", ownerName: "อานน บางสาน", walletType: WalletType.FIAT, amount: 3000 },
    { icon: "assets/imgs/krungthai.png", name: "เงินเดือน", currency: "THB", exhangeRate: 1, id: "4055236478", ownerName: "อานน บางสาน", walletType: WalletType.FIAT, amount: 2000 }
  ];

  private fixWallet: Wallet = { icon: "assets/imgs/2844386_crypto_eth_ethcoin_etherium_icon.png", name: "ANON_ETH", currency: "ETH", exhangeRate: 60000, id: "03366988744", ownerName: "อานน บางสาน", walletType: WalletType.CRYPTOX, amount: 100 }

  private flow = Flow.WITHDRAW_MANA;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public goNext(account: any) {
    let param: NavigationExtras = { queryParams: { flow: this.flow, sender: JSON.stringify(this.fixWallet), reciever: JSON.stringify(account) } };
    this.router.navigate(['/crypto-transfer-edit'], param);
  }
}
