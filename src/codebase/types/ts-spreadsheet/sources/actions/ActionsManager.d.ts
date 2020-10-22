import { Actions, IActionsManager, IExecuteConfig } from "../types";
import { AddColumn } from "./AddColumn";
import { AddRow } from "./AddRow";
import { DeleteColumn } from "./DeleteColumn";
import { DeleteRow } from "./DeleteRow";
import { GroupAction } from "./GroupAction";
import { GroupColAction } from "./GroupColAction";
import { GroupRowAction } from "./GroupRowAction";
import { LockCell } from "./LockCell";
import { RemoveCellStyles } from "./RemoveCellStyles";
import { SetCellFormat } from "./SetCellFormat";
import { SetCellStyle } from "./SetCellStyle";
import { SetCellValue } from "./SetCellValue";
export declare const actions: {
    setCellStyle: typeof SetCellStyle;
    setCellValue: typeof SetCellValue;
    setCellFormat: typeof SetCellFormat;
    removeCellStyles: typeof RemoveCellStyles;
    lockCell: typeof LockCell;
    deleteRow: typeof DeleteRow;
    addRow: typeof AddRow;
    deleteColumn: typeof DeleteColumn;
    addColumn: typeof AddColumn;
    groupAction: typeof GroupAction;
    groupRowAction: typeof GroupRowAction;
    groupColAction: typeof GroupColAction;
};
export declare class ActionsManager implements IActionsManager {
    private _actions;
    private _redoActions;
    private _config;
    constructor(config: any);
    execute(command: Actions | IExecuteConfig[], config?: IExecuteConfig): void;
    undo(): void;
    redo(): void;
}
