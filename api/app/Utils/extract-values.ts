import { Collumn } from "App/Dtos/Collumn";
import { Entity } from "App/Dtos/Entity";
import { EntityExtract } from "App/Dtos/Extract";

export function extractValues(
  json: Record<string, any>,
  prefix = ""
): EntityExtract[] {
  const output: Entity[] = [];

  function mapProperties(obj: Record<string, any>, parentPrefix: string) {
    for (const key in obj) {
      const value = obj[key];

      if (typeof value === "object" && !Array.isArray(value)) {
        const newNode = {
          name: key,
          prefix: key,
          parent: parentPrefix === "" ? null : parentPrefix,
          type: "object",
          active: true,
          collumns: [],
        } as unknown as Entity;

        output.push(newNode);

        mapProperties(value, key);
      } else if (Array.isArray(value)) {
        if (value.length > 0 && typeof value[0] === "object") {
          for (let i = 0; i < value.length; i++) {
            const arrayNode = {
              name: `${key}_${i}`,
              prefix: `${key}_${i}`,
              parent: parentPrefix === "" ? null : parentPrefix,
              type: "array",
              active: true,
              collumns: [],
            } as unknown as Entity;

            output.push(arrayNode);

            mapProperties(value[i], `${key}_${i}`);
          }
        }
      } else {
        const newNode = {
          name: key,
          prefix: key,
          active: true,
          type: typeof value,
          value: value,
        } as unknown as Collumn;

        const parentNode = output.find((node) => node.name === parentPrefix);
        if (parentNode) {
          parentNode.collumns?.push(newNode);
        }
      }
    }
  }

  mapProperties(json, prefix);

  return output
    .filter((item) => (item?.collumns as Collumn[])?.length > 0)
    .map(({ prefix, collumns }) => ({
      prefix: prefix?.split("_")?.[0],
      values: collumns?.map(({ prefix, value }) => ({
        prefix,
        value,
      })),
    })) as EntityExtract[];
}
