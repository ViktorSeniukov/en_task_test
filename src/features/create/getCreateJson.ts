import type { ICreateItem } from '@/interface/create/ICreateItem';
import { EnTaskItemTypeConst } from '@features/EnTaskItemType';

export const getCreateTaskJson = (value: ICreateItem[]) => {
	const valueWithoutRef = value.map((item) => {
		if (unref(item.typeValue) === EnTaskItemTypeConst.FIELD) {
			return {
				id: item.id,
				type: unref(item.typeValue),
				missed: unref(item.missedValue),
				validator: unref(item.validatorValue),
				placeholder: unref(item.placeholderValue),
			};
		}

		return {
			id: item.id,
			type: unref(item.typeValue),
			text: unref(item.textValue),
		};
	});

	return valueWithoutRef;
};
