import { useNavigate } from 'react-router-dom';
import { FaHistory, FaUser, FaChevronRight } from 'react-icons/fa';
import { russia } from '../../assets/images';
import { posts } from '../../data/posts';

const Blog = () => {
  const navigate = useNavigate();

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
                        href="/news"
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
              <div className="bg-primary p-8 rounded-3xl shadow-sm">
                <div className="text-xl font-bold text-white mb-6">
                  Categories
                </div>
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
                <button
                  onClick={() => navigate('/contact-us')}
                  className="w-full py-4 bg-white text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all shadow-lg"
                >
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
