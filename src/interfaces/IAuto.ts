export interface IParam {
    id: number,
    length1: string,
    length2: string,
    length3: string,
    fasten?: string,
    parent_id: number
}

export interface IModif {
    id: number,
    name: string,
    link: string,
    parent_id: number
}

export interface IModel {
    id: number,
    name: string,
    link: string,
    parent_id: number
}

export interface IAuto {
    id: number,
    name: string,
    link: string
}