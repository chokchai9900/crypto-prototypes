import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Flow, GetLineText, GetTitle } from 'src/services/wallet.service';

@Component({
  selector: 'app-crypto-transfer-confirm',
  templateUrl: './crypto-transfer-confirm.page.html',
  styleUrls: ['./crypto-transfer-confirm.page.scss'],
})
export class CryptoTransferConfirmPage implements OnInit {

  public title: string;

  public sender: any;
  public reciever: any;
  public flow: string;
  public transaction: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        this.sender = JSON.parse(params["sender"]);
        this.reciever = JSON.parse(params["reciever"]);
        this.transaction = JSON.parse(params["transaction"]);
        this.flow = params["flow"];

        this.title = GetTitle(this.flow);
      });
    }
  }

  ngOnInit() {
  }

  public goNext() {
    let param: NavigationExtras = { queryParams: { flow: this.flow, sender: JSON.stringify(this.sender), reciever: JSON.stringify(this.reciever), transaction: JSON.stringify(this.transaction) } };
    this.router.navigate(['/crypto-transfer-success'], param);
  }

}
