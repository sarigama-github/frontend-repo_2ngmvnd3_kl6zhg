import React from 'react';
import Spline from '@splinetool/react-spline';

const InsightsPanel = () => {
  return (
    <section className="relative">
      {/* Cover with Spline */}
      <div className="h-[240px] w-full overflow-hidden rounded-md shadow-[0_4px_14px_rgba(0,0,0,0.07)]">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
      <div className="absolute inset-0 p-6 flex items-end">
        <div className="text-white">
          <div className="text-xs tracking-widest uppercase/7 opacity-80">Laboratory-grade Monitoring</div>
          <h2 className="text-2xl md:text-3xl font-semibold">VEGA CALIBRATION — Temperature Intelligence</h2>
          <p className="text-sm opacity-90 max-w-3xl">Precision IoT telemetry with real-time insight, alerts, and compliance-ready history. Calm and reliable by design.</p>
        </div>
      </div>

      {/* Trend cards placeholder visuals */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-md p-5 shadow-[0_4px_14px_rgba(0,0,0,0.07)]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[#1B1D22]">Temperature (24h)</h3>
            <div className="text-xs text-[#5D6471]">Avg 22.1°C</div>
          </div>
          <div className="h-40 w-full rounded bg-gradient-to-b from-[#D63B3B]/20 to-transparent" />
        </div>
        <div className="bg-white rounded-md p-5 shadow-[0_4px_14px_rgba(0,0,0,0.07)]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[#1B1D22]">Humidity (24h)</h3>
            <div className="text-xs text-[#5D6471]">Avg 47%</div>
          </div>
          <div className="h-40 w-full rounded bg-gradient-to-b from-[#5064D8]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default InsightsPanel;
