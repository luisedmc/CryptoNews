export interface ArticleInformation {
  urlToImage?: string
  title: string
  description?: string
  author?: string
  content?: string
  publishedAt?: number
}

export interface ArticleCardProps {
  article: ArticleInformation
  index: number
}

export interface ArticleData {
  title: string
  originalIndex: number
}
