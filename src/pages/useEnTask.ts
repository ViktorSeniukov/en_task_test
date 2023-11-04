import { testDataInfo } from '@constants/testData/testDataInfo';
import { createEnTaskItem } from '@features/createEnTaskItem';
import { expectedValueValidator } from '@/helpers/validator/expectedValueValidator';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useEnTask = () => {
	const isValidExpectedTask = ref<boolean | undefined>(undefined);
	const data = computed(() => testDataInfo.docs
		.map((item) => createEnTaskItem('', item))
		.sort((a, b) => a.order - b.order));

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const isValidTask = () => {
		const isValid = unref(data)
			.filter((item) => item.type === 'field')
			.reduce((_, field) => expectedValueValidator(field), true);

		isValidExpectedTask.value = unref(isValid);

		if (unref(isValidExpectedTask)) console.log('ok');
		if (!unref(isValidExpectedTask)) console.log('ne ok');
		return {
			isValid,
		};
	};
	return {
		data,
		isValidTask,
		isValidExpectedTask,
	};
};
