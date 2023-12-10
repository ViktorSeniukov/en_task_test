import type { ICreateItem } from '@/interface/create/ICreateItem';
import { EnTaskItemTypeConst } from '@features/EnTaskItemType';

/**
 * Converts a createItem object to a JSON representation of a task.
 *
 * @param {ICreateItem} createItem - The createItem object to convert.
 * @param {number} index - The index of the createItem in the list.
 * @returns {Object} The JSON representation of the task.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getCreateTaskJson = (createItem: ICreateItem, index: number) => {
	if (unref(createItem.typeValue) === EnTaskItemTypeConst.FIELD) {
		return {
			id: createItem.id,
			order: index + 1,
			type: unref(createItem.typeValue),
			missed: unref(createItem.missedValue),
			validator: unref(createItem.validatorValue).split(', '),
			placeholder: unref(createItem.placeholderValue),
		};
	} if ((unref(createItem.typeValue) === EnTaskItemTypeConst.TEXT)) {
		return {
			id: createItem.id,
			order: index + 1,
			type: unref(createItem.typeValue),
			text: unref(createItem.textValue),
		};
	}
};
