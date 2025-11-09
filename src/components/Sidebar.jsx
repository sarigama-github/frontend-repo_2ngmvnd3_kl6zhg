import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, MapPin, Cpu, AlertTriangle, FileText, LifeBuoy, Settings, Users } from 'lucide-react';

const menu = [
  { label: 'Dashboard', icon: Home, to: '/' },
  { label: 'Locations', icon: MapPin, to: '/locations' },
  { label: 'Devices', icon: Cpu, to: '/devices' },
  { label: 'Alerts', icon: AlertTriangle, to: '/alerts' },
  { label: 'Reports', icon: FileText, to: '/reports' },
  { label: 'Support Tickets', icon: LifeBuoy, to: '/support' },
  { label: 'Settings', icon: Settings, to: '/settings' },
  { label: 'User & Roles', icon: Users, to: '/users', admin: true },
];

const Sidebar = () => {
  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 bg-gradient-to-b from-[#F7F9FE] to-[#EBEEF7] border-r border-[#D8DFEA]">
      <nav className="p-4 space-y-1">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `group w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition relative ${
                  isActive
                    ? 'bg-white font-semibold text-[#1B1D22] shadow-[0_4px_14px_rgba(0,0,0,0.07)]'
                    : 'hover:bg-white/70 text-[#5D6471]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 rounded-l-md bg-[#2F3BAF]" />
                  )}
                  <Icon className={isActive ? 'text-[#2F3BAF]' : 'text-[#5D6471]'} size={18} />
                  <span className="truncate">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
      <div className="mt-auto p-4 text-xs text-[#5D6471]">
        © {new Date().getFullYear()} VEGA CALIBRATION
      </div>
    </aside>
  );
};

export default Sidebar;
