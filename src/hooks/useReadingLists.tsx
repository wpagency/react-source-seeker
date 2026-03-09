
import { useState, useEffect } from 'react';
import { ReadingListData } from '@/types/advancedBlog';

export const useReadingLists = () => {
  const [readingLists, setReadingLists] = useState<ReadingListData[]>([]);

  useEffect(() => {
    const savedLists = localStorage.getItem('reading-lists');
    if (savedLists) {
      setReadingLists(JSON.parse(savedLists));
    }
  }, []);

  const saveLists = (newLists: ReadingListData[]) => {
    setReadingLists(newLists);
    localStorage.setItem('reading-lists', JSON.stringify(newLists));
  };

  const createList = (name: string, description?: string, isPublic: boolean = false) => {
    const newList: ReadingListData = {
      id: Date.now().toString(),
      name,
      description,
      posts: [],
      isPublic,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const updatedLists = [...readingLists, newList];
    saveLists(updatedLists);
    return newList;
  };

  const deleteList = (listId: string) => {
    const updatedLists = readingLists.filter(list => list.id !== listId);
    saveLists(updatedLists);
  };

  const addToList = (listId: string, postId: string) => {
    const updatedLists = readingLists.map(list => {
      if (list.id === listId && !list.posts.includes(postId)) {
        return {
          ...list,
          posts: [...list.posts, postId],
          updatedAt: new Date().toISOString(),
        };
      }
      return list;
    });
    saveLists(updatedLists);
  };

  const removeFromList = (listId: string, postId: string) => {
    const updatedLists = readingLists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          posts: list.posts.filter(id => id !== postId),
          updatedAt: new Date().toISOString(),
        };
      }
      return list;
    });
    saveLists(updatedLists);
  };

  return {
    readingLists,
    createList,
    deleteList,
    addToList,
    removeFromList,
  };
};


