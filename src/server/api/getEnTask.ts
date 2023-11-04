import { ref } from 'vue';

const Notion = {
	database_id: '398f9ad7db2a491295cdb17036968e6b',
	secret: 'secret_WokR1hiQnwFlScLBVGbjTTF4TN5nau6rajO5phRpIof',
};

const dataX = ref<any>();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getTask = async () => {
	const databaseId = Notion.database_id;
	const notionApiKey = Notion.secret;

	try {
		dataX.value = await $fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
			method: 'POST',
			body: JSON.stringify({
				filter: {
					property: 'task_id',
					number: {
						equals: 1,
					},
				},
			}),
			headers: {
				Authorization: `Bearer ${notionApiKey}`,
				'Notion-Version': '2022-02-22',
				'Content-Type': 'application/json',
			},
		});

		console.log(unref(dataX));
	} catch (error) {
		console.error(error);
	}
	console.log('ok');
};
