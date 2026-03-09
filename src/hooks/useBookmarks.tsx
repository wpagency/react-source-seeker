
import { useState, useEffect } from 'react';
import { BookmarkData } from '@/types/advancedBlog';

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<BookmarkData[]>([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('blog-bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const saveBookmarks = (newBookmarks: BookmarkData[]) => {
    setBookmarks(newBookmarks);
    localStorage.setItem('blog-bookmarks', JSON.stringify(newBookmarks));
  };

  const addBookmark = (postId: string) => {
    const newBookmark: BookmarkData = {
      postId,
      createdAt: new Date().toISOString(),
    };
    const updatedBookmarks = [...bookmarks, newBookmark];
    saveBookmarks(updatedBookmarks);
  };

  const removeBookmark = (postId: string) => {
    const updatedBookmarks = bookmarks.filter(b => b.postId !== postId);
    saveBookmarks(updatedBookmarks);
  };

  const isBookmarked = (postId: string) => {
    return bookmarks.some(b => b.postId === postId);
  };

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
  };
};


