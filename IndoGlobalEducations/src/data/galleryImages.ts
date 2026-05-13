import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
} from '../assets/images';

export interface GalleryImage {
  src: string;
  title: string;
}

export const galleryImages: GalleryImage[] = [
  { src: banner1, title: 'University Campus' },
  { src: banner2, title: 'Modern Classrooms' },
  { src: banner3, title: 'Student Life' },
  { src: banner4, title: 'Clinical Training' },
  { src: banner5, title: 'Hostel Facilities' },
  { src: banner6, title: 'Graduation Ceremony' },
];
