import {accountItem, enumAccountStatus, enumAccountTypes} from "./iAccount";

let myAccount: accountItem;

function getAccount(_accountNo: string) : accountItem {
    return myAccount;
}

function newAccount(_account: accountItem): void {
    myAccount = _account;
    myAccount.dateCreated = new Date();
}

function changeStatus(_accountStatus: enumAccountStatus): void {
    myAccount.accountStatus = _accountStatus;
}


newAccount({accountNo: '2',
    accountType: enumAccountTypes.TRADE_BASIS,
    accountStatus : enumAccountStatus.DRAFT});

let aAccount: accountItem = getAccount('1');

changeStatus(enumAccountStatus.PENDING);

console.log(aAccount);
