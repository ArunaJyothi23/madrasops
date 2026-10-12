import React from 'react';
import { AlertTriangle, Clock, Package, Zap } from 'lucide-react';

const alerts = [
  {
    id: 'alert-001',
    type: 'expiry',
    severity: 'critical',
    icon: <Clock size={14} />,
    title: 'Dosa batter expiring',
    detail: 'Batch PB-2024-0108 · Hounslow · Expires 12 Oct',
    time: '12 hrs left',
    color: '#991B1B',
    bg: '#FEE2E2',
  },
  {
    id: 'alert-002',
    type: 'expiry',
    severity: 'critical',
    icon: <Clock size={14} />,
    title: 'Sambar expiring',
    detail: 'Batch PB-2024-0109 · Reading · Expires 12 Oct',
    time: '14 hrs left',
    color: '#991B1B',
    bg: '#FEE2E2',
  },
  {
    id: 'alert-003',
    type: 'expiry',
    severity: 'critical',
    icon: <Clock size={14} />,
    title: 'White chutney expiring',
    detail: 'Batch PB-2024-0105 · Dartford · Expires 12 Oct',
    time: '18 hrs left',
    color: '#991B1B',
    bg: '#FEE2E2',
  },
  {
    id: 'alert-004',
    type: 'low-stock',
    severity: 'warning',
    icon: <Package size={14} />,
    title: 'Dosa batter low stock',
    detail: 'Hounslow · 1.2 kg remaining · Reorder at 3 kg',
    time: 'Est. 2 hrs coverage',
    color: '#92400E',
    bg: '#FEF3C7',
  },
  {
    id: 'alert-005',
    type: 'low-stock',
    severity: 'warning',
    icon: <Package size={14} />,
    title: 'Red chutney low stock',
    detail: 'Leicester · 0.3 kg remaining',
    time: 'Est. 3 hrs coverage',
    color: '#92400E',
    bg: '#FEF3C7',
  },
  {
    id: 'alert-006',
    type: 'unmapped',
    severity: 'warning',
    icon: <Zap size={14} />,
    title: 'Unmapped: Chilli Paneer',
    detail: 'Hounslow · 14 orders today · No recipe active',
    time: 'Stock not deducted',
    color: '#92400E',
    bg: '#FEF3C7',
  },
  {
    id: 'alert-007',
    type: 'discrepancy',
    severity: 'warning',
    icon: <AlertTriangle size={14} />,
    title: 'GRN #GRN-0089 discrepancy',
    detail: 'Reading · Idly batter 2 kg short',
    time: 'Pending manager approval',
    color: '#92400E',
    bg: '#FEF3C7',
  },
];

export default function AlertsPanel() {
  return (
    <div className="card-elevated h-full" style={{ padding: 20 }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="section-header">Active Alerts</h2>
        <span
          className="rounded-full px-2.5 py-0.5 font-bold text-white"
          style={{ fontSize: 11, background: 'var(--primary)' }}
        >
          {alerts?.length}
        </span>
      </div>
      <div className="space-y-2">
        {alerts?.map((alert) => (
          <div
            key={alert?.id}
            className="rounded-lg p-3 flex items-start gap-3 cursor-pointer transition-opacity hover:opacity-80"
            style={{ background: alert?.bg }}
          >
            <div
              className="shrink-0 rounded-md flex items-center justify-center mt-0.5"
              style={{ width: 26, height: 26, background: alert?.color, color: '#fff' }}
            >
              {alert?.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate" style={{ fontSize: 12.5, color: 'var(--foreground)' }}>
                {alert?.title}
              </p>
              <p className="truncate" style={{ fontSize: 11.5, color: 'var(--muted-foreground)', marginTop: 1 }}>
                {alert?.detail}
              </p>
              <p className="font-semibold" style={{ fontSize: 11, color: alert?.color, marginTop: 2 }}>
                {alert?.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="w-full mt-4 text-center py-2 rounded-lg text-sm font-medium transition-colors hover:bg-muted"
        style={{ fontSize: 12.5, color: 'var(--primary)', border: '1px solid var(--border)' }}
      >
        View all alerts →
      </button>
    </div>
  );
}