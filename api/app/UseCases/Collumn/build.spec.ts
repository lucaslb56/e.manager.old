import { test } from "@japa/runner";
import { MemoryCollumnRepository } from "App/Repositories/memory/collumn-repository";
import { BuildUseCase } from "./build";

let columnRepository: MemoryCollumnRepository;
let sut: BuildUseCase;

test.group("Create Collumn Use Case", (group) => {
  group.each.setup(() => {
    columnRepository = new MemoryCollumnRepository();
    sut = new BuildUseCase(columnRepository);
  });

  test("should be able to create collumn", async ({ assert }) => {
    const entity = await sut.execute([
      {
        name: "collumn-1",
        prefix: "collumn-1",
        active: true,
        type: "object",
        entity_id: "entity-1",
      },
    ]);

    assert.include(entity[0], {
      name: "collumn-1",
      prefix: "collumn-1",
      active: true,
      type: "object",
      entity_id: "entity-1",
    });
  });

  test("shold not be able to create collumn with same name twice", async ({
    assert,
  }) => {
    await sut.execute([
      {
        name: "collumn-1",
        prefix: "collumn-1",
        active: true,
        type: "object",
        entity_id: "entity-1",
      },
    ]);

    await assert.rejects(async () => {
      await sut.execute([
        {
          name: "collumn-1",
          prefix: "collumn-1",
          active: true,
          type: "object",
          entity_id: "entity-1",
        },
      ]);
    }, Error);
  });
});
