import type { Ref } from 'vue';
import type { ICreateItem } from '@/interface/create/ICreateItem';
import { getFromStorage, setToStorage, removeFromStorage } from '@features/storage';
import { getCreateTaskJson } from '@features/create/getCreateTaskJson';
import { getCreateTaskJsonToRef } from '@features/create/getCreateTaskJsonToRef';
import {map} from 'yaml/dist/schema/common/map';

interface IUseCreate {
    readonly fields: Ref<ICreateItem[]>
	readonly addField: () => void
	readonly saveFields: () => void
	readonly resetFields: () => void
}

export const createCreateStore = (): IUseCreate => {
	const fields = ref<ICreateItem[]>([]);

	onMounted(() => {
		const fieldsFromStorage = ref<string | null>(getFromStorage('createTask'));

		if (unref(fieldsFromStorage)) {
			fields.value = getCreateTaskJsonToRef(unref(fieldsFromStorage)!);
		} else {
			fields.value = [{
				id: 1,
				typeValue: ref('dont-selected'),
				textValue: ref(''),
				missedValue: ref(''),
				validatorValue: ref(''),
				placeholderValue: ref(''),
			}];
		}
	});

	const addField = (): void => {
		unref(fields).push({
			id: unref(fields).length + 1,
			typeValue: ref('dont-selected'),
			textValue: ref(''),
			missedValue: ref(''),
			validatorValue: ref(''),
			placeholderValue: ref(''),
		});
	};

	const saveFields = (): void => {
		const fieldsObj = unref(fields).map((item, index) => getCreateTaskJson(item, index));
		setToStorage('createTask', JSON.stringify(fieldsObj));
	};

	const resetFields = (): void => {
		removeFromStorage('createTask');
		fields.value = [{
			id: 1,
			typeValue: ref('dont-selected'),
			textValue: ref(''),
			missedValue: ref(''),
			validatorValue: ref(''),
			placeholderValue: ref(''),
		}];
	};

	return {
		fields,
		addField,
		saveFields,
		resetFields,
	};
};

export const useCreateProvide = (): void => provide('CREATE_STORE', createCreateStore());
export const useCreateInject = (): IUseCreate => inject<ReturnType<typeof createCreateStore>>('CREATE_STORE')!;
