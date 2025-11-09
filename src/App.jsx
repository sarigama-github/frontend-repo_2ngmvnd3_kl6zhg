import React from 'react';
import HeaderBar from './components/HeaderBar';
import Sidebar from './components/Sidebar';
import StatCards from './components/StatCards';
import DeviceTable from './components/DeviceTable';
import InsightsPanel from './components/InsightsPanel';

const App = () => {
  return (
    <div className="min-h-screen bg-[#F4F6FA] text-[#1B1D22]">
      <HeaderBar />
      <div className="mx-auto max-w-[1400px] px-6 py-6 flex gap-6">
        <Sidebar />
        <main className="flex-1 space-y-6">
          <InsightsPanel />
          <StatCards />
          <DeviceTable />
        </main>
      </div>
    </div>
  );
};

export default App;
