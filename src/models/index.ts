export interface Author {
  username: string;
  email: string;
}

export interface Post {
  title: string;
  content: string;
  tags: string[];
  author: Author;
  created_at: string;
  updated_at: string;
}