import React from 'react';
import Spline from '@splinetool/react-spline';

const InsightsPanel = () => {
  return (
    <section className="relative">
      {/* Hero with interactive Spline 3D object */}
      <div className="h-[260px] w-full overflow-hidden rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.07)] ring-1 ring-[#D8DFEA]/70 bg-[#0d1020]">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Glass gradient overlay for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-[#1D2A79]/60 via-transparent to-transparent" />
      <div className="absolute inset-0 p-6 flex items-end">
        <div className="backdrop-blur-sm bg-white/10 border border-white/10 text-white rounded-lg px-4 py-3 shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
          <div className="text-[11px] tracking-[0.25em] uppercase opacity-80">VEGA CALIBRATION</div>
          <h2 className="text-2xl md:text-3xl font-semibold">Precision IoT Temperature Intelligence</h2>
          <p className="text-sm opacity-90 max-w-3xl">Real-time telemetry, trusted alerts, and compliance-grade history for laboratories and enterprises.</p>
        </div>
      </div>

      {/* Trend cards visual shells */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-[0_4px_14px_rgba(0,0,0,0.07)] ring-1 ring-[#D8DFEA]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[#1B1D22]">Temperature (24h)</h3>
            <div className="text-xs text-[#5D6471]">Avg 22.1°C</div>
          </div>
          <div className="h-40 w-full rounded-lg bg-gradient-to-b from-[#D63B3B]/25 to-transparent" />
        </div>
        <div className="bg-white rounded-xl p-5 shadow-[0_4px_14px_rgba(0,0,0,0.07)] ring-1 ring-[#D8DFEA]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[#1B1D22]">Humidity (24h)</h3>
            <div className="text-xs text-[#5D6471]">Avg 47%</div>
          </div>
          <div className="h-40 w-full rounded-lg bg-gradient-to-b from-[#5064D8]/25 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default InsightsPanel;
