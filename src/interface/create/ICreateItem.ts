import type { EnTaskItemType } from '@features/EnTaskItemType';
import type { Ref } from 'vue';

export interface ICreateItem {
    id: number
    typeValue: Ref<EnTaskItemType>
    textValue: Ref<string>
}
