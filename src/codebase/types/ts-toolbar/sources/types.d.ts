import { ItemType, IItem, ISpacer, ISeparator, IState, NavigationBarEvents, IMenuItem, IHtmlExtendable, INavbar } from "../../ts-navbar";
import { TreeCollection, DataEvents } from "../../ts-data";
import { IEventSystem } from "../../ts-common/events";
declare type IMenuElement = ISpacer | ISeparator | INavItem | IMenuItem;
export interface IToolbar extends INavbar {
    data: TreeCollection<IToolbarElement>;
    events: IEventSystem<DataEvents | NavigationBarEvents>;
    getState(): IState;
    setState(state: IState): void;
}
export interface IButton extends IItem, IHtmlExtendable {
    type: "button";
    css?: string;
    hotkey?: string;
    tooltip?: string;
    count?: number;
    countColor?: "danger" | "secondary" | "primary" | "success";
    items?: IMenuElement[];
    group?: string;
    twoState?: boolean;
    active?: boolean;
    multiClick?: boolean;
    icon?: string;
    view?: "flat" | "link";
    size?: "small" | "medium";
    color?: "danger" | "secondary" | "primary" | "success";
    full?: boolean;
    circle?: boolean;
    loading?: boolean;
    value?: string;
}
export interface IText extends IItem, IHtmlExtendable {
    type: "title";
    value?: string;
    tooltip?: string;
}
export interface IInput extends IItem {
    type: "input";
    icon?: string;
    placeholder?: string;
    width?: string;
    label?: string;
    value?: string;
}
export interface IImageButton extends IItem {
    type: "imageButton";
    src: string;
    twoState?: boolean;
    active?: boolean;
}
export interface ISelectButton extends IItem {
    type: "selectButton";
    $openIcon?: string;
    icon?: string;
    items?: IMenuElement[];
}
export interface ICustomHTMLButton extends IItem {
    type: "customHTMLButton";
    twoState?: boolean;
    active?: boolean;
    value?: string;
    count?: number;
}
export interface INavItem extends IItem {
    type: "navItem";
    value?: string;
    icon?: string;
    count?: string | number;
    hotkey?: string;
    twoState?: boolean;
    group?: string;
    countColor?: "danger" | "secondary" | "primary" | "success";
}
export declare type IToolbarElement = IButton | IInput | IImageButton | ICustomHTMLButton | ISeparator | ISpacer | IText | ISelectButton | INavItem | IMenuItem;
export { ItemType, IItem, NavigationBarEvents, ISpacer, ISeparator };
