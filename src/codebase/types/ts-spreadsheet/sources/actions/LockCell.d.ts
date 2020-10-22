import { IAction, IActionConfig } from "./../types";
export declare class LockCell implements IAction {
    config: IActionConfig;
    constructor(config: IActionConfig);
    do(): void;
    undo(): void;
}
