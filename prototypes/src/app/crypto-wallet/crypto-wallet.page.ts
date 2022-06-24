/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Wallet, WalletType } from 'src/models/Wallet';

@Component({
  selector: 'app-crypto-wallet',
  templateUrl: './crypto-wallet.page.html',
  styleUrls: ['./crypto-wallet.page.scss'],
})
export class CryptoWalletPage implements OnInit {

  public data: any[] = [];
  public templates: Wallet[] = [
    { icon: "assets/imgs/etheriumX.png", name: "WalletX_Eterium", currency: "ETH", exhangeRate: 60000, idOrAddress: "0xfadl154fasf1211ff", ownerOrNetwork: "Mana Chain", walletType: WalletType.CRYPTOX, amount: 300000000 },
    { icon: "assets/imgs/bitcoinX.png", name: "WalletX_Bitcoin", currency: "BTC", exhangeRate: 600000, idOrAddress: "b1fadl154fasf366699", ownerOrNetwork: "Mana Chain", walletType: WalletType.CRYPTOX, amount: 50000000 },
    { icon: "assets/imgs/usdtX.png", name: "WalletX_USDT", currency: "USDT", exhangeRate: 6, idOrAddress: "usdtfadl154fasf366699", ownerOrNetwork: "Mana Chain", walletType: WalletType.CRYPTOX, amount: 80000000 }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.data = [
      {
        title: "Crypto wallet pages list",
        data: this.templates
      },
    ];
  }

  public goNext(wallet: any) {
    let param: NavigationExtras = { queryParams: { wallet: JSON.stringify(wallet) } };
    this.router.navigate(['/crypto-wallet-detail'], param);
  }

}
