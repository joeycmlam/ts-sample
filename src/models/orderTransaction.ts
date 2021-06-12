export enum enumPaymentType {
    FPS = 'FPS',
    CHEQUE = 'CHEQUE',
    BANK_TRANSFER = 'BT'

}

export enum enumTxnType {
    SUB = 'SUB',
    RED = 'RED',
    SWTICH = 'SWTICH',
    TRANSFER = 'TRANSER'
}

class orderTransaciton {

    private orderTxnId: number;
    private paymentType: enumPaymentType ;
    private transactionType: enumTxnType;




}
