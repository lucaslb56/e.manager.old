import { test } from "@japa/runner";
import { MemoryColumnRepository } from "App/Repositories/memory/column-repository";
import { BuildUseCase } from "./build";

let columnRepository: MemoryColumnRepository;
let sut: BuildUseCase;

test.group("Create column Use Case", (group) => {
  group.each.setup(() => {
    columnRepository = new MemoryColumnRepository();
    sut = new BuildUseCase(columnRepository);
  });

  test("should be able to create column", async ({ assert }) => {
    const entity = await sut.execute([
      {
        name: "column-1",
        prefix: "column-1",
        active: true,
        type: "object",
        entity_id: "entity-1",
      },
    ]);

    assert.include(entity[0], {
      name: "column-1",
      prefix: "column-1",
      active: true,
      type: "object",
      entity_id: "entity-1",
    });
  });

  test("shold not be able to create column with same name twice", async ({
    assert,
  }) => {
    await sut.execute([
      {
        name: "column-1",
        prefix: "column-1",
        active: true,
        type: "object",
        entity_id: "entity-1",
      },
    ]);

    await assert.rejects(async () => {
      await sut.execute([
        {
          name: "column-1",
          prefix: "column-1",
          active: true,
          type: "object",
          entity_id: "entity-1",
        },
      ]);
    }, Error);
  });
});
