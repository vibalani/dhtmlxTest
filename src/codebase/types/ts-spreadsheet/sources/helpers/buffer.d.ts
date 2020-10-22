import { IGrid } from "../../../ts-grid";
import { IBufferStruct, IExecuteConfig, ISpreadsheet } from "./../types";
export declare class BufferManager {
    private _buffer;
    private _spreadsheet;
    private _grid;
    private _callAction;
    constructor(spreadsheet: ISpreadsheet, grid: IGrid, callAction: (config: IExecuteConfig) => void);
    store(operation: IBufferStruct["operation"], col?: any, row?: any): void;
    paste(): void;
    getStruct(): IBufferStruct;
}
