type CreatePostSubmitHandlerType = (event: any) => Promise<void>;
type ChangeHandlerType = (event: any) => void;

interface PostFormDataType {
  title: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
}

interface PostType {
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

export type { CreatePostSubmitHandlerType, ChangeHandlerType, PostFormDataType, PostType };
