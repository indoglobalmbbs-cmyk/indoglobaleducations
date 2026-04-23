import {
  FaRegNewspaper,
  FaBell,
  FaChevronRight,
  FaRss,
  FaArrowRight,
} from 'react-icons/fa';
import { newsUpdates } from '../../components/NewsUpdates';

const News = () => {
  return (
    <div className="w-full bg-white">
      <section className="bg-primary py-10 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-2xl">
              <div className="text-3xl font-bold leading-tight mb-6">
                Medical Education <br />
                <span className="text-accent underline decoration-white/20">
                  Global Updates
                </span>
              </div>
              <p className="text-white/70 text-lg md:text-xl border-l-4 border-accent pl-6">
                Critical alerts, regulatory changes, and admission news directly
                from NMC and international medical boards.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/10 hidden lg:block">
              <FaRegNewspaper size={80} className="text-accent opacity-50" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {newsUpdates.map((news) => (
              <div
                key={news.id}
                className={`group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border ${news.priority ? 'border-accent/30' : 'border-gray-100'}`}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase ${news.tag === 'Alert' ? 'bg-error text-white' : 'bg-primary text-white'}`}
                  >
                    {news.tag}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                    <FaRss className="text-accent" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text mb-4 leading-tight group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-8">
                    {news.summary}
                  </p>
                  <div className="mt-auto">
                    <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                      Read Full Notice <FaArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <FaBell size={150} />
            </div>
            <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-text mb-6">
                Never Miss an NMC Regulation Change
              </h2>
              <p className="text-text-muted text-lg mb-10">
                Join our alert list to receive instant notifications about FMGL
                regulations, NExT coaching updates, and visa policy changes for
                Indian students.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-8 py-5 rounded-2xl bg-primary-light border-none focus:ring-2 focus:ring-primary outline-none text-text font-medium"
                />
                <button className="px-10 py-5 bg-accent text-white font-black rounded-2xl hover:bg-primary transition-all shadow-lg hover:-translate-y-1">
                  SUBSCRIBE NOW
                </button>
              </form>
              <p className="mt-6 text-xs text-text-muted italic">
                *We only send official verified news. No spam.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="border-t border-gray-200 pt-10">
            <h4 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-8">
              Archived Bulletins
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                '2025 NMC Guidelines',
                'NExT Exam Schedule',
                'FMGE Results 2025',
                'Georgia Visa Policy',
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-primary hover:text-primary transition-all group"
                >
                  <span className="font-semibold">{link}</span>
                  <FaChevronRight
                    size={10}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
