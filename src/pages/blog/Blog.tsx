import { FaHistory, FaUser, FaChevronRight, FaSearch } from 'react-icons/fa';
import { banner3, russia, armenia, georgia } from '../../assets/images';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'NMC Rules for MBBS Abroad in 2026: A Complete Breakdown',
      excerpt:
        'The university in which you pursue your MBBS can either make or break your career. Hence, there are several new guidelines you must follow...',
      date: 'April 11, 2026',
      author: 'Admin',
      category: 'NMC Update',
      image: banner3,
    },
    {
      id: 2,
      title: 'Why Georgia is Becoming the Top Choice for Indian Students',
      excerpt:
        'With world-class infrastructure and affordable living, Georgia offers a unique European medical education experience...',
      date: 'April 08, 2026',
      author: 'Education Expert',
      category: 'Georgia',
      image: georgia,
    },
    {
      id: 3,
      title: 'Life as an Indian Medical Student in Armenia',
      excerpt:
        'From Indian food availability to clinical rotations, here is everything you need to know about studying in Armenia...',
      date: 'April 05, 2026',
      author: 'Student Council',
      category: 'Armenia',
      image: armenia,
    },
  ];

  return (
    <div className="w-full bg-white">
      <section className="relative w-full h-[350px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src={russia}
            alt="Medical Education News"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-accent mb-6 font-semibold uppercase text-sm">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <FaChevronRight size={10} className="text-white/50" />
            <span className="text-white/70">Insights & News</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Our <span className="text-accent">Blog</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Stay updated with the latest regulations, university insights, and
            success stories from the world of global medical education.
          </p>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3 space-y-12">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="h-64 md:h-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 md:pr-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-primary-light text-primary px-3 py-1 rounded-lg text-xs font-bold uppercase">
                        {post.category}
                      </span>
                      <span className="text-text-muted text-xs flex items-center gap-1">
                        <FaHistory /> {post.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm font-medium text-text">
                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                          <FaUser size={12} />
                        </div>
                        {post.author}
                      </div>
                      <a
                        href="#"
                        className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                      >
                        Read Story <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <aside className="lg:w-1/3 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-bold text-text mb-6">
                  Search Articles
                </h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search keywords..."
                    className="w-full pl-5 pr-12 py-4 bg-primary-light/50 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                  <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-primary" />
                </div>
              </div>
              <div className="bg-primary p-8 rounded-3xl shadow-sm">
                <h4 className="text-xl font-bold text-white mb-6">
                  Categories
                </h4>
                <ul className="space-y-4">
                  {[
                    'Russia',
                    'Georgia',
                    'Uzbekistan',
                    'NMC Guidelines',
                    'Visa Process',
                  ].map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="flex justify-between items-center text-white/80 hover:text-accent transition-colors group"
                      >
                        <span>{cat}</span>
                        <FaChevronRight
                          size={12}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-accent p-8 rounded-3xl shadow-xl text-white">
                <h4 className="text-2xl font-bold mb-4">Start Your Journey</h4>
                <p className="mb-6 text-white">
                  Get personalized counseling from our experts today.
                </p>
                <button className="w-full py-4 bg-white text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all shadow-lg">
                  Book Free Consultation
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
