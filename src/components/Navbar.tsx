import React, { useState } from 'react';
import { BUILDERHOOD_CONFIG } from '../config/builderhoodConfig';
import { Menu, X, Database } from 'lucide-react';
import { isSupabaseConfigured } from '../lib/supabase';

interface NavbarProps {
  onOpenDatabaseModal: () => void;
  onApplyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDatabaseModal, onApplyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Collection', href: '#collection' },
    { name: 'Apply', href: '#application' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#080b11]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-slate-900 border border-emerald-500/40 shadow-sm shadow-emerald-500/20 flex items-center justify-center overflow-hidden group-hover:border-emerald-400 group-hover:scale-105 transition-all duration-200 shrink-0">
              <img src="/BuilderHood.png" alt="BuilderHood Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-100 tracking-tight flex items-center gap-2">
                {BUILDERHOOD_CONFIG.name}
              </span>
              <span className="font-mono text-[10px] text-emerald-400 tracking-wider">
                ROBINHOOD CHAIN
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-slate-100 hover:scale-[1.02] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            

            {/* Apply Button */}
            <button
              onClick={onApplyClick}
              className="px-4 py-1.5 rounded-md text-xs font-mono font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors emerald-glow-sm cursor-pointer"
            >
              Apply for WL
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-slate-100 rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0c1017] px-4 pt-2 pb-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDatabaseModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
            >
              <Database className="w-4 h-4 text-emerald-400" />
              <span>{isSupabaseConfigured ? 'Supabase Connected' : 'Setup Supabase SQL'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
              className="w-full py-2.5 rounded-md text-xs font-mono font-semibold bg-emerald-500 text-slate-950 text-center"
            >
              Apply for WL
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
