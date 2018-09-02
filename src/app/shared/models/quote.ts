export interface QuoteResponse {
  result: Array<Quote>;
  total: number;
}

export interface Quote {
  category: string | null;
  icon_url: string;
  id: string;
  url: string;
  value: string;
}
