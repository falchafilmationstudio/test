import React, { useState } from 'react';
import { X, Mail, MapPin, Phone, Film, Sparkles, Award, Camera, CheckCircle2, Send } from 'lucide-react';
import { NavSection } from '../types';
import { STUDIO_ABOUT, STUDIO_SERVICES } from '../data/studioData';

interface SectionDrawerProps {
  activeSection: NavSection;
  onClose: () => void;
}

export const SectionDrawer: React.FC<SectionDrawerProps> = ({ activeSection, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [projectType, setProjectType] = useState('Documentary');
  const [message, setMessage] = useState('');

  if (activeSection === 'work') return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      id={`section-drawer-${activeSection}`}
      className="fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c1017] border border-white/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-y-auto flex flex-col p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title and Close Button */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <div>
            <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-white uppercase">
              {activeSection}
            </h2>
            <p className="text-xs text-slate-400 font-montserrat tracking-widest uppercase mt-1">
              FALCHA FILMATION STUDIO • KATHMANDU, NEPAL
            </p>
          </div>

          <button
            id="close-drawer-btn"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SERVICES SECTION */}
        {activeSection === 'services' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STUDIO_SERVICES.map((service, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/25 transition-all space-y-2 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
                    {index === 0 && <Film className="w-4 h-4" />}
                    {index === 1 && <Camera className="w-4 h-4" />}
                    {index === 2 && <Sparkles className="w-4 h-4" />}
                    {index === 3 && <Award className="w-4 h-4" />}
                  </div>
                  <h3 className="font-montserrat text-sm font-bold text-white tracking-wide">
                    {service.title}
                  </h3>
                  <p className="font-devanagari text-xs text-slate-400">
                    {service.nepali}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-light pt-1">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Equipment and Technical Pipeline */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                  Technical Cinema Arsenal
                </h4>
                <p className="text-xs text-slate-400 font-light mt-0.5">
                  ARRI Alexa Mini LF, RED V-Raptor, Cooke Anamorphic, DJI Ronin 2, Sound Devices 833
                </p>
              </div>
              <button
                onClick={() => {
                  // Direct to contact
                  onClose();
                }}
                className="text-xs px-4 py-2 rounded-lg bg-white text-black font-semibold tracking-wider hover:bg-slate-200 transition-colors uppercase"
              >
                Inquire Rates
              </button>
            </div>
          </div>
        )}

        {/* ABOUT SECTION */}
        {activeSection === 'about' && (
          <div className="space-y-6">
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-light">
              <p className="text-base text-white font-medium">
                {STUDIO_ABOUT.tagline} — <span className="font-devanagari text-slate-300">{STUDIO_ABOUT.nepaliTagline}</span>
              </p>
              <p>
                {STUDIO_ABOUT.story}
              </p>
              <p>
                From the bustling brick stone alleys of Patan to the high mountain passes of Mustang and the modern urban commercial landscapes of South Asia, our directors, cinematographers, and storytellers capture light with uncompromising devotion.
              </p>
            </div>

            {/* Studio Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {STUDIO_ABOUT.stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                  <div className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="font-montserrat text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACT SECTION */}
        {activeSection === 'contact' && (
          <div className="space-y-6">
            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="font-montserrat text-lg font-bold text-white">
                  Message Dispatched
                </h3>
                <p className="text-xs text-emerald-200/90 max-w-md mx-auto">
                  Thank you for reaching out to Falcha Filmation Studio. Our production producers will review your inquiry and connect with you shortly.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Form */}
                <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
                  <div>
                    <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name / Production House
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Maya Shrestha / Himalayan Cinema"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-white/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="contact@studio.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-white/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Format
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white text-xs focus:outline-none focus:border-white/50"
                    >
                      <option value="Documentary">Documentary Feature or Short</option>
                      <option value="Commercial">Brand Commercial / TVC</option>
                      <option value="Narrative">Short Film / Narrative Cinema</option>
                      <option value="Post-Production">Color Grading & Sound Mixing</option>
                      <option value="Line-Production">Nepal Location Line Production</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Brief
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about the timeline, vision, and scale..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-white/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-white text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Project Proposal</span>
                  </button>
                </form>

                {/* Studio Direct Details */}
                <div className="md:col-span-2 space-y-4 border-t md:border-t-0 md:border-l border-white/10 md:pl-6 pt-4 md:pt-0">
                  <div>
                    <h4 className="font-montserrat text-xs font-bold uppercase tracking-wider text-white">
                      Studio Headquarter
                    </h4>
                    <div className="flex items-start space-x-2 text-xs text-slate-400 mt-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>
                        Patan Durbar Heritage Zone<br />
                        Lalitpur, Bagmati Province<br />
                        Kathmandu Valley, Nepal
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-montserrat text-xs font-bold uppercase tracking-wider text-white">
                      Direct Inquiries
                    </h4>
                    <div className="flex items-center space-x-2 text-xs text-slate-400 mt-2">
                      <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>contact@falchafilms.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-400 mt-1.5">
                      <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>+977 1 552 4890</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10 text-[11px] text-slate-400 leading-normal">
                    Available for co-productions, international line production permits, drone clearance, and regional fixers across Nepal & Himalayas.
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
