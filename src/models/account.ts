import {enumAccountStatus, enumAccountTypes} from "./IAccount";

class Account  {



    private _accountNo: string = '';
    private _accountType: enumAccountTypes;
    private _accountStatus: enumAccountStatus = enumAccountStatus.DRAFT;
    private _dateCreated: Date;

    public get accountStatus () {
        return this._accountStatus;
    }


    getAccount(): Account {
        return null;
    }

    constructor (_accountNo: string, _accountType: enumAccountTypes) {
        this._accountNo = _accountNo;
        this._accountType = _accountType;
        this._accountStatus = enumAccountStatus.DRAFT;
        this._dateCreated = new Date();
    }

    ackbyOps() {
        this._accountStatus = enumAccountStatus.PENDING;
    }

    closeAccount () {
        this._accountStatus = enumAccountStatus.CLOSE;
    }
}

let a: Account = new Account('1', enumAccountTypes.TRADE_BASIS);

console.log(`this is the status ${a.accountStatus}`)

a.ackbyOps();

console.log(`this is the latest status ${a.accountStatus}`)
