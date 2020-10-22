import { IEventSystem } from "../../ts-common/events";
import { Sort } from "./datacollection/sort";
import { DataCallback, DataEvents, Id, IDataCollection, IDataItem, IDataProxy, IFilterCallback, IFilterConfig, IFilterMode, ISortMode, ITreeCollection, IUpdateObject, ReduceCallBack, Statuses, IDataEventsHandlersMap, DataDriver, IDataConfig } from "./types";
import { TreeCollection } from "./treecollection";
export declare class DataCollection<T extends IDataItem = IDataItem> implements IDataCollection<T> {
    loadData: Promise<any>;
    saveData: Promise<any>;
    dataProxy: IDataProxy;
    config: IDataConfig;
    events: IEventSystem<DataEvents, IDataEventsHandlersMap>;
    protected _order: T[];
    protected _pull: {
        [id: string]: T;
    };
    protected _sort: Sort;
    protected _filter: any;
    protected _sorter: ISortMode;
    protected _meta: any;
    protected _range: [number, number];
    protected _loaded: boolean;
    private _changes;
    private _initOrder;
    private _loader;
    constructor(config?: any, events?: IEventSystem<any>);
    protected _reset(): void;
    add(obj: IDataItem, index?: number): Id;
    add(obj: IDataItem[], index?: number): Id[];
    remove(id: Id | Id[]): void;
    removeAll(): void;
    exists(id: Id): boolean;
    getNearId(id: string): string;
    getItem(id: Id): T;
    update(id: Id, obj: IUpdateObject, silent?: boolean): void;
    getIndex(id: Id): number;
    getId(index: number): Id;
    getLength(): number;
    isDataLoaded(from?: number, to?: number): boolean;
    filter(rule?: IFilterMode | IFilterCallback, config?: IFilterConfig): void;
    find(conf: IFilterMode | DataCallback<T>): any;
    findAll(conf: IFilterMode | DataCallback<T>): any[];
    sort(by?: ISortMode, config?: any): void;
    copy(id: Id | Id[], index: number, target?: IDataCollection | ITreeCollection, targetId?: Id): Id | Id[];
    move(id: Id | Id[], index: number, target?: DataCollection | TreeCollection, targetId?: Id): Id | Id[];
    forEach(cb: DataCallback<T>): void;
    load(url: IDataProxy | string, driver?: any): Promise<any>;
    parse(data: T[], driver?: any): any;
    $parse(data: any[]): void;
    save(url: IDataProxy): void;
    changeId(id: Id, newId?: Id, silent?: boolean): void;
    isSaved(): boolean;
    map(cb: DataCallback<T>): any[];
    mapRange(from: number, to: number, cb: DataCallback<T>): any[];
    reduce<A>(cb: ReduceCallBack<T, A>, acc: A): A;
    serialize(driver?: DataDriver): any;
    getInitialData(): T[];
    setMeta(obj: T, key: string, value: any): void;
    getMeta(obj: T, key: string): any;
    getMetaMap(obj: T): any;
    setRange(from: number, to: number): void;
    getRawData(from: number, to: number, order?: T[], mode?: number): T[];
    protected _add(obj: IDataItem, index: number): Id;
    protected _remove(id: Id): void;
    protected _copy(id: Id, index: number, target?: IDataCollection | ITreeCollection, targetId?: Id, key?: number): Id;
    protected _move(id: Id, index: number, target?: IDataCollection | ITreeCollection, targetId?: Id, key?: number): Id;
    protected _addCore(obj: IDataItem, index: number): Id;
    protected _removeCore(id: Id): void;
    protected _parse_data(data: any[]): void;
    protected _approximate(data: any[], values: string[], maxNum: number): any[];
    protected _onChange(status: Statuses, id: Id, obj: any): void;
    protected _addToOrder(array: any[], obj: any, index?: number): void;
    protected _applyPermanent(): void;
    protected _applySorters(by?: ISortMode): void;
    protected _applyFilters(rule?: IFilterCallback): void;
}
