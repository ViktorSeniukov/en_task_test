import type { ICreateItem } from '@/interface/create/ICreateItem';
import { EnTaskItemTypeConst } from '@features/EnTaskItemType';

export const getCreateTaskJson = (value: ICreateItem[]) => {
	const valueWithoutRef = value.map((item, index) => {
		if (unref(item.typeValue) === EnTaskItemTypeConst.FIELD) {
			return {
				id: item.id,
				order: index + 1,
				type: unref(item.typeValue),
				missed: unref(item.missedValue),
				validator: unref(item.validatorValue).split(', '),
				placeholder: unref(item.placeholderValue),
			};
		}

		return {
			id: item.id,
			order: index + 1,
			type: unref(item.typeValue),
			text: unref(item.textValue),
		};
	});

	return valueWithoutRef;
};
