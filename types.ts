export interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  imageUrl: string;
}

export interface Trophy {
  id: number;
  name: string;
  count: number;
  icon: string;
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  imageUrl: string;
}
