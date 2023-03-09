export interface PostFormData {
  title: string;
  description: string;
  image: File | string | null;
  author: string;
  authorImage: string;
}

export interface Post {
  _id: string;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  image: string;
  createdAt: string;
  people: string[];
  peopleImage: string[];
}
