import { test } from "@japa/runner";
import { MemoryTemplateRepository } from "App/Repositories/memory/template-repository";
import { CreateUseCase } from "./create";

let templateRepository: MemoryTemplateRepository;
let sut: CreateUseCase;

test.group("Create Template Use Case", (group) => {
  group.each.setup(() => {
    templateRepository = new MemoryTemplateRepository();
    sut = new CreateUseCase(templateRepository);
  });

  test("should be able to create template", async ({ assert }) => {
    const template = await sut.execute({
      name: "template-1",
      prefix: "template_0001",
      version: "1.0.0",
    });

    assert.include(template, {
      name: "template-1",
      prefix: "template_0001",
      version: "1.0.0",
    });
  });

  test("shold not be able to create template with same name twice", async ({
    assert,
  }) => {
    await sut.execute({
      name: "template-1",
      prefix: "template_0001",
      version: "1.0.0",
    });

    await assert.rejects(async () => {
      await sut.execute({
        name: "template-1",
        prefix: "template_0001",
        version: "1.0.0",
      });
    }, Error);
  });
});
