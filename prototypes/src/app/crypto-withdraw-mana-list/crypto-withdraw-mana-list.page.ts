import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { wallet } from 'src/models/wallet';

@Component({
  selector: 'app-crypto-withdraw-mana-list',
  templateUrl: './crypto-withdraw-mana-list.page.html',
  styleUrls: ['./crypto-withdraw-mana-list.page.scss'],
})
export class CryptoWithdrawManaListPage implements OnInit {
  constructor(private router: Router) {
   }

  ngOnInit() {
  }

  public goNext()
  {
    this.router.navigate(['/crypto-withdraw-mana']); 
  }
}
