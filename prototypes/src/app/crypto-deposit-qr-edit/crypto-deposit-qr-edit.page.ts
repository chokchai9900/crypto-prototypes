import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Flow, Wallet, WalletType } from 'src/models/Wallet';

@Component({
  selector: 'app-crypto-deposit-qr-edit',
  templateUrl: './crypto-deposit-qr-edit.page.html',
  styleUrls: ['./crypto-deposit-qr-edit.page.scss'],
})
export class CryptoDepositQrEditPage implements OnInit {
  public reciever :Wallet;
  private flow = Flow.DEPOSITE_QR;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.reciever = JSON.parse(params["reciever"]);
        console.log(JSON.stringify(this.reciever));
        
      });
    }
  }

  ngOnInit() {
  }
  
  public goNext() {
    let param: NavigationExtras = { queryParams: { flow: this.flow, reciever: JSON.stringify(this.reciever) } };
    this.router.navigate(['/crypto-deposit-qr-complete'], param);
  }
}
