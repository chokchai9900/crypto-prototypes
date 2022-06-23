export interface Wallet {
     icon: string;
     name: string;
     currency: string;
     exhangeRate: number;
     idOrAddress: string;
     ownerOrNetwork: string;
     walletType: string;
     amount: number;
}

export const WalletType = {
     CRYPTOX: "CRYPTOX",
     CRYPTO: "CRYPTO",
     BANK: "BANK",
     PROMPAY: "PROMPAY"
};

export const Flow = {
     WITHDRAW_ADRESS: "WITHDRAW_ADRESS",
     WITHDRAW_MANA: "WITHDRAW_MANA",
     WITHDRAW_CRYPTO: "WITHDRAW_CRYPTO",
     DEPOSITE_QR: "DEPOSITE_QR",
     DEPOSITE_MANA: "DEPOSITE_MANA",
     DEPOSITE_CRYPTO: "DEPOSITE_CRYPTO"
};

export function GetLineText(walletType: string): any {
     switch (walletType) {
          case WalletType.CRYPTO: return { line1: "Address", line2: "Network" };
          case WalletType.CRYPTOX: return { line1: "กระเป๋า", line2: "ประเภท" };
          case WalletType.BANK: return { line1: "เลขบัญชี", line2: "ชื่อบัญชี" };
          case WalletType.PROMPAY: return { line1: "หมายเลขพร้อมเพย์", line2: "ชื่อบัญชี" };
     }
}

export function GetTitle(flow: string): any {
     flow = flow.split("_")[0];
     switch (flow) {
          case "WITHDRAW": return "ถอน";
          case "DEPOSITE": return "เติม";
     }
}