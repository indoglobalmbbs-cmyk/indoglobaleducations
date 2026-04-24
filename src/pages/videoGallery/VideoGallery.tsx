import { useState, useRef } from 'react';
import {
  FaPlay,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaVideo,
} from 'react-icons/fa';
import * as assets from '../../assets/videos';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const galleryVideos = [
    { src: assets.video1, title: 'Campus Tour', category: 'Campus' },
    { src: assets.video2, title: 'Expert Lecture', category: 'Academic' },
    { src: assets.video3, title: 'Student Life', category: 'Students' },
    { src: assets.video4, title: 'Lab Walkthrough', category: 'Academic' },
    { src: assets.video5, title: 'Success Stories', category: 'Testimonial' },
    { src: assets.video6, title: 'Sports Highlights', category: 'Events' },
    { src: assets.video7, title: 'Hostel Tour', category: 'Campus' },
    { src: assets.video8, title: 'Library Insight', category: 'Academic' },
    { src: assets.video9, title: 'Cultural Night', category: 'Events' },
    { src: assets.video10, title: 'Surgery Simulation', category: 'Practical' },
    { src: assets.video11, title: 'Graduation Day', category: 'Events' },
  ];

  const openVideo = (index: number) => {
    setCurrentIndex(index);
    setSelectedVideo(galleryVideos[index].src);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = (currentIndex + 1) % galleryVideos.length;
    setCurrentIndex(next);
    setSelectedVideo(galleryVideos[next].src);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prev =
      (currentIndex - 1 + galleryVideos.length) % galleryVideos.length;
    setCurrentIndex(prev);
    setSelectedVideo(galleryVideos[prev].src);
  };

  return (
    <div className="w-full bg-white pb-10">
      <section className="bg-primary py-10">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md text-accent rounded-full text-sm font-bold uppercase mb-6">
            <FaVideo size={12} />
            <span>Experience in Motion</span>
          </div>
          <div className="text-3xl font-bold text-white mb-6">
            Video <span className="text-accent">Insights</span>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Take a deeper look into the daily experiences, academic rigor, and
            vibrant community through our curated video collection.
          </p>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryVideos.map((video, index) => (
              <div
                key={index}
                className="group relative bg-black rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => openVideo(index)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent/90 text-primary scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                      <FaPlay className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white border-x border-b border-gray-100 rounded-b-2xl">
                  <span className="text-primary/60 text-[10px] font-bold uppercase tracking-widest">
                    {video.category}
                  </span>
                  <h3 className="text-gray-800 font-bold text-lg leading-tight mt-1">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-md p-4"
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
          >
            <FaTimes size={32} />
          </button>
          <button
            onClick={showPrev}
            className="absolute left-2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-50"
          >
            <FaChevronLeft size={20} />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={selectedVideo}
              className="w-full h-full"
              controls
              autoPlay
            />
            <div className="absolute bottom-[-60px] left-0 text-left">
              <h3 className="text-white text-xl font-bold">
                {galleryVideos[currentIndex].title}
              </h3>
              <p className="text-accent text-sm uppercase">
                {galleryVideos[currentIndex].category}
              </p>
            </div>
          </div>
          <button
            onClick={showNext}
            className="absolute right-2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-50"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
