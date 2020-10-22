import { IItem, ISeparator, ISpacer, ItemType, IMenuItem, IHtmlExtendable, NavigationBarEvents, INavbar } from "../../ts-navbar";
export declare type IMenu = INavbar;
export interface INavItem extends IItem, IHtmlExtendable {
    type: "navItem";
    $openIcon?: string;
    icon?: string;
    items?: IMenuElement[];
    value?: string;
    hotkey?: string;
    active?: boolean;
    count?: number | string;
    countColor?: "danger" | "secondary" | "primary" | "success";
}
export declare type IMenuElement = ISpacer | ISeparator | INavItem | IMenuItem;
export { ItemType, IItem, NavigationBarEvents, ISpacer, ISeparator };
