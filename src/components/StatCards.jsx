import React from 'react';
import { MapPin, Cpu, Activity, AlertTriangle, Power, Thermometer } from 'lucide-react';

const stats = [
  { label: 'Total Locations', value: '48', icon: MapPin, tint: 'from-[#2F3BAF]/10 to-transparent' },
  { label: 'Total Devices', value: '1,284', icon: Cpu, tint: 'from-[#5064D8]/10 to-transparent' },
  { label: 'Active Devices', value: '1,142', icon: Activity, tint: 'from-[#2DAA4F]/10 to-transparent' },
  { label: 'Devices in Alert', value: '36', icon: AlertTriangle, tint: 'from-[#F5A623]/10 to-transparent' },
  { label: 'Offline Devices', value: '12', icon: Power, tint: 'from-[#7B8797]/10 to-transparent' },
  { label: 'Avg Temp / Hum', value: '22.4°C / 48%', icon: Thermometer, tint: 'from-[#1D2A79]/10 to-transparent' },
];

const StatCards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {stats.map(({ label, value, icon: Icon, tint }) => (
        <div
          key={label}
          className="bg-white rounded-md p-5 shadow-[0_4px_14px_rgba(0,0,0,0.07)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.09)] transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] tracking-wider text-[#5D6471] uppercase">{label}</div>
              <div className="mt-2 text-2xl font-semibold text-[#1B1D22]">{value}</div>
            </div>
            <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${tint} grid place-items-center border border-[#D8DFEA]`}>
              <Icon size={18} className="text-[#1B1D22]" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatCards;
