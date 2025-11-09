import React from 'react';
import { Home, MapPin, Cpu, AlertTriangle, FileText, LifeBuoy, Settings, Users } from 'lucide-react';

const menu = [
  { label: 'Dashboard', icon: Home },
  { label: 'Locations', icon: MapPin },
  { label: 'Devices', icon: Cpu },
  { label: 'Alerts', icon: AlertTriangle },
  { label: 'Reports', icon: FileText },
  { label: 'Support Tickets', icon: LifeBuoy },
  { label: 'Settings', icon: Settings },
  { label: 'User & Roles', icon: Users, admin: true },
];

const Sidebar = () => {
  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 bg-gradient-to-b from-[#F7F9FE] to-[#EBEEF7] border-r border-[#D8DFEA]">
      <nav className="p-4 space-y-1">
        {menu.map((item, idx) => (
          <button
            key={item.label}
            className={`group w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition relative ${
              idx === 0
                ? 'bg-white font-semibold text-[#1B1D22] shadow-[0_4px_14px_rgba(0,0,0,0.07)]'
                : 'hover:bg-white/70 text-[#5D6471]'
            }`}
          >
            {idx === 0 && (
              <span className="absolute left-0 top-0 bottom-0 w-1 rounded-l-md bg-[#2F3BAF]" />
            )}
            <item.icon className={`${idx === 0 ? 'text-[#2F3BAF]' : 'text-[#5D6471]'} `} size={18} />
            <span className="truncate">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto p-4 text-xs text-[#5D6471]">
        © {new Date().getFullYear()} VEGA CALIBRATION
      </div>
    </aside>
  );
};

export default Sidebar;
