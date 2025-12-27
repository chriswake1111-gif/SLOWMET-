import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div>
            <div className="text-2xl font-black text-white mb-4">SLOWMET<span className="text-blue-500">®</span></div>
            <p className="mb-4">藥師親研，幫你找回「不反彈」的身體秩序。</p>
            <div className="flex items-center mb-2 hover:text-white transition-colors cursor-pointer">
               <MessageCircle size={18} className="mr-2" />
               <span className="underline decoration-slate-600">LINE@ 線上藥師客服</span>
            </div>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4 flex items-center">
               <MapPin size={18} className="mr-2 text-blue-500"/> 實體獨家販售：千百岳大藥局 (全台8間)
             </h4>
             <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <li>東勢店</li>
                <li>新社店</li>
                <li>卓蘭店</li>
                <li>北苗店</li>
                <li>後龍店</li>
                <li>巨蛋店</li>
                <li>沙鹿店</li>
                <li>清水店</li>
             </ul>
             <div className="mt-4 flex items-center text-xs">
                <Phone size={14} className="mr-2"/> 客服專線：0800-000-123
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
           <p className="mb-2">
             免責聲明：本產品為營養補充食品，非藥品，不具治療疾病功效。使用成效因個人體質而異。
           </p>
           <p>
             &copy; {new Date().getFullYear()} SLOWMET®. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;