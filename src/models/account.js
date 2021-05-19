"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IAccount_1 = require("./IAccount");
var Account = /** @class */ (function () {
    function Account(_accountNo, _accountType) {
        this._accountNo = '';
        this._accountStatus = IAccount_1.enumAccountStatus.DRAFT;
        this._accountNo = _accountNo;
        this._accountType = _accountType;
        this._accountStatus = IAccount_1.enumAccountStatus.DRAFT;
        this._dateCreated = new Date();
    }
    Object.defineProperty(Account.prototype, "accountStatus", {
        get: function () {
            return this._accountStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "accountNo", {
        get: function () {
            return this._accountNo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "accountType", {
        get: function () {
            return this._accountType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "dateCreated", {
        get: function () {
            return this._dateCreated;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.ackbyOps = function () {
        this._accountStatus = IAccount_1.enumAccountStatus.PENDING;
    };
    Account.prototype.closeAccount = function () {
        this._accountStatus = IAccount_1.enumAccountStatus.CLOSE;
    };
    return Account;
}());
var a = new Account('1', IAccount_1.enumAccountTypes.TRADE_BASIS);
console.log("this is the status " + a.accountStatus);
a.ackbyOps();
console.log("this is the latest status " + a.accountStatus);
//# sourceMappingURL=account.js.map