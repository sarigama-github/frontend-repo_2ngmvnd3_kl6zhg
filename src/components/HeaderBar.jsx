import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-[0_4px_14px_rgba(0,0,0,0.07)]">
      <div className="mx-auto max-w-[1400px] px-6 py-3 flex items-center gap-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 min-w-[220px]">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#2F3BAF] to-[#5064D8] shadow ring-1 ring-[#D8DFEA]/70" />
          <div className="leading-tight">
            <div className="text-[11px] tracking-[0.3em] text-[#5D6471]">VEGA</div>
            <div className="font-semibold text-[#1B1D22] -mt-1">CALIBRATION</div>
          </div>
        </Link>

        {/* Search */}
        <div className="relative w-full max-w-xl hidden md:block">
          <span className="absolute inset-y-0 left-3 flex items-center text-[#5D6471]">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search devices, locations, alerts…"
            className="w-full rounded-full pl-10 pr-4 py-2.5 bg-white/60 backdrop-blur border border-[#D8DFEA] text-[#1B1D22] placeholder-[#5D6471] outline-none focus:ring-2 focus:ring-[#5064D8]/40"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 ml-auto">
          <button className="relative rounded-lg p-2 text-[#1B1D22] hover:bg-[#F4F6FA] transition ring-1 ring-transparent hover:ring-[#D8DFEA]">
            <Bell size={20} />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#5064D8] ring-2 ring-white" />
          </button>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#F4F6FA] to-white border border-[#D8DFEA] flex items-center justify-center text-[#2F3BAF]">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
