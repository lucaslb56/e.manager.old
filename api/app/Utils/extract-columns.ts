import { Column } from "App/Dtos/Column";
import { Template } from "App/Dtos/Template";

export function extractColumns(data: Partial<Template>) {
  return data.entities
    ?.flatMap((entity) =>
      entity.columns?.filter((column) => column.type !== "array")
    )
    .filter(
      (item, index, self) =>
        self.findIndex((o) => o?.prefix === item?.prefix) === index
    ) as Column[];
}
