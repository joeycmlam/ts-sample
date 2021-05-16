import {enumAccountStatus, enumAccountTypes} from "./IAccount";

class Account  {
    private accountNo: string;
    private accountType: enumAccountTypes
    private accountStatus: enumAccountStatus;
    private dateCreated: Date;

    getAccount(): Account {
        return null;
    }

    constructor (_accountNo: string, _accountType: enumAccountTypes) {
        this.accountNo = _accountNo;
        this.accountType = _accountType;
        this.accountStatus = enumAccountStatus.DRAFT;
        this.dateCreated = new Date();
    }

    getStatus(): enumAccountStatus {
            return this.accountStatus;
    }

    ackbyOps() {
        this.accountStatus = enumAccountStatus.PENDING;
    }

    closeAccount () {
        this.accountStatus = enumAccountStatus.CLOSE;
    }
}

let a: Account = new Account('1', enumAccountTypes.TRADE_BASIS);

console.log(`the status is ${a.getStatus()}`);

a.ackbyOps();

console.log(`the status is changed to ${a.getStatus()}`);
