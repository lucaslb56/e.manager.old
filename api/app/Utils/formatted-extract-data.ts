import { EntityExtract } from "App/Dtos/Extract";

export function formattedExtractData(
  data: EntityExtract[],
  _id: string,
  template_id: string
) {
  return data.map((entity) => {
    const props = entity.values.reduce((acc, cur) => {
      acc[cur.prefix.toLowerCase()] = cur.value;
      return acc;
    }, {});

    const obj = {
      ...props,
      _id,
      template_id,
    };

    console.log({ obj });

    return obj;
  });
}
