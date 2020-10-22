import { Navbar } from "../../ts-navbar";
import { IMenuElement, IMenu } from "./types";
export declare class Menu extends Navbar<IMenuElement> implements IMenu {
    constructor(element?: string | HTMLElement, config?: any);
    protected _getFactory(): any;
    private _draw;
}
