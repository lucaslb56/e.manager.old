import { Leiaute, LeiauteExtractType, ListLeiauteData } from "App/Dtos/Leiaute";

export function getESocialEvent(file: string): string {
  const e_social_tag_regex = /<eSocial\s+xmlns=".*?\/evt\/(.*?)\//;

  const e_social_tag_match = file.match(e_social_tag_regex);

  if (!e_social_tag_match) throw new Error("Arquivo XML não é um e-social.");

  return e_social_tag_match[1];
}

export function getESocialId(file: string, e_social_event: string): string {
  const e_social_event_regex = new RegExp(
    `<${e_social_event}\\s+Id="(.*?)"`,
    "s"
  );

  const e_social_event_match = file.match(e_social_event_regex);

  if (!e_social_event_match) throw new Error("Evento não encontrado.");

  return e_social_event_match[1];
}

export function extractXML(
  tags: LeiauteExtractType,
  file: string
): ListLeiauteData {
  const entries = Object.entries(tags);

  const data = entries.reduce((acc, [tag, keys]) => {
    const regex_tag = new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`, "gs");
    const result = file.match(regex_tag);

    if (result && result?.length) {
      result.forEach((res) => {
        const filtered_keys = keys.filter((key) => res.includes(key.name));

        const a = filtered_keys.reduce((ini, filtered) => {
          const filtered_regex = new RegExp(
            `<${filtered.name}[^>]*>(.*?)<\/${filtered.name}>`,
            "gs"
          );

          const filtered_match = res.match(filtered_regex) as RegExpMatchArray;

          const replace_regex = new RegExp(
            `<\s*\/?\s*${filtered.name}\s*?>`,
            "gi"
          );

          const value = filtered_match[0].replace(replace_regex, "");

          ini[filtered.name] = !isNaN(Number(value))
            ? Number(value)
            : String(value);

          return ini;
        }, {} as ListLeiauteData);

        if (acc[tag]) {
          acc[tag]?.push(a);
        } else acc[tag] = [a];
      });
    }

    if (acc[tag]?.length === 1) acc[tag] = acc[tag][0];

    return acc;
  }, {} as any);

  return data;
}

export function extractData(
  arr: ListLeiauteData[],
  leiaute: Leiaute
): { [key: string]: number | string }[] {
  const complementary: { [key: string]: number | string }[] = [];

  const formatted_data = arr.map((item) => {
    const { e_social_id, event_type, ...data } = item;

    const entries = Object.entries(data);

    const formatted = entries.reduce((acc, [key, value]) => {
      if (typeof value === "object" && !Array.isArray(value)) {
        for (const [obj_key, obj_value] of Object.entries(value)) {
          acc[`${key}_${obj_key}`.toLowerCase()] = obj_value;
        }
      }

      if (typeof value === "object" && Array.isArray(value)) {
        const complementary_data = Array.from(value).map(
          (item: { [key: string]: number | string }) => {
            const data = Object.entries(item).reduce(
              (acc, [key_complementary, values_complementary]) => {
                acc[`${key.toLowerCase()}_${key_complementary.toLowerCase()}`] =
                  values_complementary;
                return acc;
              },
              {} as any
            );

            return {
              e_social_id,
              event_type,
              leiaute_id: leiaute.id,
              ...data,
            };
          }
        ) as { [key: string]: number | string }[];

        complementary.push(...complementary_data);
      }

      return acc;
    }, {} as any);

    return { e_social_id, event_type, leiaute_id: leiaute.id, ...formatted };
  });

  return [...formatted_data, ...complementary];
}
