import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const salesData = [
  { year: '2021-22', value: 1800 },
  { year: '2022-23', value: 2400 },
  { year: '2023-24', value: 3200 },
  { year: '2024-25', value: 4100 },
  { year: '2025-26', value: 5200 },
  { year: '2026-27', value: 6700 },
];

const capacityData = [
  { name: 'Gabriel - Parwanoo', value: 33 },
  { name: 'Gabriel - Other', value: 17 },
  { name: 'Hitachi Astemo', value: 16 },
  { name: 'Free Capacity', value: 34 },
];

const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#10b981'];

const productionData = [
  { name: 'Eyelet', current: 7, spare: 4 },
  { name: 'Spring Seat', current: 4, spare: 7 },
  { name: 'Sleeve', current: 7, spare: 5 },
];

export default function Analytics() {
  return (
    <section id="analytics" style={{ padding: "5rem 0", background: "white" }}>
      <div className="container">
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-tag">Data & Analytics</div>
          <h2 className="section-h2">Corporate <span className="accent">Performance</span></h2>
          <div className="divider" style={{ margin: "1.2rem auto" }}></div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          <div className="fade-up" style={{ background: "var(--gray-50)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--gray-200)" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--blue-dark)", marginBottom: "1.5rem" }}>Sales Projection (Lakhs)</h3>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={salesData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }} />
                  <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, fill: "#2563eb" }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="fade-up" style={{ background: "var(--gray-50)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--gray-200)" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--blue-dark)", marginBottom: "1.5rem" }}>Customer Wise Capacity</h3>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={capacityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {capacityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }} />
                  <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '12px' }}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="fade-up" style={{ background: "var(--gray-50)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--gray-200)" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--blue-dark)", marginBottom: "1.5rem" }}>Production Capacity Analysis</h3>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={productionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }} />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="current" name="Current Production" stackId="a" fill="#3b82f6" radius={[0, 0, 4, 4]} />
                <Bar dataKey="spare" name="Spare Capacity" stackId="a" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
}
