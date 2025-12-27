import React from 'react';
import { BatteryWarning, TrendingDown, Activity } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="bg-slate-200 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 leading-snug">
            為什麼你明明吃得很少，<br/>
            體重卻還是卡關，甚至越來越重？
          </h2>
          <p className="text-xl text-slate-600 font-medium bg-white/50 py-2 px-4 rounded-lg inline-block">
            問題不在你的意志力，而是你身體的「代謝節奏」亂了套。
          </p>
        </div>

        {/* 3 Pain Points Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-red-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6 mx-auto">
              <BatteryWarning size={32} />
            </div>
            <h3 className="text-xl font-bold text-center text-slate-900 mb-4">節食的惡性循環</h3>
            <div className="text-red-600 font-bold text-center mb-4 text-sm tracking-wide uppercase">身體開啟「省電模式」</div>
            <p className="text-slate-600 leading-relaxed">
              為了瘦身，你戒澱粉、甚至斷食？身體以為鬧飢荒，為了生存會自動降低基礎代謝。結果就是：只要一恢復正常吃，熱量立刻加倍囤積成脂肪。
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-orange-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6 mx-auto">
              <Activity size={32} />
            </div>
            <h3 className="text-xl font-bold text-center text-slate-900 mb-4">血糖的雲霄飛車</h3>
            <div className="text-orange-600 font-bold text-center mb-4 text-sm tracking-wide uppercase">吃錯東西，越吃越餓</div>
            <p className="text-slate-600 leading-relaxed">
              早餐隨便吃、下午手搖飲？高 GI 飲食讓血糖飆升，胰島素忙著合成脂肪，隨後血糖驟降讓你感到疲倦、嘴饞。這不是貪吃，是身體發出的求救訊號。
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-blue-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 mx-auto">
              <TrendingDown size={32} />
            </div>
            <h3 className="text-xl font-bold text-center text-slate-900 mb-4">無聲的肌肉流失</h3>
            <div className="text-blue-600 font-bold text-center mb-4 text-sm tracking-wide uppercase">體重降了，肉卻鬆了</div>
            <p className="text-slate-600 leading-relaxed">
              依靠藥物抑制食慾，或者長期營養攝取不足（蛋白質不夠），你減掉的很可能不是脂肪，而是珍貴的肌肉。肌肉流失 = 易胖體質的開始，這就是復胖的元兇。
            </p>
          </div>

        </div>

        {/* Transition Quote */}
        <div className="text-center max-w-4xl mx-auto border-y-2 border-slate-300/50 py-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            「你需要的不只是少吃，<br className="md:hidden" />而是給身體『對的訊號』。」
          </h3>
          <p className="text-lg text-slate-600">
            如果有一種方法，能讓你在忙碌中輕鬆攝取足夠營養，<br className="hidden md:block" />穩住肌肉、撫平飢餓，重新掌握身體的主控權...
          </p>
        </div>

      </div>
    </section>
  );
};

export default Problem;