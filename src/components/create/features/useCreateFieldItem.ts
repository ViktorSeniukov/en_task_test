export const useCreateFieldItem = ({ type }: {type: string}) => {
	const defaultOptions = [
		{
			id: 1,
			value: 'dont-selected',
			caption: 'Dont selected',
		},
		{
			id: 2,
			value: 'text',
			caption: 'Text',
		},
		{
			id: 3,
			value: 'field',
			caption: 'Field',
		},
	];

	const isSelectType = ref(type !== 'dont-selected');
	const selectType = ref(type || 'dont-selected');
	// eslint-disable-next-line no-return-assign
	const onChangeType = (changeType: string): void => {
		selectType.value = changeType;
		isSelectType.value = (unref(selectType) !== 'dont-selected');
	};

	const isFieldType = computed(() => unref(isSelectType) && unref(selectType) === 'field');
	const isTextType = computed(() => unref(isSelectType) && unref(selectType) === 'text');

	return {
		defaultOptions,
		isSelectType,
		onChangeType,
		isFieldType,
		isTextType,
	};
};
