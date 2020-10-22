import { Grid } from "../../ts-grid";
import { Spreadsheet } from "./Spreadsheet";
import { IBufferManager, ISelection } from "./types";
export interface ISelectedCell {
    row: string;
    col: string;
    cell: string;
    edit?: boolean;
}
export declare class Selection implements ISelection {
    private _selected;
    private _focusedCell;
    private _spreadsheet;
    private _grid;
    private _bufferManager;
    private _events;
    private _mousePressed;
    private _resizedColumn;
    private _pressedArea;
    private _cellsToCopy;
    constructor(spreadsheet: Spreadsheet, grid: Grid, bufferManager: IBufferManager);
    setSelectedCell(cell: string): void;
    getSelectedCell(): string;
    getFocusedCell(): string;
    setFocusedCell(cell: string): void;
    private _isInRange;
    private _removeHeadersCss;
    private _setHeadersCss;
    private _selectRow;
    private _selectColumn;
    private _setGroupSelectionHandlers;
    private _setHandlers;
}
