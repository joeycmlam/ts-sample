import {accountItem} from "../models/iAccount";
import {enumAccountStatus, enumAccountTypes} from "../models/iAccount";

class accounts {
    private _itemAccounts: accountItem[];


    static instance = new accounts();
}
