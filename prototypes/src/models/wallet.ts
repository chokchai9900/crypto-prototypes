export interface Wallet {
     icon: string;
     name: string;
     currency: string;
     exhangeRate: number;
     id: string;
     ownerName: string;
     walletType: string;
     amount:number;
}

export const WalletType = {
     CRYPTOX: "CRYPTOX",
     CRYPTO: "CRYPTO",
     FIAT: "FIAT"
};

export const Flow = {
     WITHDRAW_ADRESS: "CRYPTOX",
     WITHDRAW_MANA: "CRYPTO",
     WITHDRAW_CRYPTO: "FIAT"
};