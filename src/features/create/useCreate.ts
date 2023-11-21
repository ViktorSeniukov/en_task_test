import type { Ref } from 'vue';
import type { ICreateItem } from '@/interface/create/ICreateItem';

interface IUseCreate {
    readonly fields: Ref<ICreateItem[]>
}

export const useCreate = ():IUseCreate => {
	const fields = ref<ICreateItem[]>([
		{
			id: 1,
			typeValue: ref('text'),
			textValue: ref(''),
		},
		// {
		// 	id: 2,
		// 	typeValue: ref('text'),
		// 	textValue: ref(''),
		// },
	]);

	return {
		fields,
	};
};
