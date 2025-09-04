"use client"
import React, { useState } from "react";
import { Menu, X, Facebook, Instagram, Search, User } from "lucide-react";

interface MobileNavProps {
  navItems: string[];
}

export default function MobileNav({ navItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 ring-1 ring-white/30 backdrop-blur-sm cursor-pointer"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={toggleMenu}
        />

        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#9E6F60]">
                  <span className="text-lg font-black tracking-tight text-white">hb</span>
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold uppercase tracking-widest text-gray-900">HotAir</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600">Balloons Luxor</p>
                </div>
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                aria-label="Close menu"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 p-6">
              <ul className="space-y-4">
                {navItems.map((item, i) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${i === 0
                        ? 'bg-[#9E6F60] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Links & Actions */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-4 mb-4">
                <a href="#" aria-label="Facebook" className="p-2 rounded-lg hover:bg-gray-100">
                  <Facebook size={20} className="text-gray-600" />
                </a>
                <a href="#" aria-label="Instagram" className="p-2 rounded-lg hover:bg-gray-100">
                  <Instagram size={20} className="text-gray-600" />
                </a>
                <button aria-label="Search" className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <Search size={20} className="text-gray-600" />
                </button>
                <button aria-label="Account" className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <User size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Contact Info */}
              <div className="text-center text-sm text-gray-600">
                <p>+123 456 789</p>
                <p>info@hotairballoonsluxor.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
