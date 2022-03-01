import {Observable} from 'rxjs';

interface TuiNativeElement extends Element, HTMLOrSVGElement {}

export type TuiNativeFocusableElement = TuiNativeElement & HTMLElement;

/**
 * Public interface for any focusable component or directive
 */
export interface TuiFocusableElementAccessor {
    nativeFocusableElement: TuiNativeFocusableElement | null;
    focused: boolean;
    readonly focusedChange: Observable<boolean>;
}
