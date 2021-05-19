
export enum enumTransactionType {
    SUB = 'SUB',
    RED = 'REDUMPTION',
    SWTICH_IN = 'SIN',
    SWITCH_OUT = 'SOUT',
    TRANSFER_IN = 'TIN',
    TRANSFER_OUT = 'TOUT'
}

class orderTransactionDeail {
    private orderTxnDetailId : number;
    private orderTxnId : number;
    private fundCode : string;
    private txnType : enumTransactionType;
    private amount : number;
    
}
