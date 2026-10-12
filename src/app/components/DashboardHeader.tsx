import React from 'react';
import { RefreshCw, Download, Calendar } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
      <div>
        <h1 className="page-title">Operations Overview</h1>
        <p style={{ fontSize: 13.5, color: 'var(--muted-foreground)', marginTop: 3 }}>
          Madras Flavours Kitchens · All Locations · 11 Oct 2026
        </p>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <div
          className="flex items-center gap-1.5 rounded-lg border px-3 py-2"
          style={{ borderColor: 'var(--border)', background: 'var(--card)', fontSize: 13 }}
        >
          <Calendar size={14} style={{ color: 'var(--muted-foreground)' }} />
          <span style={{ color: 'var(--foreground)', fontWeight: 500 }}>Last 14 days</span>
        </div>
        <button className="btn-secondary" style={{ padding: '8px 12px' }}>
          <Download size={14} />
          Export
        </button>
        <button className="btn-primary" style={{ padding: '8px 12px' }}>
          <RefreshCw size={14} />
          Refresh
        </button>
      </div>
    </div>
  );
}