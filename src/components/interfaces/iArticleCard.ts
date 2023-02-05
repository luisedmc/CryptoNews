export interface ArticleInformation {
  urlToImage: string
  title: string
  description: string
  author: string
}

export interface ArticleCardProps {
  article: ArticleInformation
  index: number
}
