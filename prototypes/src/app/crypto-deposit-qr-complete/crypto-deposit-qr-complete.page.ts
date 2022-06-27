import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetLineText, GetTitle } from 'src/services/wallet.service';

@Component({
  selector: 'app-crypto-deposit-qr-complete',
  templateUrl: './crypto-deposit-qr-complete.page.html',
  styleUrls: ['./crypto-deposit-qr-complete.page.scss'],
})
export class CryptoDepositQrCompletePage implements OnInit {

  public title: string;

  public sender: any;
  public reciever: any;
  public flow: string;
  public networkSelected: string;
  public address: string;

  public lineText: any;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.reciever = JSON.parse(params["reciever"]);
        this.flow = params["flow"];

        this.lineText = GetLineText(this.reciever.walletType);
        this.title = GetTitle(this.flow);
        this.networkSelected = params["network"];
        this.address = params["address"];
        
      });
    }
  }

  ngOnInit() {
  }
  public goHome()
  {
    this.router.navigate(['/']);
  }
}
