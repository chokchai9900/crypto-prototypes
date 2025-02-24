/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';
import { MockModel } from 'src/services/wallet.service';

@Component({
  selector: 'app-crypto-wallet',
  templateUrl: './crypto-wallet.page.html',
  styleUrls: ['./crypto-wallet.page.scss'],
})
export class CryptoWalletPage implements OnInit {

  public data: any[] = [];
  public templates = MockModel.cryptoWalletsX;
  public demoNo: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private memory: MemoryService) {
    this.memory.data = this.activatedRoute.snapshot.paramMap.get('demoNo');
  }

  ngOnInit() {
    this.data = [
      {
        title: "Crypto wallet pages list",
        data: this.templates
      },
    ];
  }

  public goNext(wallet: any) {
    let param: NavigationExtras = { queryParams: { wallet: JSON.stringify(wallet), demoNo: this.demoNo } };
    this.router.navigate(['/crypto-wallet-detail'], param);
  }

}
