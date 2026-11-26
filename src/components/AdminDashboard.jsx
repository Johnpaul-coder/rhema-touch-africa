import React, { useState } from "react";
import {
  X,
  Lock,
  Plus,
  Trash2,
  MapPin,
  BookOpen,
  Inbox,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";

const ADMIN_PASSCODE = "rhema2026";

export default function AdminDashboard({
  isOpen,
  onClose,
  slides,
  setSlides,
  sites,
  setSites,
  inquiries,
  onResetDefaults,
}) {
  const [authenticated, setAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("sites");

  // New Mission Site Form State
  const [newSite, setNewSite] = useState({
    region: "",
    siteName: "",
    focus: "",
    status: "Active Mission Field",
    summary: "",
  });

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode.trim() === ADMIN_PASSCODE) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect passcode. Please check your handover guide.");
    }
  };

  const handleAddSite = (e) => {
    e.preventDefault();
    if (!newSite.siteName.trim() || !newSite.region.trim()) return;
    setSites((prev) => [
      ...prev,
      {
        id: `site-${Date.now()}`,
        ...newSite,
      },
    ]);
    setNewSite({
      region: "",
      siteName: "",
      focus: "",
      status: "Active Mission Field",
      summary: "",
    });
  };

  const handleDeleteSite = (id) => {
    setSites((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSlideChange = (index, field, value) => {
    setSlides((prev) =>
      prev.map((slide, i) => (i === index ? { ...slide, [field]: value } : slide))
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-gray-200 overflow-hidden my-8">
        {/* Top Bar */}
        <div className="bg-rhema-green text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Lock className="w-5 h-5 text-rhema-gold" />
            <div>
              <h2 className="font-serif text-lg font-bold leading-none">
                Rhema Touch Africa — Ministry Dashboard
              </h2>
              <span className="text-xs text-rhema-goldLight">
                Manage Mission Sites, Hero Scriptures &amp; Partner Inquiries
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/15 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Passcode Gate */}
        {!authenticated ? (
          <form onSubmit={handleLogin} className="p-8 max-w-md mx-auto space-y-4">
            <h3 className="font-serif text-xl font-bold text-rhema-ink text-center">
              Leadership Access
            </h3>
            <p className="text-sm text-rhema-ink/75 text-center">
              Enter the ministry passcode to update mission fields, scripture
              slides, or review incoming partner requests.
            </p>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter dashboard passcode"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-rhema-green text-sm"
            />
            {error && (
              <p className="text-xs font-semibold text-rhema-burgundy">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-rhema-green hover:bg-rhema-greenLight text-white font-bold py-3 rounded-xl shadow transition"
            >
              Unlock Dashboard
            </button>
          </form>
        ) : (
          <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-4">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("sites")}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition ${
                    activeTab === "sites"
                      ? "bg-rhema-green text-white"
                      : "bg-rhema-ivory text-rhema-ink"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Mission Sites ({sites.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("slides")}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition ${
                    activeTab === "slides"
                      ? "bg-rhema-green text-white"
                      : "bg-rhema-ivory text-rhema-ink"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Hero Scripture Slides ({slides.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("inquiries")}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition ${
                    activeTab === "inquiries"
                      ? "bg-rhema-green text-white"
                      : "bg-rhema-ivory text-rhema-ink"
                  }`}
                >
                  <Inbox className="w-3.5 h-3.5" />
                  <span>Partner Inquiries ({inquiries.length})</span>
                </button>
              </div>

              <button
                type="button"
                onClick={onResetDefaults}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rhema-burgundy hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Default Content</span>
              </button>
            </div>

            {/* TAB 1: MISSION SITES */}
            {activeTab === "sites" && (
              <div className="space-y-6">
                <form
                  onSubmit={handleAddSite}
                  className="bg-rhema-ivory p-5 rounded-2xl border border-rhema-gold/30 space-y-3"
                >
                  <h4 className="font-bold text-sm text-rhema-green">
                    + Add New Mission Site / Outreach Camp
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Region (e.g., Machakos County, Kenya)"
                      value={newSite.region}
                      onChange={(e) =>
                        setNewSite({ ...newSite, region: e.target.value })
                      }
                      className="px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm bg-white"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Site Title (e.g., Machakos Medical Camp)"
                      value={newSite.siteName}
                      onChange={(e) =>
                        setNewSite({ ...newSite, siteName: e.target.value })
                      }
                      className="px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm bg-white"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Focus Area (e.g., Free Screenings & Evangelism)"
                      value={newSite.focus}
                      onChange={(e) =>
                        setNewSite({ ...newSite, focus: e.target.value })
                      }
                      className="px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Status (e.g., Upcoming Outreach)"
                      value={newSite.status}
                      onChange={(e) =>
                        setNewSite({ ...newSite, status: e.target.value })
                      }
                      className="px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm bg-white"
                    />
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Short description of community impact..."
                    value={newSite.summary}
                    onChange={(e) =>
                      setNewSite({ ...newSite, summary: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm bg-white"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 bg-rhema-green text-white text-xs font-bold px-5 py-2.5 rounded-full shadow"
                  >
                    <Plus className="w-4 h-4 text-rhema-gold" />
                    <span>Publish Mission Site</span>
                  </button>
                </form>

                <div className="space-y-3">
                  {sites.map((site) => (
                    <div
                      key={site.id}
                      className="p-4 rounded-2xl border border-gray-200 flex items-start justify-between gap-4"
                    >
                      <div>
                        <span className="text-xs font-bold text-rhema-burgundy">
                          {site.region} • {site.status}
                        </span>
                        <h5 className="font-bold text-rhema-ink">
                          {site.siteName}
                        </h5>
                        <p className="text-xs text-rhema-ink/75 mt-1">
                          {site.summary}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDeleteSite(site.id)}
                        className="p-2 text-rhema-burgundy hover:bg-red-50 rounded-lg"
                        title="Remove site"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: HERO SCRIPTURE SLIDES */}
            {activeTab === "slides" && (
              <div className="space-y-4">
                {slides.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className="p-4 rounded-2xl bg-rhema-ivory border border-gray-200 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-rhema-green">
                        Hero Slide #{idx + 1}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-rhema-green font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Auto-Saved
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={slide.titleTop}
                        onChange={(e) =>
                          handleSlideChange(idx, "titleTop", e.target.value)
                        }
                        className="px-3 py-2 rounded-xl border border-gray-300 text-sm bg-white"
                      />
                      <input
                        type="text"
                        value={slide.titleHighlight}
                        onChange={(e) =>
                          handleSlideChange(
                            idx,
                            "titleHighlight",
                            e.target.value
                          )
                        }
                        className="px-3 py-2 rounded-xl border border-gray-300 text-sm bg-white"
                      />
                      <input
                        type="text"
                        value={slide.scriptureRef}
                        onChange={(e) =>
                          handleSlideChange(idx, "scriptureRef", e.target.value)
                        }
                        className="px-3 py-2 rounded-xl border border-gray-300 text-sm bg-white"
                      />
                      <input
                        type="text"
                        value={slide.badge}
                        onChange={(e) =>
                          handleSlideChange(idx, "badge", e.target.value)
                        }
                        className="px-3 py-2 rounded-xl border border-gray-300 text-sm bg-white"
                      />
                    </div>
                    <textarea
                      rows={2}
                      value={slide.scriptureSummary}
                      onChange={(e) =>
                        handleSlideChange(
                          idx,
                          "scriptureSummary",
                          e.target.value
                        )
                      }
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-sm bg-white"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: PARTNER & VOLUNTEER INQUIRIES */}
            {activeTab === "inquiries" && (
              <div className="space-y-3">
                {inquiries.length === 0 ? (
                  <p className="text-sm text-rhema-ink/70 py-8 text-center">
                    No partnership or volunteer submissions yet. Submissions from
                    the website form will appear here automatically.
                  </p>
                ) : (
                  inquiries.map((inq, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl border border-gray-200 bg-rhema-ivory/60 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-rhema-green">
                          {inq.name} ({inq.pathway})
                        </span>
                        <span className="text-xs text-rhema-ink/60">
                          {inq.date}
                        </span>
                      </div>
                      <p className="text-xs text-rhema-burgundy font-semibold">
                        {inq.email} {inq.phone ? `• ${inq.phone}` : ""}
                      </p>
                      <p className="text-sm text-rhema-ink/85 pt-1">
                        {inq.message}
                      </p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}