
import React from 'react';
import { SLIDES } from '../constants';
import { Menu, X, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeId: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, activeId }) => {
  return (
    <>
      <button 
        onClick={onToggle}
        className="fixed top-6 left-6 z-50 p-2 bg-[#0B5D3B] text-white rounded-lg shadow-xl md:hidden no-print"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`
        fixed top-0 left-0 h-full w-72 bg-white border-r border-slate-200 z-40 transition-transform duration-300 shadow-2xl no-print
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-8 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0B5D3B] rounded-full flex items-center justify-center text-[#C9A227] font-bold text-xl">
            G
          </div>
          <div>
            <h1 className="text-sm font-bold text-[#0B5D3B]">GTTI RYK</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Institutional Report</p>
          </div>
        </div>

        <nav className="p-4 overflow-y-auto h-[calc(100%-80px)] custom-scrollbar">
          <ul className="space-y-1">
            {SLIDES.map((slide, idx) => (
              <li key={slide.id}>
                <a 
                  href={`#${slide.id}`}
                  onClick={() => window.innerWidth < 768 && onToggle()}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group
                    ${activeId === slide.id 
                      ? 'bg-[#0B5D3B] text-white shadow-md' 
                      : 'text-slate-600 hover:bg-slate-50'}
                  `}
                >
                  <span className={`
                    w-6 h-6 rounded-md flex items-center justify-center text-[10px]
                    ${activeId === slide.id ? 'bg-[#C9A227] text-white' : 'bg-slate-100 text-slate-400'}
                  `}>
                    {idx + 1}
                  </span>
                  <span className="flex-grow truncate">{slide.title}</span>
                  {activeId === slide.id && <ChevronRight size={14} className="text-[#C9A227]" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
