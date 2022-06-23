import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Flow, Wallet, WalletType } from 'src/models/Wallet';

@Component({
  selector: 'app-crypto-withdraw-address',
  templateUrl: './crypto-withdraw-address.page.html',
  styleUrls: ['./crypto-withdraw-address.page.scss'],
})
export class CryptoWithdrawAddressPage implements OnInit {
  public fixWallet: Wallet = { icon: "assets/imgs/2844386_crypto_eth_ethcoin_etherium_icon.png", name: "ANON_ETH", currency: "ETH", exhangeRate: 60000, idOrAddress: "03366988744", ownerOrNetwork: "อานน บางสาน", walletType: WalletType.CRYPTOX, amount: 100 }

  private flow = Flow.WITHDRAW_ADRESS;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  public goNext() {
    let reciever = { icon: "assets/imgs/2844386_crypto_eth_ethcoin_etherium_icon.png", name: "ETH Network", currency: "ETH", exhangeRate: 60000, id: "0xasff45f644gga", ownerOrNetwork: "ERC20", walletType: WalletType.CRYPTO, amount: 0 };
    let param: NavigationExtras = { queryParams: { flow: this.flow, sender: JSON.stringify(this.fixWallet), reciever: JSON.stringify(reciever) } };
    this.router.navigate(['/crypto-transfer-confirm'], param);
  }
}
