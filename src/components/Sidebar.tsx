'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import { LayoutDashboard, FlaskConical, Truck, PackageCheck, ShoppingCart, BarChart3, Settings, Users, FileText, ChevronLeft, ChevronRight, Layers, Zap, AlertTriangle, ClipboardList, TrendingUp, Package, GitBranch,  } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: number;
  badgeVariant?: 'alert' | 'warning' | 'info';
}

interface NavGroup {
  id: string;
  label: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    id: 'nav-group-main',
    label: 'Overview',
    items: [
      {
        id: 'nav-dashboard',
        label: 'Overview Dashboard',
        href: '/',
        icon: <LayoutDashboard size={17} />,
      },
    ],
  },
  {
    id: 'nav-group-kitchen',
    label: 'Central Kitchen',
    items: [
      {
        id: 'nav-production-batches',
        label: 'Production Batches',
        href: '/production-batches',
        icon: <FlaskConical size={17} />,
        badge: 3,
        badgeVariant: 'info',
      },
      {
        id: 'nav-dispatch',
        label: 'Dispatch Management',
        href: '/dispatch-management',
        icon: <Truck size={17} />,
        badge: 2,
        badgeVariant: 'warning',
      },
    ],
  },
  {
    id: 'nav-group-restaurant',
    label: 'Restaurant Ops',
    items: [
      {
        id: 'nav-goods-received',
        label: 'Goods Received',
        href: '/goods-received',
        icon: <PackageCheck size={17} />,
        badge: 1,
        badgeVariant: 'alert',
      },
      {
        id: 'nav-epos-orders',
        label: 'EPOS Orders',
        href: '/epos-orders',
        icon: <ShoppingCart size={17} />,
      },
      {
        id: 'nav-inventory',
        label: 'Inventory',
        href: '/inventory',
        icon: <Package size={17} />,
      },
      {
        id: 'nav-wastage',
        label: 'Wastage',
        href: '/wastage',
        icon: <AlertTriangle size={17} />,
        badge: 4,
        badgeVariant: 'alert',
      },
    ],
  },
  {
    id: 'nav-group-costing',
    label: 'Costing & Profitability',
    items: [
      {
        id: 'nav-recipe-costing',
        label: 'Recipe Costing',
        href: '/recipe-costing',
        icon: <TrendingUp size={17} />,
      },
      {
        id: 'nav-profitability',
        label: 'Profitability',
        href: '/profitability',
        icon: <BarChart3 size={17} />,
      },
    ],
  },
  {
    id: 'nav-group-trace',
    label: 'Traceability',
    items: [
      {
        id: 'nav-batch-genealogy',
        label: 'Batch Genealogy',
        href: '/batch-genealogy',
        icon: <GitBranch size={17} />,
      },
      {
        id: 'nav-traceability',
        label: 'Product Journey',
        href: '/product-journey',
        icon: <Layers size={17} />,
      },
    ],
  },
  {
    id: 'nav-group-admin',
    label: 'Administration',
    items: [
      {
        id: 'nav-reports',
        label: 'Reports & Analytics',
        href: '/reports-analytics',
        icon: <FileText size={17} />,
      },
      {
        id: 'nav-integrations',
        label: 'Integrations & EPOS',
        href: '/integrations-epos',
        icon: <Zap size={17} />,
      },
      {
        id: 'nav-users',
        label: 'Users & Permissions',
        href: '/users-permissions',
        icon: <Users size={17} />,
      },
      {
        id: 'nav-audit',
        label: 'Audit Logs',
        href: '/audit-logs',
        icon: <ClipboardList size={17} />,
      },
      {
        id: 'nav-settings',
        label: 'Settings',
        href: '/settings',
        icon: <Settings size={17} />,
      },
    ],
  },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  const getBadgeClass = (variant?: string) => {
    if (variant === 'alert') return 'bg-red-500 text-white';
    if (variant === 'warning') return 'bg-amber-400 text-amber-900';
    return 'bg-blue-500 text-white';
  };

  return (
    <aside
      className="sidebar-transition flex flex-col h-screen fixed left-0 top-0 z-40 overflow-hidden"
      style={{
        width: collapsed ? 64 : 240,
        backgroundColor: 'var(--sidebar-bg)',
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center border-b shrink-0"
        style={{
          height: 60,
          borderColor: 'rgba(255,255,255,0.08)',
          padding: collapsed ? '0 14px' : '0 16px',
          justifyContent: collapsed ? 'center' : 'space-between',
        }}
      >
        {!collapsed && (
          <div className="flex items-center gap-2 min-w-0">
            <AppLogo size={30} />
            <div className="min-w-0">
              <div
                className="font-bold truncate"
                style={{ fontSize: 13, color: 'var(--sidebar-fg)', lineHeight: 1.2 }}
              >
                Madras Flavours
              </div>
              <div
                className="truncate"
                style={{ fontSize: 10, color: 'var(--sidebar-muted)', letterSpacing: '0.04em' }}
              >
                KITCHENS
              </div>
            </div>
          </div>
        )}
        {collapsed && <AppLogo size={28} />}
        {!collapsed && (
          <button
            onClick={onToggle}
            className="shrink-0 rounded-md p-1 transition-colors"
            style={{ color: 'var(--sidebar-muted)' }}
            aria-label="Collapse sidebar"
          >
            <ChevronLeft size={16} />
          </button>
        )}
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-2">
        {navGroups.map((group) => (
          <div key={group.id}>
            {!collapsed && (
              <div className="sidebar-section-label">{group.label}</div>
            )}
            {collapsed && <div style={{ height: 12 }} />}
            {group.items.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href) && item.href !== '#';
              return (
                <div key={item.id} className="px-2">
                  <Link
                    href={item.href}
                    className={`sidebar-item ${isActive ? 'active' : ''}`}
                    style={collapsed ? { justifyContent: 'center', padding: '9px' } : {}}
                    title={collapsed ? item.label : undefined}
                  >
                    <span className="shrink-0">{item.icon}</span>
                    {!collapsed && (
                      <>
                        <span className="flex-1 truncate">{item.label}</span>
                        {item.badge !== undefined && (
                          <span
                            className={`shrink-0 text-2xs font-bold rounded-full px-1.5 py-0.5 ${getBadgeClass(item.badgeVariant)}`}
                            style={{ fontSize: 10, minWidth: 18, textAlign: 'center' }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div
        className="shrink-0 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.08)', padding: '12px 8px' }}
      >
        {!collapsed ? (
          <div className="flex items-center gap-2 px-2">
            <div
              className="shrink-0 rounded-full flex items-center justify-center font-bold text-white"
              style={{ width: 30, height: 30, background: 'var(--primary)', fontSize: 12 }}
            >
              RK
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="font-semibold truncate"
                style={{ fontSize: 12, color: 'var(--sidebar-fg)' }}
              >
                Ravi Kumar
              </div>
              <div style={{ fontSize: 10, color: 'var(--sidebar-muted)' }}>Kitchen Manager</div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div
              className="rounded-full flex items-center justify-center font-bold text-white"
              style={{ width: 30, height: 30, background: 'var(--primary)', fontSize: 12 }}
            >
              RK
            </div>
          </div>
        )}
        {collapsed && (
          <button
            onClick={onToggle}
            className="w-full flex justify-center mt-3 rounded-md p-1 transition-colors"
            style={{ color: 'var(--sidebar-muted)' }}
            aria-label="Expand sidebar"
          >
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </aside>
  );
}