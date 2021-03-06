function simpleFunc() {
    return "this is my simple func";
}
var simpleFuncVar = simpleFunc;

function anotherFuncNoReturn() {
}
var anotherFuncNoReturnVar = anotherFuncNoReturn;

function withReturn() : string{
    return "Hello";
}
var withReturnVar = withReturn;

function withParams(a : string) : string{
    return a;
}
var withparamsVar = withParams;

function withMultiParams(a : number, b, c: Object) {
    return a;
}
var withMultiParamsVar = withMultiParams;

function withOptionalParams(a?: string) {
}
var withOptionalParamsVar = withOptionalParams;

function withInitializedParams(a: string, b0, b = 30, c = "string value") {
}
var withInitializedParamsVar = withInitializedParams;

function withOptionalInitializedParams(a: string, c? : string = "hello string") {
}
var withOptionalInitializedParamsVar = withOptionalInitializedParams;

function withRestParams(a: string, ... myRestParameter : number[]) {
    return myRestParameter;
}
var withRestParamsVar = withRestParams;

function overload1(n: number) : string;
function overload1(s: string) : string;
function overload1(ns: any) {
    return ns.toString();
}
var withOverloadSignature = overload1;

