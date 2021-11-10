export interface Author {
  username: string;
  email: string;
}

export interface Post {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  views: number;
  likes: number;
  author: Author;
  commentsCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  content: string;
  path: string;
  post: string;
  createdAt: string;
  author: Author;
}