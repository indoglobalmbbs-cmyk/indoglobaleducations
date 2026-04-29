import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaChevronDown,
} from 'react-icons/fa';
import ContactCard from '../../components/ContactCard';

const Contact = () => {
  return (
    <div className="w-full bg-background min-h-screen">
      <section className="bg-primary py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-accent rounded-full text-sm font-bold uppercase mb-6">
            Get In Touch
          </div>
          <div className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-accent">Our Experts</span>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have questions about medical admissions abroad? Our team of
            experienced counselors is here to guide you through every step of
            your journey.
          </p>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContactCard
                  icon={<FaPhoneAlt />}
                  title="Call Us"
                  detail="+91 7090000502"
                  href="tel:+917090000502"
                  subDetail="Mon-Sat, 9am to 6pm"
                />
                <ContactCard
                  icon={<FaEnvelope />}
                  title="Email Us"
                  detail="Indoglobaledu.official@gmail.com"
                  href="mailto:Indoglobaledu.official@gmail.com"
                  subDetail="Online support 24/7"
                />
                <ContactCard
                  icon={<FaMapMarkerAlt />}
                  title="Visit Office"
                  detail="Ground Floor, Hotel Biggboss International, NH4,"
                  href="https://maps.app.goo.gl/CroHchUx4BJmJdCr9"
                  subDetail="Chitradurga, Karnataka, India - 577501"
                />
                <ContactCard
                  icon={<FaClock />}
                  title="Working Hours"
                  detail="Monday - Saturday"
                  subDetail="09:00 AM - 06:30 PM"
                />
              </div>
              <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-sm">
                <div className="text-2xl font-bold text-primary mb-4">
                  Why consult with us?
                </div>
                <ul className="space-y-3 text-text-muted">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Direct Tie-ups with Top Medical Universities.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Complete Documentation & Visa Assistance.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Post-admission support and MCI coaching guidance.
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden sticky top-24">
                <div className="bg-primary p-6 text-white text-center">
                  <div className="text-xl font-bold">Enquire Now</div>
                  <p className="text-blue-100 text-sm">
                    Get a free counseling session today
                  </p>
                </div>
                <form
                  className="p-6 space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email Id"
                      className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        Country Preference
                      </label>
                      <div className="relative">
                        <select
                          defaultValue=""
                          className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled>
                            Select Country
                          </option>
                          <option value="russia">Russia</option>
                          <option value="armenia">Armenia</option>
                          <option value="georgia">Georgia</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                          <FaChevronDown className="text-gray-400 text-sm" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        Select Course
                      </label>
                      <div className="relative">
                        <select
                          defaultValue=""
                          className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled>
                            Select Course
                          </option>
                          <option value="mbbs">MBBS</option>
                          <option value="ms">MS</option>
                          <option value="bds">BDS</option>
                          <option value="mds">MDS</option>
                          <option value="md-ms">MD-MS</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                          <FaChevronDown className="text-gray-400 text-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Country"
                        className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your State"
                        className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent text-white font-bold py-2 rounded-md shadow-lg shadow-accent/30 transition-all active:scale-[0.98]"
                  >
                    Apply Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[450px] bg-gray-200 relative">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.2956281259553!2d76.38185757538793!3d14.235969085899287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba75c760b80a07%3A0x8570eb0f1c18ff1c!2sIndo-Global%20Education%20Service%20Pvt.Ltd%20(%20Study%20MBBS%20Abroad%20)!5e0!3m2!1sen!2sin!4v1777280086543!5m2!1sen!2sin"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
