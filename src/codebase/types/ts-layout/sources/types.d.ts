import { IView, IViewLike } from "../../ts-common/view";
import { VNode } from "../../ts-common/dom";
import { IEventSystem } from "../../ts-common/events";
export interface ICellConfig {
    id?: string;
    html?: string;
    hidden?: boolean;
    header?: string;
    headerIcon?: string;
    headerImage?: string;
    headerHeight?: number;
    on?: {
        [key: string]: any;
    };
    width?: number | string;
    height?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    maxHeight?: number | string;
    css?: string;
    padding?: number | string;
    align?: "start" | "center" | "end" | "between" | "around" | "evenly";
    type?: "line" | "wide" | "space" | string;
    gravity?: number | boolean;
    collapsable?: boolean;
    resizable?: boolean;
    collapsed?: boolean;
    tab?: string;
    tabCss?: string;
    full?: boolean;
}
export interface ILayoutConfig extends ICellConfig {
    rows?: ICellConfig[] | ILayoutConfig[];
    cols?: ICellConfig[] | ILayoutConfig[];
    views?: ICellConfig[] | ILayoutConfig[];
    activeView?: string;
    activeTab?: string;
    parent?: ILayout;
}
export declare type IViewFn = (cfg: any) => VNode;
export interface IViewConstructor {
    new: (container: HTMLElement | string, config: any) => IView;
}
export interface ICell extends IView {
    id: string;
    config: ICellConfig;
    events: IEventSystem<LayoutEvents, ILayoutEventHandlersMap>;
    attach(name: string | IViewFn | IView | IViewConstructor, config?: any): IViewLike;
    attachHTML(html: string): void;
    isVisible(): boolean;
    toVDOM(nodes?: any[]): any;
    getParent(): ILayout;
    show(): void;
    hide(): void;
    paint(): void;
    destructor(): void;
    getWidget(): any;
    collapse(): void;
    expand(): void;
    toggle(): void;
}
export interface ILayout extends ICell {
    config: ILayoutConfig;
    removeCell(id: string): any;
    addCell(config: ICellConfig, index: number): any;
    getRefs(str: any): any;
    getCell(id: string): ICell;
    getId(index: number): string;
    forEach(cb: LayoutCallback): void;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    cell(id: string): ICell;
}
export declare enum LayoutEvents {
    beforeShow = "beforeShow",
    afterShow = "afterShow",
    beforeHide = "beforeHide",
    afterHide = "afterHide",
    beforeResizeStart = "beforeResizeStart",
    resize = "resize",
    afterResizeEnd = "afterResizeEnd",
    beforeAdd = "beforeAdd",
    afterAdd = "afterAdd",
    beforeRemove = "beforeRemove",
    afterRemove = "afterRemove",
    beforeCollapse = "beforeCollapse",
    afterCollapse = "afterCollapse",
    beforeExpand = "beforeExpand",
    afterExpand = "afterExpand"
}
export interface ILayoutEventHandlersMap {
    [key: string]: (...args: any[]) => any;
    [LayoutEvents.beforeShow]: (id: string) => boolean | void;
    [LayoutEvents.afterShow]: (id: string) => any;
    [LayoutEvents.beforeHide]: (id: string) => boolean | void;
    [LayoutEvents.afterHide]: (id: string) => any;
    [LayoutEvents.beforeResizeStart]: (id: string) => boolean | void;
    [LayoutEvents.resize]: (id: string) => void;
    [LayoutEvents.afterResizeEnd]: (id: string) => void;
    [LayoutEvents.beforeAdd]: (id: string) => boolean | void;
    [LayoutEvents.afterAdd]: (id: string) => void;
    [LayoutEvents.beforeRemove]: (id: string) => boolean | void;
    [LayoutEvents.afterRemove]: (id: string) => void;
    [LayoutEvents.beforeCollapse]: (id: string) => boolean | void;
    [LayoutEvents.afterCollapse]: (id: string) => void;
    [LayoutEvents.beforeExpand]: (id: string) => boolean | void;
    [LayoutEvents.afterExpand]: (id: string) => void;
}
export declare enum resizeMode {
    unknown = 0,
    percents = 1,
    pixels = 2,
    mixedpx1 = 3,
    mixedpx2 = 4,
    mixedperc1 = 5,
    mixedperc2 = 6
}
export declare type LayoutCallback = (cell: ICell, index: number, array: any) => any;
export declare type IFillSpace = boolean | "x" | "y";
