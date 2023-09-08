import { Column } from "App/Dtos/Column";
import { Leiaute } from "App/Dtos/Leiaute";

export function extractColumns(data: Partial<Leiaute>) {
  return data.entities
    ?.flatMap((entity) =>
      entity.columns?.filter((column) => column.type !== "array")
    )
    .filter(
      (item, index, self) =>
        self.findIndex((o) => o?.prefix === item?.prefix) === index
    ) as Column[];
}
