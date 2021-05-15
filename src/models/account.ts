let accountNo: string = "1";
let accountType: string = "ITRC";
let accountStatus: string = "Draft";
let dateCreated: Date = new Date();

interface accountItem {
    accountNo;
    accountType;
    accountStatus;
    dateCreated;
}

function getAccount(_accountNo: string) : accountItem {
    return this;
}

function newAccount(_account: accountItem): void {
    this.accountNo = _account.accountNo;
    this.accountType = _account.accountType;
    this.accountStatus = _account.accountStatus;
    this.dateCreated = new Date();
}

function changeStatus(_accountStatus: string): void {
    this.accountStatus = _accountStatus;
}


newAccount({accountNo: '2',
    accountType: 'ITRC',
    accountStatus : 'Pending', dateCreated : new Date() });

let aAccount: accountItem = getAccount('1');

console.log(aAccount.accountStatus);
