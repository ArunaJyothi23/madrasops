import React from 'react';
import { TrendingDown, Package, AlertTriangle, Clock, Truck, FlaskConical, Zap, ArrowUpRight, ArrowDownRight,  } from 'lucide-react';

// Grid plan: 8 cards → grid-cols-4 → row1: hero(2 cols) + 2 regular, row2: 4 regular
// hero = Food Cost % (North Star), spans 2 cols

const metrics = [
  {
    id: 'metric-food-cost',
    label: 'Food Cost %',
    value: '31.4%',
    subValue: 'Target: 30%',
    trend: '+1.4pp vs last week',
    trendDir: 'up-bad',
    icon: <TrendingDown size={20} />,
    cardClass: 'metric-card-alert',
    iconBg: '#FEE2E2',
    iconColor: '#991B1B',
    hero: true,
    note: 'Above target — 4 locations',
  },
  {
    id: 'metric-stock-val',
    label: 'Total Stock Valuation',
    value: '£4,821',
    subValue: 'Across all locations',
    trend: '+£312 vs yesterday',
    trendDir: 'up-good',
    icon: <Package size={18} />,
    cardClass: 'metric-card',
    iconBg: '#DBEAFE',
    iconColor: '#1E40AF',
    hero: false,
  },
  {
    id: 'metric-epos-sales',
    label: "Today\'s EPOS Sales",
    value: '£3,248',
    subValue: '247 orders processed',
    trend: '+18% vs yesterday',
    trendDir: 'up-good',
    icon: <Zap size={18} />,
    cardClass: 'metric-card-success',
    iconBg: '#DCFCE7',
    iconColor: '#166534',
    hero: false,
  },
  {
    id: 'metric-wastage',
    label: 'Wastage Value (Today)',
    value: '£87.40',
    subValue: '2.7% of sales',
    trend: '+£22 vs avg',
    trendDir: 'up-bad',
    icon: <AlertTriangle size={18} />,
    cardClass: 'metric-card-alert',
    iconBg: '#FEE2E2',
    iconColor: '#991B1B',
    hero: false,
  },
  {
    id: 'metric-near-expiry',
    label: 'Near-Expiry Batches',
    value: '7',
    subValue: 'Expiring within 3 days',
    trend: '3 within 24 hours',
    trendDir: 'up-bad',
    icon: <Clock size={18} />,
    cardClass: 'metric-card-warning',
    iconBg: '#FEF3C7',
    iconColor: '#92400E',
    hero: false,
  },
  {
    id: 'metric-in-transit',
    label: 'Stock in Transit',
    value: '£642',
    subValue: '3 dispatches active',
    trend: '2 due today',
    trendDir: 'neutral',
    icon: <Truck size={18} />,
    cardClass: 'metric-card-transit',
    iconBg: '#EDE9FE',
    iconColor: '#5B21B6',
    hero: false,
  },
  {
    id: 'metric-production',
    label: 'Active Production Batches',
    value: '5',
    subValue: '2 pending approval',
    trend: 'Avg yield 94.2%',
    trendDir: 'neutral',
    icon: <FlaskConical size={18} />,
    cardClass: 'metric-card',
    iconBg: '#DBEAFE',
    iconColor: '#1E40AF',
    hero: false,
  },
  {
    id: 'metric-unmapped',
    label: 'Unmapped EPOS Items',
    value: '12',
    subValue: 'Stock not deducted',
    trend: '3 high-volume items',
    trendDir: 'up-bad',
    icon: <AlertTriangle size={18} />,
    cardClass: 'metric-card-alert',
    iconBg: '#FEE2E2',
    iconColor: '#991B1B',
    hero: false,
  },
];

function TrendChip({ dir, text }: { dir: string; text: string }) {
  if (dir === 'up-bad')
    return (
      <span className="flex items-center gap-0.5" style={{ fontSize: 11.5, color: '#991B1B', fontWeight: 600 }}>
        <ArrowUpRight size={12} /> {text}
      </span>
    );
  if (dir === 'up-good')
    return (
      <span className="flex items-center gap-0.5" style={{ fontSize: 11.5, color: '#166534', fontWeight: 600 }}>
        <ArrowUpRight size={12} /> {text}
      </span>
    );
  if (dir === 'down-good')
    return (
      <span className="flex items-center gap-0.5" style={{ fontSize: 11.5, color: '#166534', fontWeight: 600 }}>
        <ArrowDownRight size={12} /> {text}
      </span>
    );
  return <span style={{ fontSize: 11.5, color: 'var(--muted-foreground)' }}>{text}</span>;
}

export default function MetricsBentoGrid() {
  const hero = metrics.find((m) => m.hero)!;
  const rest = metrics.filter((m) => !m.hero);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
      {/* Hero card — spans 2 cols */}
      <div className={`${hero.cardClass} col-span-1 md:col-span-2 flex flex-col justify-between`} style={{ minHeight: 140 }}>
        <div className="flex items-start justify-between">
          <div>
            <p className="label-text" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {hero.label}
            </p>
            <div className="metric-value mt-1" style={{ fontSize: 40 }}>
              {hero.value}
            </div>
            <p style={{ fontSize: 12.5, color: 'var(--muted-foreground)', marginTop: 4 }}>{hero.subValue}</p>
          </div>
          <div
            className="rounded-xl flex items-center justify-center shrink-0"
            style={{ width: 44, height: 44, background: hero.iconBg, color: hero.iconColor }}
          >
            {hero.icon}
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <TrendChip dir={hero.trendDir} text={hero.trend} />
          <span
            className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
            style={{ background: '#FEE2E2', color: '#991B1B', fontSize: 11 }}
          >
            {hero.note}
          </span>
        </div>
      </div>

      {/* Remaining 6 cards */}
      {rest.map((m) => (
        <div key={m.id} className={`${m.cardClass} flex flex-col justify-between`} style={{ minHeight: 120 }}>
          <div className="flex items-start justify-between">
            <p className="label-text" style={{ fontSize: 11.5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {m.label}
            </p>
            <div
              className="rounded-lg flex items-center justify-center shrink-0"
              style={{ width: 34, height: 34, background: m.iconBg, color: m.iconColor }}
            >
              {m.icon}
            </div>
          </div>
          <div>
            <div className="metric-value mt-1" style={{ fontSize: 26 }}>
              {m.value}
            </div>
            <p style={{ fontSize: 11.5, color: 'var(--muted-foreground)', marginTop: 2 }}>{m.subValue}</p>
            <div className="mt-2">
              <TrendChip dir={m.trendDir} text={m.trend} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}