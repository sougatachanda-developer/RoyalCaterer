'use client';
import { motion } from 'motion/react'
import { Card } from '@/components/ui/Card'
import { useEffect, useState } from 'react';
import { videos } from '@/lib/mockData';
import { VideosType } from '@/Interfaces/Interface';
import { FaPlay } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export default function Gallery() {

  const [loading, setLoading] = useState<boolean>(true);
  const [selectedVideo, setSelectedVideo] = useState<VideosType | null>(null);

  useEffect ( () => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const VideoSkeleton = () => (
    <Card className="overflow-hidden animate-pulse">
      <div className="aspect-video bg-muted" />
      <div className="p-4">
        <div className="h-5 bg-muted rounded w-3/4" />
      </div>
    </Card>
  )

  return (
    <div className='min-h-screen pt-20 pb-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial = {{ opacity: 0, y: 30}}
          animate = {{ opacity: 1, y: 0}}
          transition = {{ duration: 0.6 }}
          className='text-center mb-16 pt-12'
        >
          <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--royal-gold)] to-[var(--royal-gold-dark)] bg-clip-text text-transparent'>
            Event Gallery
          </h1>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
          Explore our portfolio of luxury events, weddings, and celebrations   
          </p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          { loading ? (
            <>
              { [...Array(6)].map((_,i) => (
                <VideoSkeleton key={i} />
              )) }
            </>
          ) : (
            videos.map((video, index) => (
              <motion.div
                key = {video.id}
                initial = {{ opacity: 0, y: 30 }}
                animate = {{ opacity: 1, y: 0 }}
                transition = {{ duration: 0.6, delay: index * 0.1 }} 
              >
               <Card className="group overflow-hidden cursor-pointer hover:border-[var(--royal-gold)]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--royal-gold)]/20">
                  <div
                    className="relative aspect-video overflow-hidden"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[var(--royal-gold)] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <FaPlay className="w-8 h-8 text-black ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-[var(--royal-gold)] border border-[var(--royal-gold)]/30">
                        {video.type.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-card to-black/50">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-[var(--royal-gold)] transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </Card> 
              </motion.div>
            ))
          )}
        </div>
      </div>

        { selectedVideo && (
          <div
            className='fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4'
            onClick={() => setSelectedVideo(null)}
          >
            <button onClick={() => setSelectedVideo(null)} 
              className='absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10'
            >
              <FaX className='w-6 h-6' />
            </button>
            <div className='w-full max-w-5xl' onClick={(e) => e.stopPropagation()}>
              <div className='aspect-video rounded-xl overflow-hidden border-2 border-[var(--royal-gold)]/30 shadow-2xl shadow-[var(--royal-gold)]/20'>
              {selectedVideo.type === 'youtube' ? (
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : selectedVideo.type === 'instagram' ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 to-pink-900">
                  <p className="text-white text-center">
                    Instagram Reel
                    <br />
                    <a
                      href={selectedVideo.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--royal-gold)] underline"
                    >
                      View on Instagram
                    </a>
                  </p>
                </div>
              ) : (
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              )}
              </div>
              <h3 className='text-2xl font-bold text-center mt-4 text-[var(--royal-gold)]'>
                {selectedVideo.title}
              </h3>
            </div>
          </div>
        )}
    </div>
  );
}

