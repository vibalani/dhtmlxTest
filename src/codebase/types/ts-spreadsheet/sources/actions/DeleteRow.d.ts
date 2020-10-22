import { IAction, IActionConfig } from "./../types";
export declare class DeleteRow implements IAction {
    config: IActionConfig;
    private _item;
    private _index;
    constructor(config: IActionConfig);
    do(): void;
    undo(): void;
}
