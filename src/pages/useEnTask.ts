import { testDataInfo } from '@constants/testData/testDataInfo';
import { createEnTaskItem } from '@features/createEnTaskItem';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useEnTask = () => {
	const data = computed(() => testDataInfo.docs
		.map((item) => createEnTaskItem('', item))
		.sort((a, b) => a.order - b.order));

	return {
		data,
	};
};
