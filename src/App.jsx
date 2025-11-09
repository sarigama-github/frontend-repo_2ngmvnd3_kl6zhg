import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Sidebar from './components/Sidebar';
import StatCards from './components/StatCards';
import DeviceTable from './components/DeviceTable';
import InsightsPanel from './components/InsightsPanel';

// Simple internal pages (kept inline to avoid extra files)
const PageShell = ({ title, children, subtitle }) => (
  <div className="space-y-6">
    <div className="rounded-xl p-6 bg-gradient-to-br from-white to-[#F7F9FE] ring-1 ring-[#D8DFEA] shadow-[0_4px_14px_rgba(0,0,0,0.07)]">
      <h1 className="text-2xl font-semibold text-[#1B1D22]">{title}</h1>
      {subtitle && <p className="text-[#5D6471] mt-1">{subtitle}</p>}
    </div>
    {children}
  </div>
);

const LocationsPage = () => (
  <PageShell title="Locations" subtitle="Manage and monitor temperature across all facilities.">
    <div className="bg-white rounded-xl p-5 ring-1 ring-[#D8DFEA] shadow-[0_4px_14px_rgba(0,0,0,0.07)]">
      <div className="text-[#5D6471]">Sample locations list coming soon. This section will include filters, map views, and summary stats.</div>
    </div>
  </PageShell>
);

const DevicesPage = () => (
  <PageShell title="Devices" subtitle="Inventory of all IoT temperature and humidity devices.">
    <DeviceTable />
  </PageShell>
);

const AlertsPage = () => (
  <PageShell title="Alerts" subtitle="Real-time notifications and historical events.">
    <div className="bg-white rounded-xl p-5 ring-1 ring-[#D8DFEA] shadow-[0_4px_14px_rgba(0,0,0,0.07)] space-y-4 max-h-[420px] overflow-auto">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex items-start justify-between gap-4 p-3 rounded-lg hover:bg-[#FAFCFF] border border-[#D8DFEA]/70">
          <div>
            <div className="font-medium text-[#1B1D22]">Temperature threshold exceeded in Clinical Fridge #{i + 1}</div>
            <div className="text-xs text-[#5D6471]">Just now • Lab A</div>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-[#5064D8]/10 text-[#2F3BAF] border border-[#5064D8]/20">Unread</span>
        </div>
      ))}
    </div>
  </PageShell>
);

const ReportsPage = () => (
  <PageShell title="Reports" subtitle="Download compliance-ready temperature reports.">
    <div className="bg-white rounded-xl p-5 ring-1 ring-[#D8DFEA] shadow-[0_4px_14px_rgba(0,0,0,0.07)]">
      <ul className="divide-y divide-[#D8DFEA]">
        {["Daily Summary", "Weekly Compliance", "Monthly Overview"].map((t) => (
          <li key={t} className="flex items-center justify-between py-3">
            <div>
              <div className="font-medium text-[#1B1D22]">{t}</div>
              <div className="text-xs text-[#5D6471]">PDF • {new Date().toLocaleDateString()}</div>
            </div>
            <button className="px-3 py-1.5 rounded-md bg-[#2F3BAF] text-white hover:bg-[#1D2A79] transition shadow">Download</button>
          </li>
        ))}
      </ul>
    </div>
  </PageShell>
);

const SupportPage = () => (
  <PageShell title="Support Tickets" subtitle="Track and manage support issues.">
    <div className="bg-white rounded-xl p-5 ring-1 ring-[#D8DFEA] shadow-[0_4px_14px_rgba(0,0,0,0.07)]">
      <div className="grid gap-3">
        {[{ s: 'Open', c: '#5064D8' }, { s: 'In-progress', c: '#F5A623' }, { s: 'Closed', c: '#7B8797' }].map((st, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-[#D8DFEA] hover:bg-[#FAFCFF]">
            <div>
              <div className="font-medium text-[#1B1D22]">Ticket #{1042 + i} • Sensor drift investigation</div>
              <div className="text-xs text-[#5D6471]">Created {i + 1}d ago</div>
            </div>
            <span className="text-xs px-2 py-1 rounded-full border" style={{ color: st.c, borderColor: st.c + '55', backgroundColor: st.c + '11' }}>{st.s}</span>
          </div>
        ))}
      </div>
    </div>
  </PageShell>
);

const SettingsPage = () => (
  <PageShell title="Settings" subtitle="Organization, notifications, and thresholds.">
    <div className="bg-white rounded-xl p-5 ring-1 ring-[#D8DFEA] shadow-[0_4px_14px_rgba(0,0,0,0.07)] grid gap-4 md:grid-cols-2">
      <div className="p-4 rounded-lg border border-[#D8DFEA]"><div className="font-medium text-[#1B1D22]">Notification Rules</div><div className="text-sm text-[#5D6471]">Email and SMS preferences</div></div>
      <div className="p-4 rounded-lg border border-[#D8DFEA]"><div className="font-medium text-[#1B1D22]">Calibration Windows</div><div className="text-sm text-[#5D6471]">Schedules and reminders</div></div>
      <div className="p-4 rounded-lg border border-[#D8DFEA]"><div className="font-medium text-[#1B1D22]">API Access</div><div className="text-sm text-[#5D6471]">Keys and webhooks</div></div>
      <div className="p-4 rounded-lg border border-[#D8DFEA]"><div className="font-medium text-[#1B1D22]">Branding</div><div className="text-sm text-[#5D6471]">Logo and theme colors</div></div>
    </div>
  </PageShell>
);

const UsersPage = () => (
  <PageShell title="User & Roles" subtitle="Manage access and permissions.">
    <div className="bg-white rounded-xl p-5 ring-1 ring-[#D8DFEA] shadow-[0_4px_14px_rgba(0,0,0,0.07)]">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-[#5D6471] border-b border-[#D8DFEA]">
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {[
            { n: 'Dr. Alice Vega', e: 'alice@vegacalibration.com', r: 'Admin' },
            { n: 'Sam Carter', e: 'sam@vegacalibration.com', r: 'Operator' },
          ].map((u) => (
            <tr key={u.e} className="border-b border-[#D8DFEA] hover:bg-[#FAFCFF]">
              <td className="py-2 text-[#1B1D22]">{u.n}</td>
              <td className="py-2 text-[#5D6471]">{u.e}</td>
              <td className="py-2"><span className="px-2 py-0.5 text-xs rounded-full bg-[#2F3BAF]/10 text-[#2F3BAF] border border-[#5064D8]/20">{u.r}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </PageShell>
);

const DashboardPage = () => (
  <div className="space-y-6">
    <InsightsPanel />
    <StatCards />
    <DeviceTable />
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#F4F6FA] text-[#1B1D22]">
      <HeaderBar />
      <div className="mx-auto max-w-[1400px] px-6 py-6 flex gap-6">
        <Sidebar />
        <main className="flex-1 space-y-6">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/devices" element={<DevicesPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
