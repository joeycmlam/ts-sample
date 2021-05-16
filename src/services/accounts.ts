import {accountItem} from "../models/IAccount";
import {enumAccountStatus, enumAccountTypes} from "../models/IAccount";

export class accounts {

 private static instance: accounts;

    private lstAccount: Account[];

    private constructor() {
    }

    public static getInstance(): accounts {
        if (accounts.instance) {
            accounts.instance = new accounts();
        }
        return accounts.instance;
    }


    public static getAccount(_accountNo: string) : accountItem {
        return null;
    }

}

