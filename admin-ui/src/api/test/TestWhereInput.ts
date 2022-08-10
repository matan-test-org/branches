import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TestWhereInput = {
  field1?: StringNullableFilter;
  field2?: StringNullableFilter;
  id?: StringFilter;
};
