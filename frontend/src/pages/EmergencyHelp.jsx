import React, { useState } from "react";
import { useTranslation } from "../i18n/i18nConfig";
import Card from "../components/commonComponents/Card";
import Button from "../components/commonComponents/Button";
import Alert from "../components/commonComponents/Alert";
import Modal from "../components/commonComponents/Modal";
import { FiPhone, FiMessageSquare, FiActivity, FiShield, FiExternalLink, FiHeart, FiWind } from "react-icons/fi";

const EmergencyHelp = () => {
  const language = localStorage.getItem("language") || "en";
  const { t } = useTranslation(language);

  const [showChatModal, setShowChatModal] = useState(false);

  const hotlines = [
    {
      name: "Mental Health Helpline",
      number: "1-800-273-8255",
      available: "24/7",
      country: "USA",
      icon: FiShield
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      available: "24/7",
      country: "USA",
      icon: FiMessageSquare
    },
    {
      name: "International Association",
      number: "1-250-494-3369",
      available: "24/7",
      country: "International",
      icon: FiActivity
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      available: "24/7",
      country: "USA",
      icon: FiHeart
    },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-black text-[#0B6A5A] font-heading mb-2">
          Safety Net
        </h1>
        <p className="text-gray-500 font-medium">Resources and support for when you need it most.</p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: t("emergency.callHotline"), icon: FiPhone, color: "bg-[#0B6A5A]", lightColor: "bg-[#0B6A5A]", textColor: "text-[", label: "Call Now", action: () => { } },
          { title: t("emergency.chat24_7"), icon: FiMessageSquare, color: "bg-[#0B6A5A]", lightColor: "bg-[#0B6A5A]", textColor: "text-black", label: "Chat Now", action: () => setShowChatModal(true) },
          { title: t("emergency.emergencyServices"), icon: FiActivity, color: "bg-[#0B6A5A]", lightColor: "bg-[#0B6A5A]", textColor: "text-black", label: "Dial 911", action: () => { } }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-[#E0F2F1] shadow-sm flex flex-col items-center text-center group hover:border-[#90D6CA] transition-all">
            <div className={`${item.lightColor} ${item.textColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <item.icon size={32} />
            </div>
            <h3 className="text-xl font-extrabold text-gray-800 mb-6 leading-tight h-12 flex items-center">{item.title}</h3>
            <button
              onClick={item.action}
              className={`w-full ${item.color} text-white py-4 rounded-xl font-black text-sm shadow-lg hover:shadow-xl transition-all active:scale-95`}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Hotlines List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl shadow-sm border border-[#E0F2F1] p-8">
            <h2 className="text-2xl font-bold text-gray-800 font-heading mb-8">{t("emergency.hotlines")}</h2>
            <div className="grid grid-cols-1 gap-4">
              {hotlines.map((hotline, index) => (
                <div
                  key={index}
                  className="group flex flex-col sm:flex-row items-center justify-between p-6 bg-gray-50/50 rounded-2xl border border-transparent hover:border-[#90D6CA] hover:bg-white transition-all gap-4"
                >
                  <div className="flex items-center gap-5 text-center sm:text-left flex-col sm:flex-row">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0B6A5A] border border-gray-100 group-hover:shadow-md">
                      <hotline.icon size={24} />
                    </div>
                    <div>
                      <p className="font-extrabold text-[#0B6A5A] text-lg leading-tight mb-1">{hotline.name}</p>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">
                        {hotline.number}
                      </p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest opacity-60">
                        {hotline.available} • {hotline.country}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => window.location.href = `tel:${hotline.number.replace(/\D/g, "")}`}
                    className="bg-white border-2 border-[#E0F2F1] text-[#0B6A5A] px-6 py-2.5 rounded-xl font-black text-sm hover:border-[#0B6A5A] hover:bg-[#F0FDFA] transition-all flex items-center gap-2 group-hover:shadow-sm"
                  >
                    <FiPhone /> Call
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl shadow-sm border border-[#E0F2F1] p-8 h-full">
            <h2 className="text-2xl font-bold text-gray-800 font-heading mb-8">Instant Relief</h2>
            <div className="space-y-6">
              {[
                { title: "Breathing Exercise", desc: "The 4-7-8 technique for immediate calm.", icon: FiWind, color: "bg-blue-50 text-blue-500", action: "Start" },
                { title: "Guided Meditation", desc: "Short 5-min session for grounding.", icon: FiHeart, color: "bg-green-50 text-green-500", action: "Listen" },
                { title: "Grounding 5-4-3-2-1", desc: "Visual and tactile reality check.", icon: FiActivity, color: "bg-purple-50 text-purple-500", action: "Learn" }
              ].map((res, i) => (
                <div key={i} className="group relative p-6 bg-gray-50/50 rounded-2xl border border-transparent hover:border-[#90D6CA] hover:bg-white transition-all cursor-pointer">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`${res.color} w-10 h-10 rounded-xl flex items-center justify-center`}>
                      <res.icon size={20} />
                    </div>
                    <h4 className="font-black text-[#0B6A5A]">{res.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed mb-4">{res.desc}</p>
                  <button className="w-full py-2 bg-white rounded-lg font-bold text-xs uppercase tracking-widest text-gray-400 border border-gray-100 hover:text-[#0B6A5A] hover:border-[#90D6CA] transition-all">
                    {res.action} Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chat Modal Integration */}
      <Modal
        isOpen={showChatModal}
        onClose={() => setShowChatModal(false)}
        title="Crisis Support Connection"
        size="lg"
      >
        <div className="h-96 flex flex-col p-2">
          <div className="bg-[#F0FDFA] rounded-2xl p-6 text-center mb-6 border border-[#CCFBF1]">
            <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-[#0B6A5A] shadow-sm mb-4">
              <FiMessageSquare size={32} className="animate-pulse" />
            </div>
            <h3 className="text-xl font-black text-[#0B6A5A] mb-2">Connecting with Counselor</h3>
            <p className="text-[#0B6A5A]/70 font-medium italic">"Your safety is our priority. A verified specialist will be with you in moments."</p>
          </div>

          <div className="flex-1 bg-gray-50 rounded-2xl p-6 mb-6 border border-dashed border-gray-200 flex flex-col items-center justify-center">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-gray-300 rounded-full animate-bounce"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full animate-bounce delay-100"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full animate-bounce delay-200"></span>
            </div>
            <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-4">Waiting for specialist...</p>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Tell us what you're experiencing..."
              className="w-full pl-6 pr-16 py-4 bg-gray-100 rounded-2xl border-none focus:ring-2 focus:ring-[#90D6CA] font-medium"
            />
            <button className="absolute right-2 top-2 bottom-2 aspect-square bg-[#0B6A5A] text-white rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <FiExternalLink />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EmergencyHelp;
