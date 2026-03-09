
import { blogPosts } from '@/data/blogData';
import { RSSFeedItem } from '@/types/advancedBlog';

export const generateRSSFeed = (): string => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://example.com';
  const feedTitle = 'Source Seeker Blog';
  const feedDescription = 'Latest insights on web development, digital marketing, and business growth strategies.';
  
  const rssItems: RSSFeedItem[] = blogPosts.map(post => ({
    title: post.title,
    link: `${siteUrl}/blog/${post.slug}`,
    description: post.excerpt,
    pubDate: new Date(post.date).toUTCString(),
    author: post.author,
    category: post.categories,
  }));

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${feedTitle}</title>
    <description>${feedDescription}</description>
    <link>${siteUrl}/blog</link>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    
    ${rssItems.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <pubDate>${item.pubDate}</pubDate>
      <author>${item.author}</author>
      ${item.category.map(cat => `<category>${cat}</category>`).join('')}
    </item>`).join('')}
    
  </channel>
</rss>`;

  return rssXml;
};

export const downloadRSSFeed = () => {
  const rssContent = generateRSSFeed();
  const blob = new Blob([rssContent], { type: 'application/rss+xml' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'blog-feed.xml';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};


