export enum Position {
  FIXED = 'fixed', 
  ABSOLUTE = 'absolute',
  RELATIVE = 'relative',
  STICKY = 'sticky', 
  STATIC = 'static'
}
export interface ewMessageUtils {
  removeNode: (item: HTMLElement) => void;
  hasClass: (v: string, el: HTMLElement) => boolean;
  create: (v: string) => HTMLElement;
  isArray: <T>(v: T) => boolean | undefined;
  isRemoveNode: (item: HTMLElement) => boolean;
  isFunction: <T>(v: T) => boolean;
  isDom: <T>(v: T) => boolean;
  isObject: <T>(v: T) => boolean;
  isString: <T>(v: T) => boolean;
  isNumber: <T>(v: T) => boolean;
  warn: (v: string) => void;
  hasOwn: <T extends object>(v: T, p: string) => boolean;
  toArray: <T>(v: ArrayLike<T>) => Array<T>;
  $$: (v: string, el?: Element | Document) => NodeListOf<Element>;
  $: (v: string, el?: Element | Document) => Element | null;
  createElement: (v: string) => HTMLElement;
  on: (
    element: HTMLElement | Document | Element | Window,
    type: string,
    handler: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ) => void;
  off: (
    element: HTMLElement | Document | Element | Window,
    type: string,
    handler: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ) => void;
  addClass: (v: string, el: HTMLElement) => void;
  removeClass: (v: string, el: HTMLElement) => void;
}
export enum ewMessageEnumType {
  success = "success",
  info = "info",
  warning = "warning",
  error = "error",
}
export type ewMessageType = {
  [prop in ewMessageEnumType]: string;
};
export interface ewMessageOption {
  content: string;
  center?: boolean;
  type?: string;
  duration?: number;
  showClose?: boolean;
  stylePrefix?: string;
  maxDuration?: number;
  showTypeIcon?: boolean;
  typeIcon?: string;
  closeIcon?: string;
  container?: string | HTMLElement;
  immediate?: boolean;
  removeClassName?: string;
  startClassName?: string;
  startClassNameSymbol?: string;
  removeClassNameSymbol?: string;
  messageZIndex?: number;
  top?: number | string;
  position?: Position;
}
export type AnyObj<T extends unknown> = Record<string, T>;
export interface ewMessageStyleRefType extends AnyObj {
  insertAt?: string;
}
