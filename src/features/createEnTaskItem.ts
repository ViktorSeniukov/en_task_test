import type { ITestDataEmptyText, ITestDataText } from '@/interface/testData/ITestData';
import type { Component, Ref } from 'vue';
import type { EnTaskItemType } from '@features/EnTaskItemType';
import UiFieldInline from '@/components/ui_components/UiFieldInline/UiFieldInline.vue';
import TaskText from '@/components/TaskText/TaskText.vue';

export interface IEnTaskItem {
    type: EnTaskItemType
    order: number
	component: string | Component
	text?: string
    value: Ref<string>
	validator?: string[]
    placeholder?: string
	length?: Ref<number | undefined>
}

export const createEnTaskItem = (itemValue: string, item: (ITestDataText | ITestDataEmptyText)): IEnTaskItem => {
	const {
		type,
		order,
		// @ts-ignore
		text,
		// @ts-ignore
		validator,
		// @ts-ignore
		placeholder,
	} = item;

	const value = ref<string>(itemValue);
	const length = ref<number>();

	const component = (): string | Component => {
		switch (type) {
		case 'field':
			return UiFieldInline;
		case 'text':
			return TaskText;
		default:
			console.error('ERROR: component switch error');
			return 'lol';
		}
	};

	if (validator && Array.isArray(validator)) {
		length.value = validator.length > 1
			? validator.sort((a, b) => a.length - b.length)[0].length + 2
			: validator[0].length + 2;
	}

	return {
		type,
		order,
		component: component(),
		value,
		text,
		validator,
		placeholder,
		length,
	};
};
