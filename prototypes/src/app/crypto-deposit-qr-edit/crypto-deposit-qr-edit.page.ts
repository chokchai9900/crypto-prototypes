import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Flow, WalletType } from 'src/services/wallet.service';

@Component({
  selector: 'app-crypto-deposit-qr-edit',
  templateUrl: './crypto-deposit-qr-edit.page.html',
  styleUrls: ['./crypto-deposit-qr-edit.page.scss'],
})
export class CryptoDepositQrEditPage implements OnInit {

  public reciever :any;
  private flow = Flow.DEPOSITE_CRYPTO_QR;
  public fg: FormGroup;
  public address: string;
  
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder) {
    this.fg = this.fb.group({
      'networkSelected': [null, Validators.required],
      'address': [null]
    });
    
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
    let param: NavigationExtras = { queryParams: { flow: this.flow, reciever: JSON.stringify(this.reciever),network : this.fg.get("networkSelected").value , address: this.address} };
    this.router.navigate(['/crypto-deposit-qr-complete'], param); 
    console.log(this.fg.get("networkSelected").value);
  }

  public onSelectNetwork(event){
    if(event.target.value == "Etherium Network"){
      this.fg.get('address').setValue("0xb6496ed2ba5df5cc4a3c1b04d2de821760a88856");
    }
    else if(event.target.value == "Binance Smart chain"){
      this.fg.get('address').setValue("0xlkhol1gh4klghlk235hl2hl34h235j2h3l4hj2ll");
    }
    this.address = this.fg.get('address').value; 
  }
}
