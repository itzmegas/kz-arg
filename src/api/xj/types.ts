export type XjPostResponse = {
  posts: XjPost[];
};

export type XjPost = {
  author: string;
  authorCountry: string;
  authorId: number;
  comentsNumber: number;
  htmlContent: string;
  icons: any;
  id: number;
  isOldNews: boolean;
  newsDate: string;
  title: string;
  totalPages: number;
};
