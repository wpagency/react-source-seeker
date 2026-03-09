import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, List, Trash2, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { useReadingLists } from '@/hooks/useReadingLists';
import { blogPosts } from '@/data/blogData';
import { toast } from '@/hooks/use-toast';

interface ReadingListManagerProps {
  postId?: string;
}

const ReadingListManager: React.FC<ReadingListManagerProps> = ({ postId }) => {
  const { readingLists, createList, deleteList, addToList, removeFromList } = useReadingLists();
  const [isCreating, setIsCreating] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [newListDescription, setNewListDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const handleCreateList = () => {
    if (!newListName.trim()) return;
    
    createList(newListName, newListDescription, isPublic);
    setNewListName('');
    setNewListDescription('');
    setIsPublic(false);
    setIsCreating(false);
    
    toast({
      title: "Reading list created",
      description: `"${newListName}" has been created.`,
    });
  };

  const handleAddToList = (listId: string) => {
    if (!postId) return;
    addToList(listId, postId);
    toast({
      title: "Added to reading list",
      description: "Article added to your reading list.",
    });
  };

  const handleRemoveFromList = (listId: string) => {
    if (!postId) return;
    removeFromList(listId, postId);
    toast({
      title: "Removed from reading list",
      description: "Article removed from your reading list.",
    });
  };

  const isPostInList = (listId: string) => {
    if (!postId) return false;
    const list = readingLists.find(l => l.id === listId);
    return list?.posts.includes(postId) || false;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="hover:bg-white/10">
          <List className="w-4 h-4 mr-2" />
          Reading Lists
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/20 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {postId ? 'Add to Reading List' : 'Manage Reading Lists'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 max-h-96 overflow-y-auto">
          {/* Create New List */}
          <div className="border-b border-white/10 pb-4">
            {!isCreating ? (
              <Button
                onClick={() => setIsCreating(true)}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create New Reading List
              </Button>
            ) : (
              <div className="space-y-3">
                <Input
                  placeholder="List name"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  className="bg-white/5 border-white/20 text-white"
                />
                <Textarea
                  placeholder="Description (optional)"
                  value={newListDescription}
                  onChange={(e) => setNewListDescription(e.target.value)}
                  className="bg-white/5 border-white/20 text-white"
                  rows={2}
                />
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={isPublic}
                    onCheckedChange={setIsPublic}
                  />
                  <span className="text-sm text-white/70">Make public</span>
                </div>
                <div className="flex space-x-2">
                  <Button onClick={handleCreateList} size="sm">
                    Create
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setIsCreating(false)}
                    className="border-white/20 text-white hover:bg-white/5"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Existing Lists */}
          <div className="space-y-3">
            {readingLists.length === 0 ? (
              <p className="text-white/60 text-center py-4">
                No reading lists yet. Create your first one!
              </p>
            ) : (
              readingLists.map((list) => (
                <motion.div
                  key={list.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium text-white">{list.name}</h3>
                        {list.isPublic ? (
                          <Eye className="w-4 h-4 text-green-400" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-white/40" />
                        )}
                      </div>
                      {list.description && (
                        <p className="text-sm text-white/60 mb-2">{list.description}</p>
                      )}
                      <p className="text-xs text-white/40">
                        {list.posts.length} articles
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {postId && (
                        <Button
                          size="sm"
                          variant={isPostInList(list.id) ? "default" : "outline"}
                          onClick={() => 
                            isPostInList(list.id) 
                              ? handleRemoveFromList(list.id)
                              : handleAddToList(list.id)
                          }
                          className={
                            isPostInList(list.id)
                              ? "bg-green-600 hover:bg-green-700"
                              : "border-white/20 text-white hover:bg-white/5"
                          }
                        >
                          {isPostInList(list.id) ? 'Remove' : 'Add'}
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteList(list.id)}
                        className="text-red-400 hover:bg-red-500/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReadingListManager;


