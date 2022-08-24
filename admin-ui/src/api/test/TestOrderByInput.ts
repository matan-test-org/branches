import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  createdAt?: SortOrder;
  field1?: SortOrder;
  field2?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
