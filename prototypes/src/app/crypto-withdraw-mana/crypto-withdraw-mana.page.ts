import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crypto-withdraw-mana',
  templateUrl: './crypto-withdraw-mana.page.html',
  styleUrls: ['./crypto-withdraw-mana.page.scss'],
})
export class CryptoWithdrawManaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goNext()
  {
    this.router.navigate(['/crypto-withdraw-mana-confirm']); 
  }
}
