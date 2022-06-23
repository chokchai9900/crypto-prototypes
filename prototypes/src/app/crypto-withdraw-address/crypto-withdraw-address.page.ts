import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Flow, Wallet, WalletType } from 'src/models/Wallet';

@Component({
  selector: 'app-crypto-withdraw-address',
  templateUrl: './crypto-withdraw-address.page.html',
  styleUrls: ['./crypto-withdraw-address.page.scss'],
})
export class CryptoWithdrawAddressPage implements OnInit {
  public sender: Wallet;
  private flow = Flow.WITHDRAW_ADRESS;

  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.sender = JSON.parse(params["sender"]);
      });
    }
  }

  ngOnInit() {
  }
  
  public goNext() {
    let reciever = { icon: "assets/imgs/2844386_crypto_eth_ethcoin_etherium_icon.png", name: "ETH Network", currency: "ETH", exhangeRate: 60000, id: "0xasff45f644gga", ownerOrNetwork: "ERC20", walletType: WalletType.CRYPTO, amount: 0 };
    let param: NavigationExtras = { queryParams: { flow: this.flow, sender: JSON.stringify(this.sender), reciever: JSON.stringify(reciever) } };
    this.router.navigate(['/crypto-transfer-confirm'], param);
  }
}
