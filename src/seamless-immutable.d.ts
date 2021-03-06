declare module 'seamless-immutable' {

  type Immutable = {
    (obj:any, options?:any):any;
    isImmutable(target:any):boolean;
    ImmutableError(message:string):Error;
  }

  var Immutable:Immutable;
  export = Immutable;

}