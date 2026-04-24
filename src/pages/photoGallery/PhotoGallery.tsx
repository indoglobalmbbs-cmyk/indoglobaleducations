import { useState } from 'react';
import {
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import * as photos from '../../assets/images';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const galleryImages = [
    { src: photos.photo1, title: 'Campus Life', category: 'Campus' },
    { src: photos.photo2, title: 'Medical Laboratory', category: 'Academic' },
    { src: photos.photo3, title: 'Student Seminar', category: 'Events' },
    {
      src: photos.photo4,
      title: 'International Students',
      category: 'Students',
    },
    { src: photos.photo5, title: 'Modern Classrooms', category: 'Campus' },
    { src: photos.photo6, title: 'Convocation Ceremony', category: 'Events' },
    { src: photos.photo7, title: 'Hospital Visit', category: 'Academic' },
    { src: photos.photo8, title: 'Library Study', category: 'Students' },
    { src: photos.photo9, title: 'Sports Meet', category: 'Events' },
    { src: photos.photo10, title: 'Research Center', category: 'Academic' },
    { src: photos.photo11, title: 'Hostel Facilities', category: 'Campus' },
    { src: photos.photo12, title: 'Cultural Fest', category: 'Events' },
    { src: photos.photo13, title: 'Group Discussion', category: 'Students' },
    { src: photos.photo14, title: 'Practical Training', category: 'Academic' },
    { src: photos.photo15, title: 'Campus Garden', category: 'Campus' },
    { src: photos.photo16, title: 'Science Lab', category: 'Academic' },
    { src: photos.photo17, title: 'Yoga Session', category: 'Students' },
    { src: photos.photo18, title: 'Cafeteria', category: 'Campus' },
    { src: photos.photo19, title: 'Annual Gala', category: 'Events' },
    { src: photos.photo20, title: 'Orientation Day', category: 'Events' },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index].src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const showNext = () => {
    const next = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(next);
    setSelectedImage(galleryImages[next].src);
  };

  const showPrev = () => {
    const prev =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prev);
    setSelectedImage(galleryImages[prev].src);
  };

  return (
    <div className="w-full bg-white pb-10">
      <section className="bg-primary py-10">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-accent rounded-full text-sm font-bold uppercase mb-6">
            Visual Tour
          </div>
          <div className="text-3xl font-bold text-white mb-6">
            Our <span className="text-accent">Campus Gallery</span>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Experience the vibrant life of our students across different medical
            universities and the world-class infrastructure awaiting you.
          </p>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl cursor-pointer bg-primary-light"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-accent text-xs font-bold uppercase tracking-wider">
                      {image.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">
                      {image.title}
                    </h3>
                    <div className="mt-2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <FaExpand size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm transition-all duration-300">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
          >
            <FaTimes size={30} />
          </button>
          <button
            onClick={showPrev}
            className="absolute left-0 text-white/50 hover:text-white transition-colors z-50"
          >
            <FaChevronLeft className="text-4xl" />
          </button>
          <div className="max-w-[90vw] max-h-[85vh] flex flex-col items-center">
            <img
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-xl font-bold">
                {galleryImages[currentIndex].title}
              </p>
              <p className="text-accent text-sm uppercase">
                {galleryImages[currentIndex].category}
              </p>
            </div>
          </div>
          <button
            onClick={showNext}
            className="absolute right-0 text-white/50 hover:text-white transition-colors z-50"
          >
            <FaChevronRight className="text-4xl" />
          </button>
        </div>
      )}
      <section className="container mx-auto px-6 mt-10">
        <div className="bg-primary-light rounded-3xl p-8 text-center border border-primary/10">
          <p className="text-text-muted font-medium italic">
            "Capturing the moments that define your future medical career."
          </p>
        </div>
      </section>
    </div>
  );
};

export default PhotoGallery;
