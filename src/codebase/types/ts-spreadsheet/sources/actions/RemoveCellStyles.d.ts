import { IAction, IActionConfig } from "./../types";
export declare class RemoveCellStyles implements IAction {
    config: IActionConfig;
    constructor(config: IActionConfig);
    do(): void;
    undo(): void;
}
