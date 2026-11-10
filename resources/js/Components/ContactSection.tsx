import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { PersonalProfile } from '@/types';

interface ContactSectionProps {
  profile: PersonalProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/contact', {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 8000);
      },
    });
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#F8F7F5] overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-10 w-[450px] h-[450px] rounded-full opacity-60 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F6D5CB 0%, #F9E9E7 40%, rgba(248, 247, 245, 0) 70%)' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#151515] dark:text-white tracking-tight transition-colors">
            Let's Build Something{' '}
            <span className="font-serif italic font-normal text-[#F07832]">
              Remarkable Together
            </span>
          </h2>
          <p className="text-[#777777] dark:text-[#C6D0DF] text-base sm:text-lg mt-2 font-normal transition-colors">
            Have a new application idea, freelance project, or collaboration in mind? Send me a message and let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 max-w-5xl mx-auto items-start">
          {/* Info Column */}
          <div className="space-y-4">
            {/* Email Card */}
            <a
              href={`mailto:${profile.email}`}
              className="group p-5 rounded-2xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] hover:border-[#F07832]/60 dark:hover:border-[#F07832]/80 shadow-xs dark:shadow-[0_10px_25px_rgba(7,20,38,0.7)] hover:shadow-md transition-all flex items-center gap-4 block"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F7F5] dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-white group-hover:bg-[#F07832] group-hover:text-white transition-colors shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-[#777777] dark:text-[#C6D0DF] font-mono">Direct Email</p>
                <p className="font-bold text-sm sm:text-base text-[#151515] dark:text-white truncate group-hover:text-[#F07832] transition-colors">
                  {profile.email}
                </p>
              </div>
            </a>

            {/* Phone Card */}
            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="group p-5 rounded-2xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] hover:border-[#F07832]/60 dark:hover:border-[#F07832]/80 shadow-xs dark:shadow-[0_10px_25px_rgba(7,20,38,0.7)] hover:shadow-md transition-all flex items-center gap-4 block"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F7F5] dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-white group-hover:bg-[#F07832] group-hover:text-white transition-colors shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-[#777777] dark:text-[#C6D0DF] font-mono">Mobile &amp; WhatsApp</p>
                  <p className="font-bold text-sm sm:text-base text-[#151515] dark:text-white group-hover:text-[#F07832] transition-colors">
                    {profile.phone}
                  </p>
                </div>
              </a>
            )}

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] shadow-xs dark:shadow-[0_10px_25px_rgba(7,20,38,0.7)] flex items-center gap-4 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F7F5] dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-white shrink-0">
                <MapPin className="h-5 w-5 text-[#F07832]" />
              </div>
              <div>
                <p className="text-xs text-[#777777] dark:text-[#C6D0DF] font-mono">Location</p>
                <p className="font-bold text-sm sm:text-base text-[#151515] dark:text-white">
                  {profile.location || 'Dhaka, Bangladesh'}
                </p>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] shadow-xs dark:shadow-[0_10px_25px_rgba(7,20,38,0.7)] transition-colors">
              <p className="text-xs text-[#777777] dark:text-[#C6D0DF] font-mono mb-3">Connect Online</p>
              <div className="flex items-center gap-2.5">
                {[
                  { href: profile.github_url, Icon: GithubIcon, label: 'GitHub' },
                  { href: profile.linkedin_url, Icon: LinkedinIcon, label: 'LinkedIn' },
                  { href: profile.facebook_url, Icon: FacebookIcon, label: 'Facebook' },
                ].filter(s => s.href).map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8F7F5] dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-[#C6D0DF] hover:text-white hover:bg-[#191919] dark:hover:bg-[#F07832] transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] shadow-lg dark:shadow-[0_20px_50px_rgba(7,20,38,0.8)] transition-colors">
            {submitted || recentlySuccessful ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 space-y-2 text-center animate-fade-in">
                <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="font-bold text-base text-emerald-900 dark:text-white">Message Received!</h4>
                <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed">
                  Thank you for reaching out. Your message has been saved in the database, and I will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errors.rate_limit && (
                  <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errors.rate_limit}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-[#151515] dark:text-white">
                      Your Name <span className="text-[#F07832]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={data.name}
                      onChange={(e) => setData('name', e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F5] dark:bg-[#071426] border border-[#E8E5E2] dark:border-[#1E3A63] text-sm text-[#151515] dark:text-white placeholder:text-[#777777]/50 dark:placeholder:text-[#C6D0DF]/40 focus:outline-none focus:border-[#F07832] transition-colors"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 font-mono">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-[#151515] dark:text-white">
                      Email Address <span className="text-[#F07832]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={data.email}
                      onChange={(e) => setData('email', e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F5] dark:bg-[#071426] border border-[#E8E5E2] dark:border-[#1E3A63] text-sm text-[#151515] dark:text-white placeholder:text-[#777777]/50 dark:placeholder:text-[#C6D0DF]/40 focus:outline-none focus:border-[#F07832] transition-colors"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-[#151515] dark:text-white">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={data.subject}
                    onChange={(e) => setData('subject', e.target.value)}
                    placeholder="e.g. Mobile App Development Project"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F7F5] dark:bg-[#071426] border border-[#E8E5E2] dark:border-[#1E3A63] text-sm text-[#151515] dark:text-white placeholder:text-[#777777]/50 dark:placeholder:text-[#C6D0DF]/40 focus:outline-none focus:border-[#F07832] transition-colors"
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-500 font-mono">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-[#151515] dark:text-white">
                    Message <span className="text-[#F07832]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={data.message}
                    onChange={(e) => setData('message', e.target.value)}
                    placeholder="Tell me about your project, timeline, and goals…"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F7F5] dark:bg-[#071426] border border-[#E8E5E2] dark:border-[#1E3A63] text-sm text-[#151515] dark:text-white placeholder:text-[#777777]/50 dark:placeholder:text-[#C6D0DF]/40 focus:outline-none focus:border-[#F07832] transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-500 font-mono">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white font-semibold text-sm hover:bg-[#F07832] dark:hover:bg-[#E45826] transition-all duration-300 shadow-md disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  <span>{processing ? 'Sending Message…' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
