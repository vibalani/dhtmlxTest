import { IAction, IActionConfig } from "./../types";
export declare class SetCellValue implements IAction {
    config: IActionConfig;
    constructor(config: IActionConfig);
    do(): void;
    undo(): void;
}
