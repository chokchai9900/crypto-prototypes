import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crypto-withdraw-mana-confirm',
  templateUrl: './crypto-withdraw-mana-confirm.page.html',
  styleUrls: ['./crypto-withdraw-mana-confirm.page.scss'],
})
export class CryptoWithdrawManaConfirmPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goNext()
  {
    this.router.navigate(['/crypto-withdraw-mana-success']); 
  }
}
