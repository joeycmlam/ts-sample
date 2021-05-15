import {accountItem} from "../models/IAccount";
import {enumAccountStatus, enumAccountTypes} from "../models/IAccount";

class accounts {
    private _itemAccounts: accountItem[];

    public addAccount(_account: accountItem): void {

    }

    public getAccount(_accountNo: string): accountItem {
        return null;
    }

    static instance = new accounts();
}
