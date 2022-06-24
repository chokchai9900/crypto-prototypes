export interface WalletBase {
     icon: string;
     name: string;
     subname: string;
     currency: string;
     walletType: string;
     balance: number;
     extraPrefix: string[];
     extraText: string[];
}

export interface ManaWallet extends WalletBase {
}

export interface CryptoWallet extends WalletBase {
     address: string;
     network: string;
}

export interface BANKWallet extends WalletBase {
     owner: string;
     idNumber: string;
}

export const ExangeRate = {
     BTC: 60000,
     ETH: 6000,
     THB: 1,
     USDT: 6
};

export const WalletType = {
     CRYPTOX: "CRYPTOX",
     CRYPTO: "CRYPTO",
     BANK: "BANK",
     PROMPAY: "PROMPAY",
     MANA: "MANA"
};

export const Flow = {
     WITHDRAW_ADRESS: "WITHDRAW_ADRESS",
     WITHDRAW_MANA: "WITHDRAW_MANA",
     WITHDRAW_CRYPTO: "WITHDRAW_CRYPTO",
     DEPOSITE_QR: "DEPOSITE_QR",
     DEPOSITE_MANA: "DEPOSITE_MANA",
     DEPOSITE_CRYPTO: "DEPOSITE_CRYPTO"
};

export const Method =
{
     WITHDRAW: "WITHDRAW",
     DEPOSIT: "DEPOSIT"
}

export function GetLineText(walletType: string): string[] {
     switch (walletType) {
          case WalletType.CRYPTO: return new Array("Address", "Network");
          case WalletType.BANK: return new Array("เลขบัญชี", "ชื่อบัญชี");
          case WalletType.PROMPAY: return new Array("หมายเลขพร้อมเพย์");
          case WalletType.MANA: return new Array();
     }
}

export function GetTitle(flow: string): any {
     flow = flow.split("_")[0];
     switch (flow) {
          case "WITHDRAW": return "ถอน";
          case "DEPOSITE": return "เติม";
     }
}

export function ExangeRateFromCurrency(from: string, to: string): number {
     var f = ExangeRate[from];
     var t = ExangeRate[to];
     return f / t;
}

export function GetRate(currentcy: string) {
     return ExangeRate[currentcy];
}

export function GetGasRate(from: string, to: string) {
     var gasLate = 0.25;
     if (to == "USDT") to = "ETH";
     var exRate = ExangeRateFromCurrency(to,from)
     return gasLate*exRate;
}

export class MockModel {

     public static manaWallets: ManaWallet[] = [
          {
               icon: "assets/imgs/changewallet.png",
               name: "กระเป๋าหลัก",
               currency: "THB",
               subname: "ใช้จ่ายส่วนตัวและเมีย",
               walletType: WalletType.MANA,
               balance: 9999999,
               extraPrefix: null,
               extraText: null
          },
          {
               icon: "assets/imgs/changewallet.png",
               name: "เงินเมีย",
               currency: "THB",
               subname: "ใช้จ่ายส่วนเมีย",
               walletType: WalletType.MANA,
               balance: 77777777,
               extraPrefix: null,
               extraText: null
          }
     ];

     public static backWallets: BANKWallet[] = [
          {
               icon: "assets/imgs/promtpayicon.png",
               name: "พร้อม pay หมอนวด",
               currency: "THB",
               subname: "เอาไว้จ้างหมอหมอนวด",
               walletType: WalletType.BANK,
               balance: null,
               extraPrefix: null,
               extraText: null,
               idNumber: "0944554445",
               owner: "รักหมอ คอไม่แข็ง"
          },
          {
               icon: "assets/imgs/krungthai.png",
               name: "เงินหลบเมีย",
               currency: "THB",
               subname: "ระวังเมียเห็น",
               walletType: WalletType.BANK,
               balance: null,
               extraPrefix: null,
               extraText: null,
               idNumber: "4056155546",
               owner: "ฉันรวย อวยมาก"
          }
     ];

     public static cryptoWallets: CryptoWallet[] = [
          {
               icon: "assets/imgs/etherium.png",
               name: "Crypto_Eterium",
               currency: "ETH",
               subname: "ใช้จ่ายส่วนตัวและเมีย",
               walletType: WalletType.CRYPTO,
               balance: 55688,
               extraPrefix: new Array("Address", "Network"),
               extraText: new Array("0xb421eb83e1bb42da905341fd47c8e51c", "ETH main network"),
               address: "0xb421eb83e1bb42da905341fd47c8e51c",
               network: "ETH main network"
          },
          {
               icon: "assets/imgs/bitcoin.png",
               name: "Crypto_Bitcoin",
               currency: "BTC",
               subname: "ใช้จ่ายส่วนตัวและเมีย",
               walletType: WalletType.CRYPTO,
               balance: 20333,
               extraPrefix: new Array("Address", "Network"),
               extraText: new Array("b1867566d9af284ecf815ea47ea8b895bc", "Bitcoin main network"),
               address: "b1867566d9af284ecf815ea47ea8b895bc",
               network: "Bitcoin main network"
          },
          {
               icon: "assets/imgs/usdt.png",
               name: "Crypto_USDT",
               currency: "USDT",
               subname: "ใช้จ่ายส่วนตัวและเมีย",
               walletType: WalletType.CRYPTO,
               balance: 1000000,
               extraPrefix: new Array("Address", "Network"),
               extraText: new Array("0x95e2cacf83b48e3862b5e91ea9ceb8d", "ETH main network"),
               address: "0x95e2cacf83b48e3862b5e91ea9ceb8d",
               network: "ETH main network"
          }
     ];

     public static cryptoWalletsX: CryptoWallet[] = [
          {
               icon: "assets/imgs/etheriumX.png",
               name: "WalletX_Eterium",
               currency: "ETH",
               subname: "ใช้จ่ายส่วนตัวและเมีย",
               walletType: WalletType.CRYPTOX,
               balance: 3000,
               extraPrefix: new Array("Address", "Network"),
               extraText: new Array("me0d2412589d1649bf9259d9eb42501176", "Mana ETH network"),
               address: "me0d2412589d1649bf9259d9eb42501176",
               network: "Mana ETH network"
          },
          {
               icon: "assets/imgs/bitcoinX.png",
               name: "WalletX_Bitcoin",
               currency: "BTC",
               subname: "ใช้จ่ายส่วนตัวและเมีย",
               walletType: WalletType.CRYPTOX,
               balance: 600000,
               extraPrefix: new Array("Address", "Network"),
               extraText: new Array("mb924249a5b18343a188415dd3c6de3fa8", "Mana BTC network"),
               address: "mb924249a5b18343a188415dd3c6de3fa8",
               network: "Mana BTC network"
          },
          {
               icon: "assets/imgs/usdtX.png",
               name: "WalletX_USDT",
               currency: "USDT",
               subname: "ใช้จ่ายส่วนตัวและเมีย",
               walletType: WalletType.CRYPTOX,
               balance: 2344444,
               extraPrefix: new Array("Address", "Network"),
               extraText: new Array("mubd8d1451bf114b6dbcd7ccfcc9dbdadf", "Mana USDT network"),
               address: "mubd8d1451bf114b6dbcd7ccfcc9dbdadf",
               network: "Mana USDT network"
          }
     ];
}


