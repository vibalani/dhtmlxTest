import { IAction, IActionConfig } from "./../types";
export declare class SetCellStyle implements IAction {
    config: IActionConfig;
    constructor(config: IActionConfig);
    do(): void;
    undo(): void;
}
