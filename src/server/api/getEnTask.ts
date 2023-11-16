import { ref } from 'vue';

// const Notion = {
// 	database_id: '398f9ad7db2a491295cdb17036968e6b',
// 	secret: 'secret_WokR1hiQnwFlScLBVGbjTTF4TN5nau6rajO5phRpIof',
// };

const dataX = ref<any>();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getTask = async (): Promise<any> => {
	try {
		dataX.value = await $fetch('http://localhost:1234/', {
			method: 'GET',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		console.error(error);
	}
};
