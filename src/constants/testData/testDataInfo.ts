import type { ITestDataInfo } from '@/interface/testData/ITestData';

export const testDataInfo: ITestDataInfo = {
	id: 1,
	docs: [
		{
			order: 1,
			type: 'text',
			text: 'My ',
		},
		{
			order: 2,
			type: 'field',
			placeholder: '...',
			validator: ['name'],
		},
		{
			order: 3,
			type: 'text',
			text: ' Vitya and I ',
		},
		{
			order: 4,
			type: 'field',
			placeholder: '...',
			validator: ['am'],
		},
		{
			order: 5,
			type: 'text',
			text: ' astronaut!',
		},
	],
};
