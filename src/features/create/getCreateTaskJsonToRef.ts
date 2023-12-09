import type { ICreateItem } from '@/interface/create/ICreateItem';

export const getCreateTaskJsonToRef = (fieldsStr: string): ICreateItem[] => {
	const json = JSON.parse(fieldsStr);
	const newArrFields: ICreateItem[] = [];

	// @ts-ignore
	json.forEach((item) => newArrFields.push({
		id: item.id,
		typeValue: item.type,
		textValue: item.text || '',
		missedValue: item.missed || '',
		validatorValue: item.validator || '',
		placeholderValue: item.placeholder || '',
	}));

	return newArrFields;
};
