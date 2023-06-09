import { test } from "@japa/runner";
import { MemoryTemplateRepository } from "App/Repositories/memory/template-repository";
import { ListUseCase } from "./list";

let templateRepository: MemoryTemplateRepository;
let sut: ListUseCase;

test.group("Template List Use Case", (group) => {
  group.each.setup(() => {
    templateRepository = new MemoryTemplateRepository();
    sut = new ListUseCase(templateRepository);
  });

  test("shold be able to fetch paginated template list", async ({ assert }) => {
    for (let index = 1; index <= 22; index++) {
      await templateRepository.create({
        name: `template-${index}`,
        prefix: `template_${index}`,
        version: "1.0.0",
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
      await templateRepository.create({
        name: `template-${index}`,
        prefix: `template_${index}`,
        version: "1.0.0",
      });
    }

    const paginate = await sut.execute({
      page: 1,
      limit: 10,
      search: "template-11",
    });

    assert.isArray(paginate.data);
    assert.equal(paginate.data.length, 1);
    assert.include(paginate.data[0], {
      name: "template-11",
    });
  });
});
