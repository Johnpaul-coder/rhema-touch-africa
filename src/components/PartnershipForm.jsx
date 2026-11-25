import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Printer,
  Stethoscope,
  Church,
  HeartHandshake,
  Users,
} from "lucide-react";
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

  const quickWays = [
    {
      label: "Medical Missions",
      value: "Medical Missions & Healthcare Outreach",
      desc: "Nurses, doctors & health educators",
      icon: Stethoscope,
    },
    {
      label: "Church Alliance",
      value: "Church & Missionary Partnership",
      desc: "Local congregations & mission teams",
      icon: Church,
    },
    {
      label: "Give & Sponsor",
      value: "Financial Giving & Sponsorship",
      desc: "Fuel benevolence & community relief",
      icon: HeartHandshake,
    },
    {
      label: "Volunteer & Pray",
      value: "Children & Family Support",
      desc: "Intercession & hands-on outreach",
      icon: Users,
    },
  ];

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
    <section
      id="partner"
      className="py-16 md:py-24 bg-rhema-ivory border-b border-rhema-gold/30"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Engagement Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rhema-burgundy">
            Get Involved
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-rhema-green mt-2">
            Four Ways to Partner With Rhema Touch Africa
          </h2>
          <p className="text-sm md:text-base text-rhema-ink/80 mt-3 leading-relaxed">
            Select how you or your church would like to stand with Ministers
            Nelson &amp; Peris Kahoro in transforming lives across Kenya and
            Africa.
          </p>
        </div>

        {/* 4 Quick-Select Partnership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {quickWays.map((item) => {
            const Icon = item.icon;
            const active = formData.interest === item.value;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  setFormData({ ...formData, interest: item.value });
                  setSubmitted(false);
                }}
                className={`text-left p-5 rounded-xl border transition ${
                  active
                    ? "bg-rhema-green text-white border-rhema-gold shadow-md"
                    : "bg-white text-rhema-ink border-rhema-gold/35 hover:border-rhema-green/50"
                }`}
              >
                <Icon
                  className={`w-6 h-6 mb-3 ${
                    active ? "text-rhema-gold" : "text-rhema-burgundy"
                  }`}
                />
                <p className="font-serif font-bold text-base">{item.label}</p>
                <p
                  className={`text-xs mt-1 ${
                    active ? "text-white/85" : "text-rhema-ink/70"
                  }`}
                >
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Official Contact Card */}
          <div className="lg:col-span-5 bg-rhema-green text-white p-7 md:p-8 rounded-2xl shadow-lg border border-rhema-gold/40 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rhema-gold">
                Direct Ministry Office
              </span>
              <h3 className="font-serif text-2xl font-bold mt-1">
                Connect With Our Leadership
              </h3>
              <p className="text-sm text-white/85 mt-2 leading-relaxed">
                Whether you represent a local church, medical team, or donor
                group, we welcome the opportunity to pray, plan, and serve
                together.
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-white/15 text-sm">
              <a
                href={`mailto:${organization.email}`}
                className="flex items-center gap-3.5 hover:text-rhema-gold transition"
              >
                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-rhema-gold" />
                </span>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-white/60">
                    Official Email
                  </span>
                  <span className="font-medium">{organization.email}</span>
                </div>
              </a>

              <a
                href={`tel:${organization.phone}`}
                className="flex items-center gap-3.5 hover:text-rhema-gold transition"
              >
                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-rhema-gold" />
                </span>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-white/60">
                    Telephone
                  </span>
                  <span className="font-medium">{organization.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Printer className="w-4 h-4 text-rhema-gold" />
                </span>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-white/60">
                    Fax
                  </span>
                  <span className="font-medium">{organization.fax}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-rhema-gold/40 shadow-md">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-rhema-green mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-rhema-green">
                  Thank You for Partnering With Us
                </h3>
                <p className="text-sm text-rhema-ink/80 max-w-md mx-auto">
                  Your message has been prepared for{" "}
                  <strong>{organization.email}</strong>. Ministers Nelson &amp;
                  Peris Kahoro look forward to connecting with you.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold uppercase tracking-wider text-rhema-burgundy underline"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-xl font-bold text-rhema-green">
                  Send a Partnership or Mission Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-rhema-ink/75 mb-1.5">
                      Full Name / Church
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name or organization"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-rhema-gold/50 bg-rhema-ivory/50 text-sm focus:outline-none focus:border-rhema-green"
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
                      className="w-full px-3.5 py-2.5 rounded-lg border border-rhema-gold/50 bg-rhema-ivory/50 text-sm focus:outline-none focus:border-rhema-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-rhema-ink/75 mb-1.5">
                    Partnership Focus
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-rhema-gold/50 bg-rhema-ivory/50 text-sm focus:outline-none focus:border-rhema-green"
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
                    placeholder="Tell us how you or your congregation would like to connect..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-rhema-gold/50 bg-rhema-ivory/50 text-sm focus:outline-none focus:border-rhema-green"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-rhema-burgundy hover:bg-rhema-green text-white font-bold text-sm px-6 py-3.5 rounded-lg shadow transition"
                >
                  <Send className="w-4 h-4 text-rhema-goldLight" />
                  <span>Send Partnership Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}