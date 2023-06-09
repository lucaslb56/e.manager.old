import { test } from "@japa/runner";
import { MemoryEntityRepository } from "App/Repositories/memory/entity-repository";
import { BuildUseCase } from "./build";

let entityRepository: MemoryEntityRepository;
let sut: BuildUseCase;

test.group("Create Entity Use Case", (group) => {
  group.each.setup(() => {
    entityRepository = new MemoryEntityRepository();
    sut = new BuildUseCase(entityRepository);
  });

  test("should be able to create entity", async ({ assert }) => {
    const entity = await sut.execute([
      {
        name: "entity-1",
        prefix: "entity-1",
        active: true,
        parent: "entity-0",
        type: "object",
        template_id: "template-1",
      },
    ]);

    assert.include(entity[0], {
      name: "entity-1",
      prefix: "entity-1",
      active: true,
      parent: "entity-0",
      template_id: "template-1",
    });
  });

  test("shold not be able to create entity with same name twice", async ({
    assert,
  }) => {
    await sut.execute([
      {
        name: "entity-1",
        prefix: "entity-1",
        active: true,
        parent: "entity-0",
        type: "object",
        template_id: "template-1",
      },
    ]);

    await assert.rejects(async () => {
      await sut.execute([
        {
          name: "entity-1",
          prefix: "entity-1",
          active: true,
          parent: "entity-0",
          type: "object",
          template_id: "template-1",
        },
      ]);
    }, Error);
  });
});
