import type { Base } from './Base';

export interface Extract extends Base {
	template: string;
	entity: string;
	collumn: string;
	value: string | number;
}

export interface ExtractValue {
	prefix: string;
	value: string | number;
}

export interface ExtractEntity {
	prefix: string;
	values: ExtractValue[];
}

export interface ExtractGenerator {
	template: string;
	entities: ExtractEntity[];
}
