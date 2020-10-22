import { IGrid } from "../../ts-grid";
import { IBufferManager, ISpreadsheet } from "./types";
import { EditLine } from "./EditLine";
export declare const focusHandler: {
    inFocus: any;
    getFocusState: () => any;
    setFocusState: (state: boolean) => boolean;
};
export declare function initHotkeys(spreadsheet: ISpreadsheet, grid: IGrid, bufferManager: IBufferManager, editLine: EditLine): void;
