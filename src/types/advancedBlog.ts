
export interface BookmarkData {
  postId: string;
  userId?: string;
  createdAt: string;
}

export interface ReadingListData {
  id: string;
  name: string;
  description?: string;
  posts: string[];
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PostSeries {
  id: string;
  title: string;
  description: string;
  posts: string[];
  createdAt: string;
  updatedAt: string;
}

export interface RSSFeedItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author: string;
  category: string[];
}


