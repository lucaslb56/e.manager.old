import { test } from "@japa/runner";
import { MemoryColumnRepository } from "App/Repositories/memory/column-repository";
import { ListUseCase } from "./list";

let collumnRepository: MemoryColumnRepository;
let sut: ListUseCase;

test.group("column List Use Case", (group) => {
  group.each.setup(() => {
    collumnRepository = new MemoryColumnRepository();
    sut = new ListUseCase(collumnRepository);
  });

  test("shold be able to fetch paginated entity list", async ({ assert }) => {
    for (let index = 1; index <= 22; index++) {
      await collumnRepository.create({
        name: `column-${index}`,
        prefix: `column-${index}`,
        active: true,
        type: "object",
        entity_id: "entity-1",
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

  test("shold be able to search item from entity list", async ({ assert }) => {
    for (let index = 1; index <= 22; index++) {
      await collumnRepository.create({
        name: `column-${index}`,
        prefix: `column-${index}`,
        active: true,
        type: "object",
        entity_id: "entity-1",
      });
    }

    const paginate = await sut.execute({
      page: 1,
      limit: 10,
      search: "column-11",
    });

    assert.isArray(paginate.data);
    assert.equal(paginate.data.length, 1);
    assert.include(paginate.data[0], {
      name: "column-11",
    });
  });
});
