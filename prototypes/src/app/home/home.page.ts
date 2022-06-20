/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public data: any[] = [];

  public templates: ListInfo[] = [
    new ListInfo("Crypto Prototype", "/crypto-main"),
    new ListInfo("ตระกร้าสินค้า (แก้ไข)", "/cart-edit-template"),
    new ListInfo("ตระกร้าสินค้า (จ่ายเงิน)", "/cart-checkout-template"),
    new ListInfo("ตระกร้าสินค้า (ผลลัพธ์จ่ายเงิน) dialog", "/cart-dialog-template"),
    new ListInfo("ฟอร์มข้อมูล", "/form-template"),
    new ListInfo("Input แบบอื่นๆ", "/form-input-template", "", true),
    new ListInfo("Binding data", "/form-binding", "module, ts", true),
    new ListInfo("รับ/ส่งข้อมูล ระหว่างหน้า", "/form-send-data", "module, ts", true),
    new ListInfo("รับ/ส่งข้อมูล ผ่าน Service", "/form-service", "module, ts, service", true),
    new ListInfo("Confirm dialog", "/form-confirm-dialog", "module, ts", true),
    new ListInfo("ลิสต์รายการ", "/list-template"),
    new ListInfo("Option dialog", "/option-dialog-template"),
    new ListInfo("Binding data", "/option-dialog-binding", "module, ts", true),
    new ListInfo("ไม่มีปุ่ม submit", "/option-dialog-no-submit", "module, ts", true),
    new ListInfo("หน้าคั่น", "/condition-template", "scss"),
    new ListInfo("หน้าคั่น (นับเวลาถอยหลัง)", "/condition-timer-template", "scss, ts", true),
    new ListInfo("ข้อตกลง (agreement)", "/agreement-template"),
    new ListInfo("ขอความยินยอม (consent)"),
    new ListInfo("ข้อมูล (ผู้ใช้อนุมัติ)", "/consent-info-user-template", "", true),
    new ListInfo("ข้อมูล (ผู้ดูแลอนุมัติ)", "/consent-info-manager-template", "", true),
    new ListInfo("สมัครสมาชิก", "/consent-register-template", "", true),
    new ListInfo("หน้าหลัก (home)", "/home-template", "scss, ts"),
  ];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        title: "Template pages",
        data: this.templates
      },
    ];
  }

}

export class ListInfo {
  constructor(private title: string, private link: string = "", private required: string = "", private isSub: boolean = false) { }
}
