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
     WITHDRAW_CRYPTO_ADRESS: "WITHDRAW_CRYPTO_ADRESS",
     WITHDRAW_FIAT_MANA: "WITHDRAW_FIAT_MANA",
     WITHDRAW_FIAT_BANK: "WITHDRAW_FIAT_BANK",
     WITHDRAW_CRYPTO: "WITHDRAW_CRYPTO",
     DEPOSITE_CRYPTO_QR: "DEPOSITE_CRYPTO_QR",
     DEPOSITE_FIAT_MANA: "DEPOSITE_FIAT_MANA",
     DEPOSITE_FIAT_BANK: "DEPOSITE_FIAT_BANK",
     DEPOSITE_CRYPTO: "DEPOSITE_CRYPTO"
};

export const Method =
{
     WITHDRAW: "WITHDRAW",
     DEPOSIT: "DEPOSIT"
}

export const Chain =
{
     MANA: "Mana main chain",
     ETH: "Eterium main chain",
     BTC: "Bitcoin main chain",
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

export function GetRate(currency: string) {
     return ExangeRate[currency];
}

export function GetGasRate(from: string) {
     console.log("From : " + from);

     if (from == "USDT") from = "ETH";
     return { amount: 0.25, currency: from };
}

export function ParseToTwoDecimal(value: number): number {
     if (value != null)
          return Number.parseFloat(this.InputToDecimal(value.toString()));
     else return 0;
}

export class MockModel {

     public static manaWallets: ManaWallet[] = [
          {
               icon: "assets/imgs/changewallet.png",
               name: "กระเป๋าหลัก",
               currency: "THB",
               subname: "กระเป๋าเงิน THB ของฉัน",
               walletType: WalletType.MANA,
               balance: 9999999,
               extraPrefix: null,
               extraText: null
          },
          {
               icon: "assets/imgs/changewallet.png",
               name: "เงินเมีย",
               currency: "THB",
               subname: "กระเป๋าเงิน THB ของฉัน",
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
               subname: "Promtpay",
               walletType: WalletType.BANK,
               balance: null,
               extraPrefix: new Array("หมายเลขพร้อมเพย์"),
               extraText: new Array("0944554445"),
               idNumber: "0944554445",
               owner: "รักหมอ คอไม่แข็ง"
          },
          {
               icon: "assets/imgs/krungthai.png",
               name: "เงินหลบเมีย",
               currency: "THB",
               subname: "KTB",
               walletType: WalletType.BANK,
               balance: null,
               extraPrefix: new Array("เลขที่บัญชี"),
               extraText: new Array("4055666698"),
               idNumber: "4055666698",
               owner: "ฉันรวย อวยมาก"
          }
     ];

     public static cryptoWallets: CryptoWallet[] = [
          {
               icon: "assets/imgs/etherium.png",
               name: "Crypto_Eterium",
               currency: "ETH",
               subname: "Eterium Mana Wallet",
               walletType: WalletType.CRYPTO,
               balance: 55688,
               extraPrefix: new Array("Address", "Network"),
               extraText: new Array("0xb421eb83e1bb42da905341fd47c8e51c", "ETH main network"),
               address: "0xb421eb83e1bb42da905341fd47c8e51c",
               network: Chain.ETH
          },
          {
               icon: "assets/imgs/bitcoin.png",
               name: "Crypto_Bitcoin",
               currency: "BTC",
               subname: "Bitcoin Mana Wallet",
               walletType: WalletType.CRYPTO,
               balance: 20333,
               extraPrefix: new Array("Address", "Network"),
               extraText: new Array("b1867566d9af284ecf815ea47ea8b895bc", "Bitcoin main network"),
               address: "b1867566d9af284ecf815ea47ea8b895bc",
               network: Chain.BTC
          },
          {
               icon: "assets/imgs/usdt.png",
               name: "Crypto_USDT",
               currency: "USDT",
               subname: "USDT Mana Wallet",
               walletType: WalletType.CRYPTO,
               balance: 1000000,
               extraPrefix: new Array("Address", "Network"),
               extraText: new Array("0x95e2cacf83b48e3862b5e91ea9ceb8d", "ETH main network"),
               address: "0x95e2cacf83b48e3862b5e91ea9ceb8d",
               network: Chain.ETH
          }
     ];

     public static cryptoWalletsX: CryptoWallet[] = [
          {
               icon: "assets/imgs/etheriumX.png",
               name: "WalletX_Eterium",
               currency: "ETH",
               subname: "Eterium Coin Wallet",
               walletType: WalletType.CRYPTOX,
               balance: 3000,
               extraPrefix: new Array("Address", "Network"),
               extraText: new Array("me0d2412589d1649bf9259d9eb42501176", "Mana ETH network"),
               address: "me0d2412589d1649bf9259d9eb42501176",
               network: Chain.MANA
          },
          {
               icon: "assets/imgs/bitcoinX.png",
               name: "WalletX_Bitcoin",
               currency: "BTC",
               subname: "Bitcoin Wallet",
               walletType: WalletType.CRYPTOX,
               balance: 600000,
               extraPrefix: new Array("Address", "Network"),
               extraText: new Array("mb924249a5b18343a188415dd3c6de3fa8", "Mana BTC network"),
               address: "mb924249a5b18343a188415dd3c6de3fa8",
               network: Chain.MANA
          },
          {
               icon: "assets/imgs/usdtX.png",
               name: "WalletX_USDT",
               currency: "USDT",
               subname: "USDT Coin Wallet",
               walletType: WalletType.CRYPTOX,
               balance: 2344444,
               extraPrefix: new Array("Address", "Network"),
               extraText: new Array("mubd8d1451bf114b6dbcd7ccfcc9dbdadf", "Mana USDT network"),
               address: "mubd8d1451bf114b6dbcd7ccfcc9dbdadf",
               network: Chain.MANA
          }
     ];
}


