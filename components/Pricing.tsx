import React from 'react';
import { Check, Truck, Gift, Shield } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="offer" className="bg-slate-900 py-24 px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            不要等到體重計的數字<br/>再次失控才後悔。
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            現在就開始，把「不反彈的秩序」喝回來。
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center lg:items-stretch mb-20">
          
          {/* Plan A */}
          <div className="bg-white rounded-2xl p-8 lg:my-8 text-slate-800 shadow-xl opacity-90 hover:opacity-100 transition-opacity">
             <div className="mb-4">
               <h3 className="text-xl font-bold">方案 A：輕盈體驗組</h3>
               <p className="text-sm text-slate-500">入門門檻</p>
             </div>
             <div className="mb-6">
               <p className="text-4xl font-black text-slate-800">$1,380</p>
               <p className="text-sm text-slate-500 line-through">原價 $1,680</p>
               <p className="text-xs text-slate-500 mt-1">平均 $98/包</p>
             </div>
             <div className="border-t border-slate-200 pt-6 space-y-3 mb-8">
               <div className="flex items-center"><Check size={18} className="text-slate-400 mr-2"/> 1 盒 (14包)</div>
               <div className="flex items-center text-slate-400"><span className="text-xs bg-slate-200 px-2 py-0.5 rounded mr-2">運費</span> 需自付 $80</div>
             </div>
             <button className="w-full py-3 border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
               選擇此方案
             </button>
          </div>

          {/* Plan B - HERO */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-orange-500/20 transform md:scale-105 border-4 border-orange-500 relative z-10">
             <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
               🏆 80% 用戶選擇此方案
             </div>
             <div className="absolute top-4 right-4">
               <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded border border-yellow-200">藥師推薦</span>
             </div>

             <div className="mb-6 mt-2">
               <h3 className="text-2xl font-bold text-orange-600">方案 B：28天代謝重建組</h3>
               <p className="text-sm text-slate-500 font-medium">決心調整體質、不想復胖的人</p>
             </div>
             <div className="mb-8 p-4 bg-orange-50 rounded-xl">
               <div className="flex items-end mb-1">
                 <p className="text-5xl font-black text-slate-900">$2,600</p>
                 <span className="text-sm text-orange-600 font-bold ml-2 mb-2 bg-orange-200 px-2 rounded">現省 $760</span>
               </div>
               <p className="text-sm text-slate-500 line-through">原價 $3,360</p>
               <div className="flex items-center mt-3 text-orange-700 font-bold text-sm">
                 <span className="mr-2">🔥</span> 平均一餐只要 $93
               </div>
             </div>
             <div className="border-t border-slate-200 pt-6 space-y-4 mb-8">
               <div className="flex items-center"><Check size={20} className="text-green-500 mr-2"/> 2 盒 (28包)｜口味任選</div>
               <div className="flex items-center font-bold text-slate-800"><Truck size={20} className="text-green-500 mr-2"/> 本島免運費</div>
               <div className="flex items-start text-blue-600 font-bold bg-blue-50 p-2 rounded-lg">
                 <Gift size={20} className="mr-2 mt-0.5 flex-shrink-0"/> 
                 <span>贈送：藥師線上飲食諮詢一次</span>
               </div>
             </div>
             <button className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 hover:shadow-orange-500/40 transition-all text-lg">
               立即啟動 28 天計畫
             </button>
          </div>

          {/* Plan C */}
          <div className="bg-white rounded-2xl p-8 lg:my-8 text-slate-800 shadow-xl opacity-90 hover:opacity-100 transition-opacity">
             <div className="mb-4">
               <h3 className="text-xl font-bold">方案 C：雙月囤貨組</h3>
               <p className="text-sm text-slate-500">長期保養、家人共享</p>
             </div>
             <div className="mb-6">
               <p className="text-4xl font-black text-slate-800">$5,000</p>
               <p className="text-xs text-slate-500 mt-1">平均 $89/包</p>
             </div>
             <div className="border-t border-slate-200 pt-6 space-y-3 mb-8">
               <div className="flex items-center"><Check size={18} className="text-slate-400 mr-2"/> 4 盒 (56包)</div>
               <div className="flex items-center font-bold text-slate-700"><Truck size={18} className="text-slate-400 mr-2"/> 免運費</div>
             </div>
             <button className="w-full py-3 border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
               選擇此方案
             </button>
          </div>

        </div>

        {/* Final CTA */}
        <div className="text-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xl md:text-2xl font-black py-6 px-12 rounded-full shadow-[0_0_40px_-10px_rgba(249,115,22,0.6)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.8)] hover:scale-105 transition-all duration-300 animate-pulse">
               👉 立即啟動 28 天計畫 (免運優惠中)
            </button>
            <p className="text-slate-400 mt-6 text-sm flex items-center justify-center">
              <Shield size={16} className="mr-2" />
              安心保證：藥局實體通路同步販售，品質有保障
            </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;