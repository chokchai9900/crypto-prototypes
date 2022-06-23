import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Wallet } from 'src/models/wallet';

@Component({
  selector: 'app-crypto-transfer-confirm',
  templateUrl: './crypto-transfer-confirm.page.html',
  styleUrls: ['./crypto-transfer-confirm.page.scss'],
})
export class CryptoTransferConfirmPage implements OnInit {

  public sender: Wallet;
  public reciever: Wallet;
  public flow: string;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.sender = JSON.parse(params["sender"]);
        this.reciever = JSON.parse(params["reciever"]);
        this.flow = params["flow"];
      });
    }
  }

  ngOnInit() {
  }

  public goNext() {
    let param: NavigationExtras = { queryParams: { flow: this.flow, sender: JSON.stringify(this.sender), reciever: JSON.stringify(this.reciever) } };
    this.router.navigate(['/crypto-transfer-success'], param);
  }

}
