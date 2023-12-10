import { createEnTaskItem, type IEnTaskItem } from '@features/createEnTaskItem';
import { expectedValueValidator } from '@/helpers/validator/expectedValueValidator';
import type { Ref } from 'vue';
import { getFromStorage } from '@features/storage';
import { getCreateJsonStringToArray } from '@features/create/getCreateJsonStringToArray';

interface IUseEnTask {
	data: Ref<IEnTaskItem[]>
	validateTask: () => {isValid: boolean}
	isValidExpectedTask: Ref<boolean | undefined>
	checkResultText: Ref<string>
	isShowCheckResult: Ref<boolean>
}

export const useEnTask = (): IUseEnTask => {
	const isValidExpectedTask = ref<boolean | undefined>(undefined);
	const checkResultText = ref('');
	const isShowCheckResult = ref(false);

	const fieldsFromStorage = ref<string | null>();
	const data = shallowRef<IEnTaskItem[]>([]);

	onMounted(() => {
		fieldsFromStorage.value = getFromStorage('createTask');

		data.value = getCreateJsonStringToArray(unref(fieldsFromStorage)!)
			.map((item) => createEnTaskItem('', item))
			.sort((a, b) => a.order - b.order);
	});

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const validateTask = () => {
		const isValid = unref(data)
			.filter((item) => item.type === 'field')
			.reduce((_, field) => expectedValueValidator(field), true);

		isValidExpectedTask.value = unref(isValid);

		checkResultText.value = unref(isValidExpectedTask) ? 'ok' : 'dont ok';
		isShowCheckResult.value = true;

		return {
			isValid,
		};
	};

	return {
		data,
		validateTask,
		isValidExpectedTask,
		checkResultText,
		isShowCheckResult,
	};
};
