
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, ExternalLink, Twitter, Linkedin, Globe } from 'lucide-react';

interface AuthorBioProps {
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
    location: string;
    joinDate: string;
    expertise: string[];
    socialLinks: {
      twitter?: string;
      linkedin?: string;
      website?: string;
    };
    stats: {
      articlesWritten: number;
      yearsExperience: number;
    };
  };
  compact?: boolean;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ author, compact = false }) => {
  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6"
      >
        <div className="flex items-start space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">{author.name}</h3>
            <p className="text-green-400 text-sm mb-2">{author.role}</p>
            <p className="text-white/70 text-sm leading-relaxed mb-3">{author.bio}</p>
            
            <div className="flex items-center space-x-4 text-xs text-white/60">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{author.stats.articlesWritten} articles</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{author.location}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8"
    >
      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
        <Avatar className="h-24 w-24 mx-auto md:mx-0">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback className="text-xl">{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">{author.name}</h2>
          <p className="text-green-400 text-lg mb-4">{author.role}</p>
          <p className="text-white/80 leading-relaxed mb-6">{author.bio}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-white/60">
              <MapPin className="w-4 h-4" />
              <span>{author.location}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-white/60">
              <Calendar className="w-4 h-4" />
              <span>Joined {author.joinDate}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
            {author.expertise.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                {skill}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-center md:justify-start space-x-4">
            {author.socialLinks.twitter && (
              <a
                href={author.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {author.socialLinks.linkedin && (
              <a
                href={author.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {author.socialLinks.website && (
              <a
                href={author.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{author.stats.articlesWritten}</div>
              <div className="text-sm text-white/60">Articles Written</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{author.stats.yearsExperience}</div>
              <div className="text-sm text-white/60">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthorBio;


