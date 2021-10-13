export interface IURLData {
  shortUrl: string;
  longUrl: string,
  urlCode: string;
  creatorIP?: string;
  createdAt?: string;
}

export interface ITableData {
  data: IURLData[];
}
