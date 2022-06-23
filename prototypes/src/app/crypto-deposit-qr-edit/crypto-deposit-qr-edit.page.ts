import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Flow, Wallet, WalletType } from 'src/models/Wallet';

@Component({
  selector: 'app-crypto-deposit-qr-edit',
  templateUrl: './crypto-deposit-qr-edit.page.html',
  styleUrls: ['./crypto-deposit-qr-edit.page.scss'],
})
export class CryptoDepositQrEditPage implements OnInit {
  public reciever = { icon: "assets/imgs/2844386_crypto_eth_ethcoin_etherium_icon.png", name: "ANON_ETH", currency: "ETH", exhangeRate: 60000, idOrAddress: "0xasff45f644gga", ownerOrNetwork: "ERC20", walletType: WalletType.CRYPTOX, amount: 3000 };

  private flow = Flow.DEPOSITE_QR;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  public goNext() {
    let param: NavigationExtras = { queryParams: { flow: this.flow, reciever: JSON.stringify(this.reciever) } };
    this.router.navigate(['/crypto-deposit-qr-complete'], param);
  }
}
