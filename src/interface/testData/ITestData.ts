import type { EnTaskItemType } from '@features/EnTaskItemType';

export interface ITestDataText {
    order: number
    type: EnTaskItemType
    text: string
    options?: string
}

export interface ITestDataEmptyText {
    order: number
    type: EnTaskItemType
    placeholder: string
    validator: string[]
    options?: string
}

export interface ITestDataInfo {
    id: number
    docs: (ITestDataText | ITestDataEmptyText)[]
}
