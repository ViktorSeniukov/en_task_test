import type { EnTaskItemType } from '@features/EnTaskItemType';
import type { Ref } from 'vue';

export interface ICreateItem {
    id: number
    typeValue: Ref<EnTaskItemType | string>
    textValue: Ref<string>
    missedValue: Ref<string>
    validatorValue: Ref<string>
    placeholderValue: Ref<string>
}
