"use strict";
exports.__esModule = true;
exports.accounts = void 0;
var accounts = /** @class */ (function () {
    function accounts() {
    }
    accounts.getInstance = function () {
        if (accounts.instance) {
            accounts.instance = new accounts();
        }
        return accounts.instance;
    };
    accounts.getAccount = function (_accountNo) {
        return null;
    };
    return accounts;
}());
exports.accounts = accounts;
