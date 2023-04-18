import { AxiosResponse } from 'axios';

export interface O {
    a: number;
    k: any;
    ix: number;
}

export interface I {
    x: number[];
    y: number[];
}

export interface O2 {
    x: number[];
    y: number[];
}

export interface K {
    i: I;
    o: O2;
    t: number;
    s: number[];
}

export interface R {
    a: number;
    k: K[];
    ix: number;
}

export interface P {
    a: number;
    k: number[];
    ix: number;
}

export interface A {
    a: number;
    k: number[];
    ix: number;
}

export interface S {
    a: number;
    k: number[];
    ix: number;
}

export interface Ks {
    o: O;
    r: R;
    p: P;
    a: A;
    s: S;
}

export interface K2 {
    i: number[][];
    o: number[][];
    v: number[][];
    c: boolean;
}

export interface Ks2 {
    a: number;
    k: K2;
    ix: number;
}

export interface S2 {
    a: number;
    k: any[];
    ix: number;
}

export interface I2 {
    x: number[];
    y: number[];
}

export interface O3 {
    x: number[];
    y: number[];
}

export interface K3 {
    i: I2;
    o: O3;
    t: number;
    s: number[];
}

export interface E {
    a: number;
    k: K3[];
    ix: number;
}

export interface O4 {
    a: number;
    k: number;
    ix: number;
}

export interface C {
    a: number;
    k: number[];
    ix: number;
}

export interface W {
    a: number;
    k: number;
    ix: number;
}

export interface P2 {
    a: number;
    k: number[];
    ix: number;
}

export interface A2 {
    a: number;
    k: number[];
    ix: number;
}

export interface R2 {
    a: number;
    k: number;
    ix: number;
}

export interface Sk {
    a: number;
    k: number;
    ix: number;
}

export interface Sa {
    a: number;
    k: number;
    ix: number;
}

export interface It {
    ind: number;
    ty: string;
    ix: number;
    ks: Ks2;
    nm: string;
    mn: string;
    hd: boolean;
    s: S2;
    e: E;
    o: O4;
    m?: number;
    c: C;
    w: W;
    lc?: number;
    lj?: number;
    ml?: number;
    bm?: number;
    p: P2;
    a: A2;
    r: R2;
    sk: Sk;
    sa: Sa;
}

export interface Shape {
    ty: string;
    it: It[];
    nm: string;
    np: number;
    cix: number;
    bm: number;
    ix: number;
    mn: string;
    hd: boolean;
}

export interface Layer {
    ddd: number;
    ind: number;
    ty: number;
    nm: string;
    sr: number;
    ks: Ks;
    ao: number;
    shapes: Shape[];
    ip: number;
    op: number;
    st: number;
    bm: number;
}

export interface Lottie {
    v: string;
    fr: number;
    ip: number;
    op: number;
    w: number;
    h: number;
    nm: string;
    ddd: number;
    assets: any[];
    layers: Layer[];
    markers: any[];
}

export interface SplashModel {
    _id: string;
    lottie: Lottie;
}

export type SplashModelResponse = AxiosResponse<{
    documents: SplashModel[];
}>;
