/// <reference types="resize-observer-browser" />
declare global {
  declare class Environment {
    appName: string;
    safeAreaBottom: number;
    appVersion: string;
    deviceHeight: number | string;
    deviceWidth: number | string;
    availableHeight: number | string;
    statusBarHeight: number;
    availableWidth: number | string;
    osVersion: string;
    platform: string;
    scale: number;
    remUEWidthInPixel: number;
    remUEWidthInPixelRatio: number;
    model: string;
    extraParams: {
        [key: string]: string;
    };
    constructor();
  }

  interface NotifyListener {
    (target: any): void;
  }
  declare class NotifyCenter {
    private listeners;
    addEventListener(key: string, listener: NotifyListener): void;
    removeEventListener(key: string, listener: NotifyListener): void;
    triggerEvent(key: string, args: any): void;
  }

  declare class NativeJSGlobal {
    setTitle(setTitle: string): any;
    setNavigationBarMode(mode: number): any;
    setNavigationBarColor(color: string): any;
    setScrollTracker(view: any, options: any): any;
    arWidgetDisplay(isDisplay: boolean): any;
    notifyCenter: NotifyCenter;
    env: Environment;
    pageInfo: any;
    params: any;
    private observer;
    private targetNode;
    setBasicWidth(width: number): any;
    constructor();
    render(page: any): void;
    private isWebSimulator;
    private onScroll;
    private elementClick;
    private elementhighlight;
    private getScroller;
  }
  declare const NativeJS: NativeJSGlobal;

  /**
  * Animatable CSS properties
  * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
  * https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
  */
  declare type KeyPath = 'position' | 'scale' | 'scaleX' | 'scaleY' | 'rotationX' | 'rotationY' | 'rotationZ' | 'opacity' | 'backgroundColor';
  declare type EasingType = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
  interface PointValue {
    x: string | number;
    y: string | number;
  }
  /** backgroundColor: '#fff'; position: {x: '1px', y: '1px'}; scale: 1; rotate: 45; opacity: 0.1  */
  declare type ValueType = string | number | PointValue;
  declare class BasicAnimation {
    path: KeyPath;
    duration: number;
    delay: number;
    repeatCount: number;
    value: ValueType;
    easing: EasingType;
    onstart: Function;
    onend: Function;
    on(type: string, callback: Function): void;
    removeAnimation: Function;
    constructor(path: KeyPath);
  }

  declare class ImagePicker {
    maxSize: 100;
    takePhoto(filePath: string): void;
    pickImage(filePath: string): void;
  }

  declare abstract class Event {
    target: View | any;
    abstract get type(): EventType;
  }
  interface EventListener {
    (event?: Event): void;
  }

  /**
  * http://www.w3school.com.cn/css3/css3_animation.asp
  */
  declare class KeyframeAnimation {
    path: KeyPath;
    duration: number;
    repeatCount: number;
    keyframes: Array<{
        percent?: number;
        value: ValueType;
        easing?: EasingType;
    }>;
    easing?: EasingType;
    onstart: Function;
    onend: Function;
    delay: number;
    on(type: string, callback: Function): void;
    removeAnimation: Function;
    constructor(path: KeyPath);
  }

  declare const SIZE_STYLE: Array<any>;
  interface ViewStyle {
    top?: string | number;
    left?: string | number;
    bottom?: string | number;
    right?: string | number;
    margin?: string | number;
    marginTop?: string | number;
    marginLeft?: string | number;
    marginBottom?: string | number;
    marginRight?: string | number;
    padding?: string | number;
    paddingTop?: string | number;
    paddingLeft?: string | number;
    paddingBottom?: string | number;
    paddingRight?: string | number;
    width?: string | number;
    height?: string | number;
    minWidth?: string | number;
    minHeight?: string | number;
    maxWidth?: string | number;
    maxHeight?: string | number;
    flexDirection?: 'row' | 'column';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
    order?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
    alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    position?: 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static' | 'inherit';
    backgroundColor?: string;
    backgroundImage?: string;
    opacity?: number;
    visibility?: 'hidden' | 'visible';
    display?: 'none' | 'flex' | 'block' | 'inline' | 'inline-block  ';
    borderColor?: string;
    borderLeftColor?: string;
    borderTopColor?: string;
    borderRightColor?: string;
    borderBottomColor?: string;
    borderStyle?: 'solid' | 'dashed' | 'dotted';
    borderLeftStyle?: 'solid' | 'dashed' | 'dotted';
    borderTopStyle?: 'solid' | 'dashed' | 'dotted';
    borderRightStyle?: 'solid' | 'dashed' | 'dotted';
    borderBottomStyle?: 'solid' | 'dashed' | 'dotted';
    borderWidth?: string | number;
    borderLeftWidth?: string | number;
    borderTopWidth?: string | number;
    borderRightWidth?: string | number;
    borderBottomWidth?: string | number;
    borderRadius?: string | number;
    borderTopLeftRadius?: string | number;
    borderTopRightRadius?: string | number;
    borderBottomLeftRadius?: string | number;
    borderBottomRightRadius?: string | number;
    shadow?: string;
    overflow?: 'hidden' | 'visible';
    zIndex?: number;
    transform?: string;
    transitionDelay?: string | number;
    transitionProperty?: string;
    transitionDuration?: string | number;
    transitionTimingFunction?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  }
  declare type EventType = 'longPress' | 'pan' | 'pinch' | 'swipe' | 'tap' | 'touch' | 'touchDown' | 'input' | 'scroll' | 'switch';
  export declare class View {
    viewID?: string;
    node: HTMLElement | HTMLImageElement | HTMLButtonElement | HTMLInputElement | HTMLTextAreaElement | HTMLSpanElement | any;
    hmNode?: any;
    basicAnimationArray: Array<any>;
    protected _enabled: boolean;
    protected subViews: Set<View>;
    protected _style: ViewStyle;
    protected listeners: {
        [key: string]: Array<EventListener>;
    };
    protected eventListeners: {
        [key: string]: {
            hammer?: any;
            listener?: Function;
            [key: string]: any;
        };
    };
    protected animations: {
        [key: string]: Animation;
    };
    isHighlight?: Boolean;
    layout: () => void;
    isrender: boolean;
    constructor(viewID?: string);
    visibilityChange(): void;
    interceptBack(): void;
    /**
     * 页面首次加载时触发
     */
    onCreate(): void;
    /**
    * 页面显示周期
    */
    onAppear(): void;
    /**
     * 页面隐藏
     */
    onDisappear(): void;
    /**
    * 页面销毁
    */
    onDestroy(): void;
    /**
   * 页面返回
   */
    onBack(): void;
    private playBasicAnimation;
    private formatBasicAnimation;
    protected defaultStyle(): void;
    protected createNode(): void;
    get enabled(): boolean;
    set enabled(_enabled: boolean);
    get style(): ViewStyle;
    set style(_style: ViewStyle);
    /**
     * 初始化生命周期函数，目前在前端SDK上没用，兼容端的代码
     */
    initialize(): void;
    /**
     * 销毁时机
     */
    finalize(): void;
    private _onMounted;
    protected onMounted(): void;
    private _onDestoryed;
    protected onDestoryed(): void;
    appendChild(subview: any): void;
    removeChild(subview: any): void;
    removeAll(): void;
    insertBefore(subview: any, existingView: View): void;
    /**
     * 用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点
     */
    replaceChild(newSubview: View, oldSubview: View): void;
    getElementById(viewID: string): View;
    addEventListener(key: EventType, listener: EventListener): void;
    removeEventListener(key: EventType, listener: EventListener): void;
    addAnimation(animation: BasicAnimation | KeyframeAnimation, key: string): void;
    getRect(callback: Function): void;
    dbg_highlight(isHighlight: Boolean): void;
    resetStyle(): void;
    requestViewWidth(callback: Function): void;
    requestViewHeight(callback: Function): void;
    /**
     * 获取属性动画的原始值(第一帧值)
     */
    private getBasicAnimationDefaultKeyframeAnimationOptions;
    /**
     * 获取属性动画的结果值(最后一帧值)
     */
    private getBasicAnimationKeyFrameAnimationOptions;
    private getKeyframeAnimationOptions;
    private convertPath;
    private convertPathValue;
  }

  interface ImageStyle extends ViewStyle {
    resize?: 'origin' | 'contain' | 'cover' | 'stretch';
  }
  declare class Image extends View {
    protected _style: ImageStyle;
    protected _src: string;
    protected _gifSrc: string;
    constructor();
    protected createNode(): void;
    private setImageResizeMode;
    get style(): ImageStyle;
    set style(_style: ImageStyle);
    get src(): string;
    set src(src: string);
    get gifSrc(): string;
    set gifSrc(gifSrc: string);
    get gifRepeatCount(): number;
    set gifRepeatCount(gifRepeatCount: number);
    set onload(onload: Function);
    get onload(): Function;
  }

  declare class ToastThis {
    customView?: View;
    toastTimer?: any;
    constructor();
    show(msg: string, duration?: number): void;
    custom(view: View, duration?: number): void;
    private hide;
  }
  declare class Dialog {
    cancelable?: boolean;
    customView?: View;
    alertView?: View;
    alertViewMsg?: View;
    alertViewBtn?: View;
    loadingView?: View;
    loadingViewIcon?: Image;
    loadingViewText?: View;
    confirmView?: View;
    confirmViewText?: View;
    confirmViewOkBtn?: View;
    confirmViewCancelBtn?: View;
    constructor();
    alert(msg: string, btnText?: string, callback?: Function): void;
    confirm(title: string, msg: string, okBtnText: string, cancelBtnText: string, okCallback: Function, cancelCallback: Function): void;
    loading(msg: string): void;
    custom(view: View): void;
    dismiss(): void;
  }
  declare const Toast: ToastThis;

  declare const Location: {
    getLastLocation(callback: Function): void;
    startLocation(callback: Function, intervalTime: number, intervalDistance: number): void;
    stopLocation(): void;
    onError(callback: Function): void;
  };

  declare const Memory: {
    set(key: any, value: any): void;
    get(key: any): string;
    getAll(): object;
    remove(key: any): void;
    removeAll(): void;
    exist(key: any): boolean;
  };

  interface Ioptions {
    url: string;
    params: object;
    animated: boolean;
    id: string;
    closeSelf: boolean;
  }
  declare const Navigator: {
    openPage: (options: Ioptions, callback?: Function) => void;
    popPage: (options?: any) => void;
    popToPage: (options?: any) => void;
    popToRootPage: (options?: any) => void;
    popBack: (count: number, options?: any) => void;
  };

  declare const Phone: {
    call(phoneNum: string, callback: Function): void;
  };

  declare class Response {
    status: number;
    header: {
        [key: string]: any;
    };
    data: any;
    error: any;
    message: any;
    request: Request;
  }

  /**
  * 参考
  * https://segmentfault.com/a/1190000004322487#articleHeader0
  * https://juejin.im/entry/5a4ea104518825733a307ed1
  */
  declare class Request {
    url: string;
    method: 'GET' | 'POST';
    timeout: number;
    header: {
        [key: string]: any;
    };
    param: {
        [key: string]: any;
    };
    withCredentials: boolean;
    send(callback: (response: Response) => void): void;
  }

  declare const WebSocket: {
    new (url: string, protocols?: string | string[]): WebSocket;
    prototype: WebSocket;
    readonly CLOSED: number;
    readonly CLOSING: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
  };

  declare const Storage: {
    set(key: any, value: any): void;
    get(key: any): string;
    getAll(): object;
    remove(key: any): void;
    removeAll(): void;
    exist(key: any): boolean;
  };

  declare class Timer {
    private intervalTimer;
    private timeoutTimer;
    setInterval(callback: Function, time: number): void;
    clearInterval(): void;
    setTimeout(callback: Function, timeout: number): void;
    clearTimeout(): void;
  }

  declare enum InputState {
    NORMAL = 0,
    BEGAN = 1,
    CHANGED = 2,
    ENDED = 3
  }
  declare class InputEvent extends Event {
    text: string;
    state: InputState;
    get type(): EventType;
  }

  declare enum LongPressState {
    NORMAL = 0,
    BEGAN = 1,
    CHANGED = 2,
    ENDED = 3,
    CANCELLED = 4
  }
  declare class LongPressEvent extends Event {
    state: LongPressState;
    timestamp: string;
    get type(): EventType;
  }

  declare enum PanState {
    NORMAL = 0,
    BEGAN = 1,
    CHANGED = 2,
    ENDED = 3,
    CANCELLED = 4
  }
  declare class PanEvent extends Event {
    state: PanState;
    translation: {
        deltaX: number | string;
        deltaY: number | string;
    };
    timestamp: string;
    get type(): EventType;
  }

  declare enum PinchState {
    NORMAL = 0,
    BEGAN = 1,
    CHANGED = 2,
    ENDED = 3,
    CANCELLED = 4
  }
  declare class PinchEvent extends Event {
    state: PinchState;
    scale: number;
    timestamp: string;
    get type(): EventType;
  }

  declare enum ScrollState {
    NORMAL = 0,
    BEGAN = 1,
    SCROLL = 2,
    ENDED = 3,
    SCROLL_UP = 4
  }
  declare class ScrollEvent extends Event {
    state: ScrollState;
    offsetX: number;
    offsetY: number;
    dx: number;
    dy: number;
    timestamp: string;
    target: any;
    get type(): EventType;
  }

  declare enum SwipeState {
    NORMAL = 0,
    BEGAN = 1,
    CHANGED = 2,
    ENDED = 3,
    CANCELLED = 4
  }
  declare class SwipeEvent extends Event {
    state: SwipeState;
    direction: 1 | 2 | 4 | 8;
    timestamp: string;
    get type(): EventType;
  }

  interface SwitchEventListener {
    (event?: SwitchEvent): void;
  }
  declare class SwitchEvent extends Event {
    state: Boolean;
    get type(): EventType;
  }

  declare enum TapState {
    NORMAL = 0,
    BEGAN = 1,
    CHANGED = 2,
    ENDED = 3,
    CANCELLED = 4
  }
  declare class TapEvent extends Event {
    position: {
        x: number | string;
        y: number | string;
    };
    state: TapState;
    timestamp: string;
    get type(): EventType;
  }

  declare enum TouchState {
    NORMAL = 0,
    BEGAN = 1,
    CHANGED = 2,
    ENDED = 3,
    CANCELLED = 4
  }
  declare class TouchEvent extends Event {
    position: {
        x: number;
        y: number;
    };
    state: TouchState;
    timestamp: string;
    get type(): EventType;
  }

  interface ButtonStyle extends ViewStyle {
    textAlign?: 'left' | 'center' | 'right';
    fontFamily?: string;
    fontSize?: string | number;
    color?: string;
  }
  declare class Button extends View {
    private _beforeDisabledStyle;
    private _disabled;
    private _beforePressedStyle;
    private _pressedStyle;
    constructor();
    protected defaultStyle(): void;
    private init;
    protected createNode(): void;
    get text(): string;
    set text(text: string);
    get enabled(): boolean;
    set enabled(_enabled: boolean);
    get disabled(): ButtonStyle;
    set disabled(value: ButtonStyle);
    get pressed(): ButtonStyle;
    set pressed(value: ButtonStyle);
  }

  interface CarouselStyle extends ViewStyle {
  }
  declare class Carousel extends View {
    protected _style: CarouselStyle;
    addRegionChangedListener: Function;
    constructor();
    protected createNode(): void;
    onPageChange(callback: any): void;
    onItemClick(callback: any): void;
    onItemView(callback: any): void;
  }

  declare class HorizontalScroller extends View {
    _bounces: boolean;
    _showScrollBar: boolean;
    protected _style: ViewStyle;
    private bscroll;
    private wrapper;
    constructor();
    get showScrollBar(): boolean;
    set showScrollBar(value: boolean);
    get bounces(): boolean;
    set bounces(value: boolean);
    protected defaultStyle(): void;
    onMounted(): void;
    onDestoryed(): void;
    appendChild(subview: any): void;
    removeChild(subview: any): void;
    insertBefore(subview: any, existingView: View): void;
    refresh(): void;
    /**
     *  init nj-list-row
     */
    private refreshListView;
    private registerBsScrollEvent;
    addEventListener(key: 'scroll', listener: EventListener): void;
    removeEventListener(key: 'scroll', listener: EventListener): void;
    /**
     * 滚动到坐标
     */
    scrollTo(x: number, y: number): void;
    /**
     * 滚动一定距离
     */
    scrollBy(dx: number, dy: number): void;
    /**
     * 滚动到顶部
     */
    scrollToTop(): void;
    /**
     * 滚动到底部
     */
    scrollToBottom(): void;
    /**
     * 滚动到顶部事件监听
     */
    setOnScrollToTopListener(callback: EventListener): void;
    /**
     * 滚动到底部事件监听
     */
    setOnScrollToBottomListener(callback: EventListener): void;
    /**
     * 更新滚动视图大小（iOS独有方法）
     */
    updateContentSize(): void;
  }

  declare const INPUT_SIZE_STYLE: Array<any>;
  interface InputStyle extends ViewStyle {
    type?: 'default' | 'number' | 'tel' | 'email' | 'password';
    color?: string;
    placeholderColor?: string;
    cursorColor?: string;
    textAlign?: 'left' | 'center' | 'right';
    fontFamily?: string;
    maxLength?: number;
    fontSize?: string | number;
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  }
  declare class Input extends View {
    protected _style: InputStyle;
    protected _randomPlaceholderClass: string;
    protected _placeholderCssIndex: number;
    constructor();
    protected defaultStyle(): void;
    /**
     * 通过添加伪类::placeholder来修改placeholder
     */
    protected changePlaceholder({ fontSize, color }: {
        fontSize: any;
        color: any;
    }): void;
    protected createNode(): void;
    get text(): any;
    set text(value: any);
    get focused(): boolean;
    set focused(focused: boolean);
    get placeholder(): any;
    set placeholder(value: any);
    get style(): InputStyle;
    set style(_style: InputStyle);
    clear(): void;
  }

  interface ListStyle extends ViewStyle {
    mode?: 'list' | 'grid' | 'waterfall';
    scrollDirection?: 'vertical' | 'horizontal';
    column?: number;
    lineSpacing?: number | string;
    itemSpacing?: number | string;
    leftSpacing?: number | string;
    rightSpacing?: number | string;
    topSpacing?: number | string;
    bottomSpacing?: number | string;
    bounces?: boolean;
  }
  declare class List extends View {
    refreshView: View;
    loadMoreView: View;
    showScrollBar: boolean;
    bounces: boolean;
    isMoreData: boolean;
    protected _style: ListStyle;
    protected mode: 'list' | 'grid' | 'waterfall';
    private rowCount;
    private _listRows;
    private _gridRows;
    private _waterfalls;
    private wrapper;
    private recyclerView;
    private bscroll;
    constructor();
    onDestoryed(): void;
    protected defaultStyle(): void;
    /**
     * @not support
     */
    onRegister: (position: number) => number;
    /**
     * @ignore
     */
    onCreate: (type: number) => View;
    /**
     * @not support
     */
    onUpdate: (position: number, cell: View) => void;
    /**
     * 下拉刷新时触发的回调
     * 0(正常状态) 1(即将刷新) 2(正在刷新)
     */
    onRefresh: (state: 0 | 1 | 2 | 3) => void;
    /**
     * 下拉刷新时触发的回调
     * 0(正常状态) 1(正在刷新) 2(无数据)
     */
    onLoadMore: (state: 0 | 1 | 2) => void;
    get style(): ListStyle;
    set style(_style: ListStyle);
    refresh(count: number): void;
    /**
     * 滚动到指定位置
     * @param position 要滚动到的位置
     */
    scrollToPosition(position: number): void;
    /**
     * 滚动到坐标
     */
    scrollTo(x: number, y: number): void;
    /**
     * 滚动一定位置
     */
    scrollBy(dx: number, dy: number): void;
    /**
     * 结束下拉刷新
     */
    stopPullRefresh(): void;
    /**
     * 设置上拉加载控件
     * @param enable 下次能否继续触发加载更多
     */
    stopLoadMore(enable?: boolean): void;
    addEventListener(key: 'scroll', listener: EventListener): void;
    removeEventListener(key: 'scroll', listener: EventListener): void;
    /**
     * nj-list
     *   nj-list-row
     */
    private refreshListView;
    /**
     * nj-list
     *   nj-list-row
     *     nj-list-cell
     * @param {number} count
     */
    private refreshGridView;
    /**
     * 瀑布流布局
     */
    private refreshWaterfallView;
    computeElement(): void;
    private bscrollInit;
    private registerBsScrollEvent;
  }

  declare class Scroller extends View {
    refreshView?: View;
    loadMoreView?: View;
    _showScrollBar: boolean;
    _bounces: boolean;
    isMoreData: boolean;
    protected _style: ViewStyle;
    config: {
        attributes: boolean;
        childList: boolean;
        characterData: boolean;
        subtree: boolean;
    };
    observer: ResizeObserver;
    private wrapper;
    private bscroll;
    constructor();
    get showScrollBar(): boolean;
    set showScrollBar(value: boolean);
    get bounces(): boolean;
    set bounces(value: boolean);
    onDestoryed(): void;
    appendChild(subview: any): void;
    removeChild(subview: any): void;
    removeAll(): void;
    insertBefore(subview: any, existingView: View): void;
    protected defaultStyle(): void;
    refresh(): void;
    /**
     *  init nj-list-row
     */
    private refreshListView;
    private registerBsScrollEvent;
    addEventListener(key: 'scroll', listener: EventListener): void;
    removeEventListener(key: 'scroll', listener: EventListener): void;
    /**
     * @not support
     */
    onRegister: (position: number) => number;
    /**
     * 滚动到坐标
     */
    scrollTo(x: number, y: number): void;
    /**
     * 滚动一定距离
     */
    scrollBy(dx: number, dy: number): void;
    /**
     * 滚动到顶部
     */
    scrollToTop(): void;
    /**
     * 滚动到底部
     */
    scrollToBottom(): void;
    /**
     * 下拉刷新时触发的回调
     * 0(正常状态) 1(即将刷新) 2(正在刷新)
     */
    onRefresh: (state: 0 | 1 | 2 | 3) => void;
    /**
     * 下拉刷新时触发的回调
     * 0(正常状态) 1(正在刷新) 2(无数据)
     */
    onLoadMore: (state: 0 | 1 | 2) => void;
    /**
     * 滚动到顶部事件监听
     */
    setOnScrollToTopListener(callback: EventListener): void;
    /**
     * 滚动到底部事件监听
     */
    setOnScrollToBottomListener(callback: EventListener): void;
    /**
     * 更新滚动视图大小（iOS独有方法）
     */
    updateContentSize(): void;
    stopPullRefresh(): void;
    stopLoadMore(enable: boolean): void;
  }

  interface SwitchStyle extends ViewStyle {
    onColor?: string;
    offColor?: string;
    thumbColor?: string;
  }
  declare class Switch extends View {
    private switchBtn;
    private circle;
    private addChangeEvent;
    disabled: boolean;
    protected _style: SwitchStyle;
    constructor();
    protected createNode(): void;
    private bindEvents;
    addEventListener(key: 'switch', listener: SwitchEventListener): void;
    set checked(val: boolean);
    get checked(): boolean;
    get style(): SwitchStyle;
    set style(_style: SwitchStyle);
  }

  interface TextStyle extends ViewStyle {
    color?: string;
    textAlign?: 'left' | 'center' | 'right';
    textDecoration?: 'none' | 'underline' | 'line-through';
    textVerticalAlign?: 'top' | 'center' | 'bottom';
    fontFamily?: string;
    fontSize?: string | number;
    fontWeight?: 'normal' | 'bold';
    fontStyle?: 'normal' | 'italic';
    textOverflow?: 'clip' | 'ellipsis';
    textLineClamp?: number;
    letterSpacing?: number;
    lineSpacingMulti?: number;
  }
  declare class Text extends View {
    protected _style: TextStyle;
    constructor();
    protected defaultStyle(): void;
    protected createNode(): void;
    get style(): TextStyle;
    set style(_style: TextStyle);
    get text(): string;
    set text(value: string);
    get richText(): any;
    set richText(value: any);
    get formattedText(): string;
    set formattedText(value: string);
    private parseRichText;
  }

  interface TextAreaStyle extends InputStyle {
    textLineClamp?: number;
  }
  declare class TextArea extends Input {
    protected _style: TextAreaStyle;
    private changeHandler;
    constructor();
    get focused(): boolean;
    set focused(focused: boolean);
    protected defaultStyle(): void;
    protected createNode(): void;
    get style(): TextAreaStyle;
    set style(_style: TextAreaStyle);
    /**
    * 文本框根据输入内容自适应高度
    * @param                {HTMLElement}        输入框元素
    * @param                {Number}                设置光标与输入框保持的距离(默认0)
    * @param                {Number}                设置最大高度(可选)
    */
    autoTextarea(): void;
    removeAutoTextarea(): void;
    change(): void;
    getStyle(name: any): any;
  }

  interface ViewPagerStyle extends ViewStyle {
    width?: string | number;
    height?: string | number;
    itemSpacing?: number;
    edgeSpacing?: number;
    canLoop?: boolean;
    autoPlay?: boolean;
    loopInterval?: number;
    borderRadius?: string | number;
    scaleFactor?: number;
    alphaFactor?: number;
  }
  declare class ViewPager extends View {
    protected _style: ViewPagerStyle;
    _data: Array<any>;
    itemViews: Array<View>;
    itemViewsArray: Array<any>;
    listeners: {
        [key: string]: Array<any>;
    };
    private swiper;
    private observe;
    private wrapper;
    private activeProgress;
    private endProgress;
    private tween;
    private swipeDirection;
    constructor();
    init(): void;
    protected defaultStyle(): void;
    protected createNode(): void;
    get style(): ViewPagerStyle;
    set style(_style: ViewPagerStyle);
    get data(): Array<any>;
    set data(_data: Array<any>);
    onItemView(callback: any): void;
    onPageScroll(callback: any): void;
    onPageScrollStateChange(callback: any): void;
    onPageChange(callback: any): void;
    onItemClick(callback: any): void;
    setCurrentItem(position: number): void;
  }

  interface CanvasStyle extends ViewStyle {
  }
  declare class CanvasView extends View {
    protected _style: CanvasStyle;
    private ctx;
    private textFillStyle;
    private fillStyle;
    private resolution;
    constructor();
    protected createNode(): void;
    /**
    * 设置stroke的线粗细
    * @param widthValue 粗细值，支持px，hm 单位， 如果不写单位就是dp
    */
    lineWidth(widthValue: any): void;
    /**
     * 设置线头样式
     * @param value 0 : LineCapButt, ， 1:LineCapRound   2:LineCapSquare
     */
    lineCap(value: any): void;
    /**
     * 设置折线折点样式
     * @param value 0 : LineJoinMiter, ， 1: LineJoinRound  2:LineJoinBevel
     */
    lineJoin(value: any): void;
    /**
     * 设置stroke的线颜色
     * @param colorHex 色值
     */
    lineColor(colorHex: any): void;
    /**
     * 根据入参，在起始点与终点之间画一条线段
     * @param fromX 起点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param fromY 起点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param toX 终点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param toY 终点的y值，支持px，hm 单位， 如果不写单位就是dp
     */
    drawLine(fromX: any, fromY: any, toX: any, toY: any): void;
    /**
     * 画矩形
     * @param x 矩形左上角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 矩形左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param w 矩形宽，支持px，hm 单位， 如果不写单位就是dp
     * @param h 矩形高，支持px，hm 单位， 如果不写单位就是dp
     */
    strokeRect(x: any, y: any, w: any, h: any): void;
    /**
     * 画椭圆
     * @param x 椭圆所在矩形左上角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 椭圆所在矩形左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param trailX 椭圆所在矩形右下角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param trailY 椭圆所在矩形右下角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     */
    strokeEllipse(x: any, y: any, trailX: any, trailY: any): void;
    /**
     * 画圆形
     * @param x 圆心坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 圆心坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param radius 半径 ， 支持px，hm 单位， 如果不写单位就是dp
     */
    strokeCircle(x: any, y: any, radius: any): void;
    /**
     * 画弧形
     * @param x 圆心坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 圆心坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param raduis 半径 ， 支持px，hm 单位， 如果不写单位就是dp
     * @param startAngle 起始弧度 ，
     * @param endAngle 结束弧度 ，
     * @param clockwise ture 顺时针 ， false 逆时针
     */
    arc(x: any, y: any, radius: any, startAngle: any, endAngle: any, clockwise: any): void;
    /**
     * 设置填充颜色
     * @param colorHex 颜色16进制
     */
    fillColor(colorHex: any): void;
    /**
     * 填充矩形
     * @param x 矩形左上角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 矩形左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param w 矩形宽，支持px，hm 单位， 如果不写单位就是dp
     * @param h 矩形高，支持px，hm 单位， 如果不写单位就是dp
     */
    fillRect(x: any, y: any, w: any, h: any): void;
    /**
     * 填充椭圆
     * @param x 椭圆所在矩形左上角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 椭圆所在矩形左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param trailX 椭圆所在矩形右下角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param trailY 椭圆所在矩形右下角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     */
    fillEllipse(x: any, y: any, trailX: any, trailY: any): void;
    /**
     * 填充圆形
     * @param x 圆心坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 圆心坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param raduis 半径 ， 支持px，hm 单位， 如果不写单位就是dp
     */
    fillCircle(x: any, y: any, radius: any): void;
    /**
     * 设置绘制文本字号
     * @param size 字号大小
     */
    fontSize(size: any): void;
    /**
     * 设置绘制文本颜色
     * @param colorHex 字号色值
     */
    textColor(colorHex: any): void;
    /**
     * 绘制文字
     * @param text 文案
     * @param x 文本左上角坐标x值 , 支持px，hm 单位， 如果不写单位就是dp
     * @param y 文本左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param maxWidth 文本换行的最大宽度, 0 代表不换行,支持px，hm 单位， 如果不写单位就是dp
     */
    fillText(text: any, x: any, y: any, maxWidth: any): void;
    /**
     * 绘制图片
     * @param src 图片资源链接,远程url或本地图片名
     * @param x 图片左上角坐标x值 , 支持px，hm 单位， 如果不写单位就是dp
     * @param y 图片左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param width 图片宽 ,支持px，hm 单位， 如果不写单位就是dp
     * @param height 图片高 ,支持px，hm 单位， 如果不写单位就是dp
     */
    drawImage(src: any, x: any, y: any, width: any, height: any): void;
  }
}

export { BasicAnimation, Button, ButtonStyle, CanvasStyle, CanvasView, Carousel, CarouselStyle, Dialog, EasingType, Environment, Event, EventListener, EventType, HorizontalScroller, INPUT_SIZE_STYLE, Image, ImagePicker, ImageStyle, Input, InputEvent, InputState, InputStyle, KeyPath, KeyframeAnimation, List, ListStyle, Location, LongPressEvent, LongPressState, Memory, NativeJS, NativeJSGlobal, Navigator, NotifyCenter, NotifyListener, PanEvent, PanState, Phone, PinchEvent, PinchState, PointValue, Request, Response, SIZE_STYLE, ScrollEvent, ScrollState, Scroller, Storage, SwipeEvent, SwipeState, Switch, SwitchEvent, SwitchEventListener, SwitchStyle, TapEvent, TapState, Text, TextArea, TextAreaStyle, TextStyle, Timer, Toast, TouchEvent, TouchState, ValueType, View, ViewPager, ViewPagerStyle, ViewStyle, WebSocket };
