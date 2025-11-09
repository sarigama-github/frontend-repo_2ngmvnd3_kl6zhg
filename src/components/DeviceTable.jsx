import React from 'react';

const rows = [
  { name: 'VEGA-TEMP-001', location: 'Lab A - Freezer 2', temp: 2.4, hum: 34, batt: 86, status: 'Normal', last: '2m ago' },
  { name: 'VEGA-TEMP-014', location: 'Warehouse West', temp: 8.1, hum: 41, batt: 64, status: 'Warning', last: '5m ago' },
  { name: 'VEGA-TEMP-122', location: 'Clinical Fridge', temp: 12.8, hum: 55, batt: 23, status: 'Critical', last: '1m ago' },
  { name: 'VEGA-TEMP-088', location: 'Server Room', temp: 28.3, hum: 37, batt: 92, status: 'Normal', last: 'Now' },
  { name: 'VEGA-TEMP-032', location: 'R&D Chamber', temp: 0.6, hum: 60, batt: 48, status: 'Offline', last: '1h ago' },
];

const statusColor = {
  Normal: '#2DAA4F',
  Warning: '#F5A623',
  Critical: '#D63B3B',
  Offline: '#7B8797',
};

const DeviceTable = () => {
  return (
    <section className="bg-white rounded-md shadow-[0_4px_14px_rgba(0,0,0,0.07)] overflow-hidden">
      <div className="px-5 py-4 border-b border-[#D8DFEA] flex items-center justify-between">
        <h3 className="text-[#1B1D22] font-semibold">Live Devices</h3>
        <div className="text-sm text-[#5D6471]">Auto-refreshing</div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-[#5D6471] border-b border-[#D8DFEA]">
              <th className="px-5 py-3 font-medium">Device Name</th>
              <th className="px-5 py-3 font-medium">Location</th>
              <th className="px-5 py-3 font-medium">Temperature</th>
              <th className="px-5 py-3 font-medium">Humidity</th>
              <th className="px-5 py-3 font-medium">Battery %</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Last Seen</th>
              <th className="px-5 py-3 font-medium">View</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.name}
                className="border-b border-[#D8DFEA] hover:bg-[#FAFCFF] transition hover:shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
                <td className="px-5 py-3 font-medium text-[#1B1D22]">{r.name}</td>
                <td className="px-5 py-3 text-[#1B1D22]">{r.location}</td>
                <td className="px-5 py-3 text-[#1B1D22]">{r.temp.toFixed(1)}°C</td>
                <td className="px-5 py-3 text-[#1B1D22]">{r.hum}%</td>
                <td className="px-5 py-3 text-[#1B1D22]">{r.batt}%</td>
                <td className="px-5 py-3 text-[#1B1D22]">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: statusColor[r.status] }} />
                    {r.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-[#5D6471]">{r.last}</td>
                <td className="px-5 py-3">
                  <button className="text-[#5064D8] hover:underline">Open</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DeviceTable;
