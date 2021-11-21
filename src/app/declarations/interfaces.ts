export interface IConcher {
    active: boolean;
    capacity: number;
    enabled: boolean;
    position: number;
    batchContents?: any;
}

export interface IBean {
    amountReceived: number;
    amountRemaining: number;
    dateReceived: string;
    origin: {
        country: string;
        countryCode: string;
        harvestYear: number|string;
        region: string;
        distributor?: string;
        lotID?: string;
        terroir?: {
            altitude?: number;
            beanType?: Array<string>;
            certificates?: Array<string>;
            notes?: Array<string>;
            rainfall?: number;
        };
    };
    id?: string; 
    profile?: {
        duration: string;
        initial: {
            temp: number;
            airflow: number;
        };
    };
}

export interface IRoast {
    beans: {
        id: string;
        weight: number;
    };
    isConched: boolean;
    profile: {
        duration: number;
        feedTime: number;
        finalTemp: number;
        endTime: any;
        maxTemp: number;
        startTime: any;
        timeUntilMax: number;
        tempFloor: number;
        timeAdjustment: number;
    };
    settings: {
        airflow: number;
        autoCracker: boolean;
        drumSpeed: number;
        gas: number;
        verticalWinnower: boolean;
    };
    comments?: string;
    id?: number;
    previousID?: number;
}
/* export interface IRoast {
    duration: string;
    feedTime: string;
    finish: IDateTime;
    id: number;
    nibs: number;
    raw: number;
    settings: {
        airflow: number;
        autoCracker: boolean;
        drumSpeed: number;
        gas: number;
        verticalWinnower: boolean;
    };
    start: IDateTime;
    isConched: boolean;
    temperature: {
        airflowMaxActual: number;
        airflowMaxSet: number;
        maxActual: number;
        maxSet: number;
    };
    tempFloor: number;
    timeUntilMax: string;
    comments?: string;
    batchID?: number;
    partialAmount?: number;
} */