import { test } from "@japa/runner";
import { MemoryEntityRepository } from "App/Repositories/memory/entity-repository";
import { ListUseCase } from "./list";

let entityRepository: MemoryEntityRepository;
let sut: ListUseCase;

test.group("Entity List Use Case", (group) => {
  group.each.setup(() => {
    entityRepository = new MemoryEntityRepository();
    sut = new ListUseCase(entityRepository);
  });

  test("shold be able to fetch paginated template list", async ({ assert }) => {
    for (let index = 1; index <= 22; index++) {
      await entityRepository.create({
        name: `entity-${index}`,
        prefix: `entity-${index}`,
        active: true,
        parent: "entity-0",
        type: "object",
        template_id: "template-1",
      });
    }

    const paginate = await sut.execute({
      page: 2,
      limit: 10,
    });

    assert.include(paginate.meta, {
      current_page: 2,
      first_page: 1,
      last_page: 3,
      per_page: 10,
      total: 22,
    });
    assert.isArray(paginate.data);
    assert.equal(paginate.data.length, 10);
  });

  test("shold be able to search item from template list", async ({
    assert,
  }) => {
    for (let index = 1; index <= 22; index++) {
      await entityRepository.create({
        name: `entity-${index}`,
        prefix: `entity-${index}`,
        active: true,
        parent: "entity-0",
        type: "object",
        template_id: "template-1",
      });
    }

    const paginate = await sut.execute({
      page: 1,
      limit: 10,
      search: "entity-11",
    });

    assert.isArray(paginate.data);
    assert.equal(paginate.data.length, 1);
    assert.include(paginate.data[0], {
      name: "entity-11",
    });
  });
});
