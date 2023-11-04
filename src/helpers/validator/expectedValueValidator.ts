import type { IEnTaskItem } from '@features/createEnTaskItem';

export const expectedValueValidator = (field: IEnTaskItem): boolean => field.validator!.includes(unref(field.value));
