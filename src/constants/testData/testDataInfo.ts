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
			validator: ['name is '],
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
			text: ' astronaut! ',
		},
		{
			order: 6,
			type: 'text',
			text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of ',
		},
		{
			order: 7,
			type: 'field',
			placeholder: '...',
			validator: ['Lorem'],
		},
		{
			order: 8,
			type: 'text',
			text: ' Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
		},
	],
};
