export const API_BASE = 'https://api-v2.intrinio.com';
export const API_KEY = 'api_key=OjZiMzEzNTJlYjk4YjA4OGZlNTQ4MThiZTY5NGZmYmU5';
export const COMPANIES_FETCH_SIZE = 'page_size=10';
export const NEWS_FETCH_SIZE = 'page_size=5';
export const COMPANY_FIELDS = {
  open: {
    label:'Open',
    color: 'red'
  },
  close: {
    label: 'Close',
    color: 'green'
  },
  high: {
    label: 'High',
    color: 'blue'
  }
}
export const COMPANY_DETAIL_FIELDS = {
  ticker: {
    label: 'Ticker',
    apiKey: 'ticker'
  },
  name: {
    label: 'Name',
    apiKey: 'name'
  },
  legalName: {
    label: 'Legal Name',
    apiKey: 'legal_name'
  },
  stockExchange: {
    label: 'Stock Exchange',
    apiKey: 'stock_exchange'
  },
  ceo: {
    label: 'CEO',
    apiKey: 'ceo'
  },
  entityStatus: {
    label: 'Entity Status',
    apiKey: 'entity_status'
  },
  hqCountry: {
    label: 'Head Quarters Country',
    apiKey: 'hq_country'
  },
  sector: {
    label: 'Sector',
    apiKey: 'sector'
  },
  shortDescription: {
    label: 'Short Description',
    apiKey: 'short_description'
  },
  longDescription: {
    label: 'Long Description',
    apiKey: 'long_description'
  },
}
