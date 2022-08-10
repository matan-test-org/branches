import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TestWhereInput = {
  field1?: StringNullableFilter;
  id?: StringFilter;
};
