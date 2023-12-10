import type { ITestDataEmptyText, ITestDataText } from '@/interface/testData/ITestData';

// eslint-disable-next-line vue/max-len
export const getCreateJsonStringToArray = (jsonString: string): (ITestDataText | ITestDataEmptyText)[] => JSON.parse(jsonString).map((item: (ITestDataText | ITestDataEmptyText)) => item);
