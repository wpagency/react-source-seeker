
import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBookmarks } from '@/hooks/useBookmarks';
import { toast } from '@/hooks/use-toast';

interface BookmarkButtonProps {
  postId: string;
  size?: 'sm' | 'lg' | 'default';
  variant?: 'default' | 'ghost' | 'outline';
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ 
  postId, 
  size = 'sm',
  variant = 'ghost'
}) => {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();
  const bookmarked = isBookmarked(postId);

  const handleToggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(postId);
      toast({
        title: "Bookmark removed",
        description: "Article removed from your bookmarks.",
      });
    } else {
      addBookmark(postId);
      toast({
        title: "Article bookmarked",
        description: "Article added to your bookmarks.",
      });
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleToggleBookmark}
      className={`${variant === 'ghost' ? 'hover:bg-white/10' : ''} transition-colors`}
    >
      <motion.div
        initial={false}
        animate={{ scale: bookmarked ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {bookmarked ? (
          <BookmarkCheck className="w-4 h-4 text-green-400" />
        ) : (
          <Bookmark className="w-4 h-4" />
        )}
      </motion.div>
      {size !== 'sm' && (
        <span className="ml-2">
          {bookmarked ? 'Bookmarked' : 'Bookmark'}
        </span>
      )}
    </Button>
  );
};

export default BookmarkButton;


