interface QueryDate {
  initial: string;
  final: string;
}
export interface Query {
  page?: number;
  limit?: number;
  search?: string;
  order?: "asc" | "desc";
  date?: QueryDate;
}
