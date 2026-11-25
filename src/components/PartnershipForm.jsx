import React, { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, Printer } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function PartnershipForm() {
  const { organization } = ministryContent;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Medical Missions & Healthcare Outreach",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Rhema Touch Africa Partnership — ${formData.interest}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nArea of Interest: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${organization.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="partner" className="py-16 md:py-24 bg-rhema-ivory border-b border-rhema-gold/30">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Partnership Information */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-rhema-burgundy">
            Partner With Us
          </span>
          <h2 className="font-serif text-3xl font-bold text-rhema-green leading-snug">
            Join Hands to Transform Lives &amp; Communities
          </h2>
          <p className="text-sm md:text-base text-rhema-ink/85 leading-relaxed">
            Rhema Touch Africa welcomes churches, healthcare professionals,
            volunteers, donors, and community leaders to work together in
            creating sustainable spiritual and practical transformation.
          </p>

          <div className="bg-white p-6 rounded-xl border border-rhema-gold/40 space-y-4 shadow-sm">
            <h3 className="font-serif font-bold text-rhema-green text-base border-b border-rhema-gold/25 pb-2">
              Official Ministry Contact
            </h3>
            <div className="space-y-3 text-sm text-rhema-ink/90">
              <a
                href={`mailto:${organization.email}`}
                className="flex items-center gap-3 hover:text-rhema-burgundy transition"
              >
                <Mail className="w-4 h-4 text-rhema-burgundy shrink-0" />
                <span>{organization.email}</span>
              </a>
              <a
                href={`tel:${organization.phone}`}
                className="flex items-center gap-3 hover:text-rhema-burgundy transition"
              >
                <Phone className="w-4 h-4 text-rhema-burgundy shrink-0" />
                <span>Tel: {organization.phone}</span>
              </a>
              <div className="flex items-center gap-3">
                <Printer className="w-4 h-4 text-rhema-burgundy shrink-0" />
                <span>Fax: {organization.fax}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Interactive Inquiry Form */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-rhema-gold/40 shadow-sm">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-rhema-green mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-rhema-green">
                Thank You for Reaching Out
              </h3>
              <p className="text-sm text-rhema-ink/80 max-w-md mx-auto">
                Your email client has been prepared to send your message directly
                to <strong>{organization.email}</strong>. Ministers Nelson &amp;
                Peris Kahoro appreciate your heart to serve.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold uppercase tracking-wider text-rhema-burgundy underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="font-serif text-xl font-bold text-rhema-green">
                Send a Partnership or Mission Inquiry
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-rhema-ink/75 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name or organization"
                    className="w-full px-3.5 py-2.5 rounded-md border border-rhema-gold/50 bg-rhema-ivory/50 text-sm focus:outline-none focus:border-rhema-green"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-rhema-ink/75 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 rounded-md border border-rhema-gold/50 bg-rhema-ivory/50 text-sm focus:outline-none focus:border-rhema-green"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-rhema-ink/75 mb-1.5">
                  How Would You Like to Partner?
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) =>
                    setFormData({ ...formData, interest: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-md border border-rhema-gold/50 bg-rhema-ivory/50 text-sm focus:outline-none focus:border-rhema-green"
                >
                  <option>Medical Missions &amp; Healthcare Outreach</option>
                  <option>Humanitarian Assistance &amp; Benevolence</option>
                  <option>Church &amp; Missionary Partnership</option>
                  <option>Children &amp; Family Support</option>
                  <option>Financial Giving &amp; Sponsorship</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-rhema-ink/75 mb-1.5">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Share how you or your church would like to connect with Rhema Touch Africa..."
                  className="w-full px-3.5 py-2.5 rounded-md border border-rhema-gold/50 bg-rhema-ivory/50 text-sm focus:outline-none focus:border-rhema-green"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-rhema-burgundy hover:bg-rhema-green text-white font-semibold text-sm px-6 py-3 rounded-md shadow transition"
              >
                <Send className="w-4 h-4 text-rhema-goldLight" />
                <span>Connect With Rhema Touch Africa</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}