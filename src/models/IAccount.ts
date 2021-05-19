export enum enumAccountTypes {
    ASSET_BASIS = 'AB',
    TRADE_BASIS = 'TB',
    STAFF = 'STAFF',
    CROP = 'CORP'
}

export enum enumAccountStatus {
    DRAFT = 'Draft',
    PENDING = 'Pending',
    ACTIVE = 'Active',
    INACTIVE = 'Inacive',
    CLOSE = 'Closed'
}

export interface accountItem {
    accountNo: string;
    accountType: enumAccountTypes;
    accountStatus: enumAccountStatus;
    dateCreated?: Date;
}
