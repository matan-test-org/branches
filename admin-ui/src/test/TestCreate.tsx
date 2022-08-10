import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="field1" source="field1" />
        <TextInput label="field2" source="field2" />
      </SimpleForm>
    </Create>
  );
};
