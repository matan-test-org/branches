import { Test as TTest } from "../api/test/Test";

export const TEST_TITLE_FIELD = "field1";

export const TestTitle = (record: TTest): string => {
  return record.field1 || record.id;
};
