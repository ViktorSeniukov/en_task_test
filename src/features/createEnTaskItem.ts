// eslint-disable-next-line import/extensions
import type { ITestDataEmptyText, ITestDataText } from '@/interface/testData/ITestData';
import type { Component, Ref } from 'vue';
import type { EnTaskItemType } from '@features/EnTaskItemType';
import TaskText from '@/components/taskText/TaskText.vue';
import UiFieldInline from '@/components/ui_components/UiField/UiFieldInline.vue';

/**
 * Represents a task item in the IEnTaskItem interface.
 *
 * @typedef {Object} IEnTaskItem
 * @property {EnTaskItemType} type - The type of the task item.
 * @property {number} order - The order of the task item.
 * @property {string|Component} component - The component associated with the task item.
 * @property {string} [text] - The text associated with the task item (optional).
 * @property {Ref<string>} value - The value associated with the task item.
 * @property {string[]} [validator] - The validator functions associated with the task item (optional).
 * @property {string} [placeholder] - The placeholder text associated with the task item (optional).
 * @property {Ref<number|undefined>} [length] - The length of the task item (optional).
 */
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

/**
 * Extracts and returns a component based on the given type of EnTaskItemType.
 *
 * @param {EnTaskItemType} type - The type of EnTaskItemType.
 * @returns {string | Component} - The extracted component based on the type.
 * @throws {Error} - Throws an error if the component switch error occurs.
 */
const extractComponent = (type: EnTaskItemType): string | Component => {
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

/**
 * Calculates the length of the longest string in the validator array plus 2.
 * @param {string[]} validator - The array of strings to calculate the length from.
 * @returns {number | undefined} - The length of the longest string plus 2, or undefined if no validator is provided or it is not an array.
 */
const getValidatorLength = (validator: string[]): number | undefined => {
	if (validator && Array.isArray(validator)) {
		return validator.length > 1
			? validator.sort((a, b) => b.length - a.length)[0].length + 2
			: validator[0].length + 2;
	}
	return undefined;
};

/**
 * Creates an EnTask item with the given item value and item data.
 *
 * @param {string} itemValue - The value of the item.
 * @param {(ITestDataText | ITestDataEmptyText)} item - The item data.
 * @returns {IEnTaskItem} - The created EnTask item.
 */
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
	const length = ref<number | undefined>(getValidatorLength(validator));
	const component = extractComponent(type);

	return {
		type,
		order,
		component,
		value: ref<string>(itemValue),
		text,
		validator,
		placeholder,
		length,
	};
};
