interface ISystem {
    import<T = any>(module: string): Promise<T>
}
declare const System: ISystem;