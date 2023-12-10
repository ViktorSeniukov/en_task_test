import type { EnTaskItemType } from '@features/EnTaskItemType';

export interface ITestDataText {
    id: number
    order: number
    type: EnTaskItemType
    text: string
    options?: string
}

export interface ITestDataEmptyText {
    id: number
    order: number
    type: EnTaskItemType
    missed: string
    placeholder: string
    validator: string[]
    options?: string
}

export interface ITestDataInfo {
    id: number
    docs: (ITestDataText | ITestDataEmptyText)[]
}
