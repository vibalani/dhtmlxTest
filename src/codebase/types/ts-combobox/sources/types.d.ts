import { DataCollection } from "../../ts-data";
export declare type ILabelPosition = "left" | "top";
export interface IComboboxConfig {
    data?: DataCollection<any> | any[];
    readonly?: boolean;
    disabled?: boolean;
    template?: (item: any) => string;
    filter?: (item: any, input: string) => boolean;
    multiselection?: boolean;
    label?: string;
    labelPosition?: ILabelPosition;
    labelWidth?: string | number;
    placeholder?: string;
    selectAllButton?: boolean;
    itemsCount?: boolean | ((count: number) => string);
    itemHeight?: number | string;
    virtual?: boolean;
    listHeight?: number | string;
    required?: boolean;
    helpMessage?: string;
    hiddenLabel?: boolean;
    css?: string;
    value?: string | string[];
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    cellHeight?: number;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    help?: string;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    showItemsCount?: boolean | ((count: number) => string);
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    labelInline?: boolean;
}
export interface IComboFilterConfig {
    data?: DataCollection<any> | any[];
    readonly?: boolean;
    template?: (item: any) => string;
    filter?: (item: any, input: string) => boolean;
    placeholder?: string;
    virtual?: boolean;
}
export declare enum ComboboxEvents {
    change = "change",
    open = "open",
    input = "input",
    beforeClose = "beforeClose",
    afterClose = "afterClose",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    close = "close"
}
export interface IComboboxEventHandlersMap {
    [key: string]: (...args: any[]) => any;
    [ComboboxEvents.change]: (ids: string | string[]) => any;
    [ComboboxEvents.open]: () => any;
    [ComboboxEvents.input]: (value: any) => any;
    [ComboboxEvents.beforeClose]: () => boolean;
    [ComboboxEvents.afterClose]: () => any;
    [ComboboxEvents.close]: () => any;
}
export interface ICombobox {
    disable(): void;
    enable(): void;
    isDisabled(): boolean;
    destructor(): void;
    paint(): void;
    clear(): void;
    focus(): void;
    getValue(asArray?: boolean): string[] | string;
    setValue(ids: string[] | string): void;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    setState(state: State): void;
}
export declare enum ComboState {
    default = 0,
    error = 1,
    success = 2
}
/** @deprecated See a documentation: https://docs.dhtmlx.com/ */
export declare type State = "success" | "error" | "default";
