/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EthioDatePicker {
    }
}
declare global {
    interface HTMLEthioDatePickerElement extends Components.EthioDatePicker, HTMLStencilElement {
    }
    var HTMLEthioDatePickerElement: {
        prototype: HTMLEthioDatePickerElement;
        new (): HTMLEthioDatePickerElement;
    };
    interface HTMLElementTagNameMap {
        "ethio-date-picker": HTMLEthioDatePickerElement;
    }
}
declare namespace LocalJSX {
    interface EthioDatePicker {
    }
    interface IntrinsicElements {
        "ethio-date-picker": EthioDatePicker;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ethio-date-picker": LocalJSX.EthioDatePicker & JSXBase.HTMLAttributes<HTMLEthioDatePickerElement>;
        }
    }
}