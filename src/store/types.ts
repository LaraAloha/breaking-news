import { type } from "os"

export type Config = {
    limits: any
    defaultValues: DefaultValues
    uiText: any
}

export type DefaultValues = {
    googleAccesKey: string
    sid: string
    searchRequest: string
}