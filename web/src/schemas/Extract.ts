import { z } from 'zod';

export const StepOneSchema = z.object({
	templates: z.array(z.instanceof(File), {
		required_error: 'Por favor, faça upload de seus arquivos.',
	}),
});

export const ValueSchema = z.object({
	prefix: z.string(),
	value: z.union([z.string(), z.number()]),
});

export const EntitySchema = z.object({
	prefix: z.string(),
	values: z.array(ValueSchema),
});

export const ExtractSchema = z.object({
	template: z.string(),
	entities: z.array(EntitySchema),
});

export const StepTwoSchema = z.object({
	extracts: z.array(ExtractSchema),
});

export type StepOneType = z.infer<typeof StepOneSchema>;

export type StepTwoType = z.infer<typeof StepTwoSchema>;

export type ExtractTemplate = StepOneType & StepTwoType;
