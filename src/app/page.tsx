"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { BookOpen, Calendar, ChevronRight } from "lucide-react";

const topics = ["All", "Technology", "Design", "Business", "Culture"];

const posts = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the web development landscape in 2024 and beyond.",
    date: "2024-02-10",
    topic: "Technology",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    featured: true
  },
  {
    id: 2,
    title: "Minimalist Design Principles",
    excerpt: "Understanding the core principles of minimalist design and how to apply them effectively.",
    date: "2024-02-09",
    topic: "Design",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    featured: false
  },
  {
    id: 3,
    title: "Building Sustainable Businesses",
    excerpt: "A comprehensive guide to creating environmentally conscious and sustainable business practices.",
    date: "2024-02-08",
    topic: "Business",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5",
    featured: false
  },
  {
    id: 4,
    title: "The Impact of AI on Society",
    excerpt: "Analyzing how artificial intelligence is reshaping our daily lives and society at large.",
    date: "2024-02-07",
    topic: "Culture",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    featured: false
  }
];

export default function HomePage() {
  const [selectedTopic, setSelectedTopic] = useState("All");
  const featuredPost = posts.find(post => post.featured);
  const filteredPosts = posts.filter(post => 
    !post.featured && (selectedTopic === "All" || post.topic === selectedTopic)
  );

  return (
    <main className="max-w-7xl mx-auto px-8 py-12">
      {/* Featured Post */}
      {featuredPost && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="relative h-[500px] rounded-2xl overflow-hidden group">
            <img 
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/20 backdrop-blur-sm">
                Featured Post
              </span>
              <h1 className="text-4xl font-bold mt-4 mb-3">{featuredPost.title}</h1>
              <p className="text-lg text-gray-200 mb-4">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {format(new Date(featuredPost.date), 'MMMM d, yyyy')}
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen size={16} />
                  {featuredPost.topic}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Topic Tabs */}
      <div className="flex gap-2 mb-12">
        {topics.map((topic, index) => (
          <motion.button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${selectedTopic === topic 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {topic}
          </motion.button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative h-48 rounded-xl overflow-hidden mb-4">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="text-sm text-muted-foreground">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </span>
            <h2 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              {post.excerpt}
            </p>
            <button className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
              Read More <ChevronRight size={16} />
            </button>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
