/**
 * Type definitions for index.js
 * 
 * Project: https://github.com/devindia/TextWrapper
 * 
 * Definitions by: Debasish Roy, https://github.com/devindia
 * 
 */

declare namespace AngularTextWrapper {
    function seeMore(id1: any, id2: any): void;
    function seeLess(id1: any, id2: any): void;
    function letterLimit(text: any, no: any): void;
}

declare global {
    const seeMore: typeof AngularTextWrapper.seeMore;
    const seeLess: typeof AngularTextWrapper.seeLess;
    const letterLimit: typeof AngularTextWrapper.letterLimit;
    interface Window {
        seeMore: typeof AngularTextWrapper.seeMore;
        seeLess: typeof AngularTextWrapper.seeLess;
        letterLimit: typeof AngularTextWrapper.letterLimit;
    }
}

export = AngularTextWrapper;
