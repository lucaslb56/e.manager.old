import { z } from 'zod';

const ACCEPTED: string[] = ['text/xml'];

export const CollumnSchema = z.object({
	name: z.string().nonempty({ message: 'Informe nome' }),
	prefix: z.string().nonempty({ message: 'Informe o prefixo' }),
	active: z.boolean(),
	type: z.string().nonempty({ message: 'Informe o tipo' }),
});

export const EntitySchema = z.object({
	name: z.string().nonempty({ message: 'Informe nome' }),
	prefix: z.string().nonempty({ message: 'Informe o prefixo' }),
	active: z.boolean(),
	parent: z.string().nonempty({ message: 'Informe o nó superior' }),
	type: z.string().nonempty({ message: 'Informe o tipo' }),
	collumns: z.array(CollumnSchema),
});

export const StepOneSchema = z.object({
	template: z
		.instanceof(File, {
			message: 'Por favor, faça upload do seu template',
		})
		.refine((value) => ACCEPTED.includes(value.type), {
			message: 'Template deve ser um arquivo XML',
			path: ['template'],
		}),
});

export const StepTwoSchema = z.object({
	name: z.string().nonempty({ message: 'Informe o nome' }),
	prefix: z.string().nonempty({ message: 'Informe o prefixo' }),
	version: z.string().nonempty({ message: 'Informe a versão' }),
	entities: z.array(EntitySchema),
});

export type StepOneType = z.infer<typeof StepOneSchema>;
export type StepTwoType = z.infer<typeof StepTwoSchema>;

export type CreateTemplate = StepOneType & StepTwoType;
