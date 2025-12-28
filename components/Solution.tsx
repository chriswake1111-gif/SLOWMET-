import React from 'react';
import { Shield, Hourglass, Flame, Star, Quote } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      
      {/* Intro Reveal */}
      <div className="container mx-auto max-w-5xl mb-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             <div className="relative">
               {/* 
                 修改說明：
                 圖片來源已更改為 '/slowmet_ingredients.jpg'。
                 請確認您已將圖片命名為 slowmet_ingredients.jpg 並放入 public 資料夾中。
               */}
               <img 
                src="/slowmet_ingredients.jpg" 
                alt="SLOWMET® 實體沖泡圖與成分示意 - 燕麥、可可豆與茶葉" 
                className="rounded-3xl shadow-2xl object-cover aspect-square"
               />
               <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-tr-3xl rounded-bl-3xl shadow-lg">
                 <p className="text-sm font-bold tracking-widest uppercase text-orange-400">Concept</p>
                 <p className="text-xl font-bold">精密的節拍器</p>
               </div>
             </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
             <h2 className="text-3xl md:text-4xl font-black text-slate-900">
               SLOWMET® 代謝節奏飲<br/>
               幫身體找回秩序。
             </h2>
             <p className="text-lg text-slate-600 leading-relaxed">
               我們不想做一杯充滿香精的化學奶昔。<br/><br/>
               這是一杯由藥師親研，融合<span className="bg-orange-100 text-orange-800 font-bold px-1">「植物雙蛋白」</span>與<span className="bg-blue-100 text-blue-800 font-bold px-1">「高纖維矩陣」</span>的機能飲品。它像一個精密的節拍器，幫混亂的身體找回穩定的運作節奏。
             </p>
          </div>
        </div>
      </div>

      {/* Mechanism 3 Columns */}
      <div className="bg-slate-50 py-16 rounded-[3rem] container mx-auto mb-24">
         <div className="text-center mb-12">
           <span className="text-blue-600 font-bold tracking-widest uppercase">The Mechanism</span>
           <h3 className="text-3xl font-bold text-slate-900 mt-2">獨家機轉與成分解密</h3>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
            
            {/* Mechanism 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 rotate-3 hover:rotate-6 transition-transform">
                <Shield size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">隱形肌肉盔甲</h4>
              <p className="text-sm text-slate-500 font-bold mb-4">嚴選非基改大豆蛋白 + 碗豆蛋白</p>
              <p className="text-slate-600 leading-relaxed text-sm">
                很多人瘦不下來是因為「吃不夠」！我們採用雙重植物蛋白，補充肌肉流失所需的原料。特別適合正在進行飲食管理或<span className="font-bold underline decoration-blue-400">停止使用高強度手段（如打針）</span>後的營養銜接，守住代謝火種。
              </p>
            </div>

            {/* Mechanism 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 -rotate-3 hover:-rotate-6 transition-transform">
                <Hourglass size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">物理性飽足矩陣</h4>
              <p className="text-sm text-slate-500 font-bold mb-4">葫蘆巴籽 + 難消化性麥芽糊精</p>
              <p className="text-slate-600 leading-relaxed text-sm">
                來自天然植物的「吸水纖維」，沖泡後會微微膨脹，提供紮實的物理性飽足感（4hr 續航力）。這不是靠意志力忍耐，而是讓身體自然感到「夠了」。
              </p>
            </div>

            {/* Mechanism 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6 rotate-3 hover:rotate-6 transition-transform">
                <Flame size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">代謝點火與管理</h4>
              <p className="text-sm text-slate-500 font-bold mb-4">天然酵母 B 群 + 白腎豆萃取</p>
              <p className="text-slate-600 leading-relaxed text-sm">
                B 群如同點火器，協助能量轉換；白腎豆則是你的守門員，幫你應對多餘的負擔。讓每一口營養都轉化為活力，而不是囤積物。
              </p>
            </div>

         </div>
      </div>

      {/* Taste & Quality */}
      <div className="container mx-auto max-w-4xl mb-24 px-6 text-center">
         <h3 className="text-2xl font-bold text-slate-900 mb-8">這是喝得到的真材實料</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
            <div className="text-left space-y-4">
              <p className="text-slate-700">
                也許你會發現 SLOWMET® 喝起來帶有一點<span className="font-bold bg-yellow-100">「穀物的沙沙感」</span>，那不是未溶解的粉末，而是滿滿的膳食纖維與天然植萃。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <span className="text-red-500 mr-2 font-bold">❌</span> 拒絕死甜：沒有噁心的代糖味
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="text-green-500 mr-2 font-bold">🍵</span> 大人系口味：靜岡抹茶、鐵觀音、醇黑可可
                </li>
              </ul>
            </div>
            <div>
               <div className="grid grid-cols-3 gap-2">
                 <div className="bg-green-800 h-24 rounded-lg flex items-center justify-center text-white text-xs font-bold">靜岡抹茶</div>
                 <div className="bg-amber-900 h-24 rounded-lg flex items-center justify-center text-white text-xs font-bold">鐵觀音</div>
                 <div className="bg-slate-900 h-24 rounded-lg flex items-center justify-center text-white text-xs font-bold">醇黑可可</div>
               </div>
               <p className="text-xs text-slate-500 mt-2">每一口都像在喝現泡飲品，耐喝、順口</p>
            </div>
         </div>
      </div>

      {/* Trust Stacking */}
      <div className="bg-blue-50 py-10 mb-24">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-lg font-bold text-blue-900 mb-6">來自藥師團隊的堅持</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <span className="px-4 py-2 bg-white rounded-full text-blue-800 font-medium shadow-sm">💊 無西藥、無番瀉葉</span>
            <span className="px-4 py-2 bg-white rounded-full text-blue-800 font-medium shadow-sm">👨‍⚕️ 藥師全程監製</span>
            <span className="px-4 py-2 bg-white rounded-full text-blue-800 font-medium shadow-sm">🛡️ HACCP / SGS 雙重認證</span>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="container mx-auto max-w-6xl px-6">
        <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">使用者真實心聲</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Review 1 */}
          <div className="bg-slate-50 p-8 rounded-2xl relative">
            <Quote className="absolute top-6 left-6 text-slate-200 fill-slate-200 w-12 h-12" />
            <div className="relative z-10 pt-6">
              <div className="flex text-yellow-400 mb-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <h4 className="font-bold text-lg mb-2">停藥後的救星！</h4>
              <p className="text-slate-600 text-sm mb-6">
                之前靠打針瘦很快，但一停藥食慾就反撲。藥師推薦我喝這個銜接，真的很有飽足感！重點是抹茶口味很好喝，完全沒有怪味...
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">林小姐 (34歲)</p>
                <p className="text-xs text-slate-500">行政人員</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-slate-50 p-8 rounded-2xl relative">
            <Quote className="absolute top-6 left-6 text-slate-200 fill-slate-200 w-12 h-12" />
            <div className="relative z-10 pt-6">
              <div className="flex text-yellow-400 mb-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <h4 className="font-bold text-lg mb-2">忙碌上班族的代餐首選</h4>
              <p className="text-slate-600 text-sm mb-6">
                以前忙起來都亂吃超商麵包，下午就愛睏。改喝 SLOWMET® 當午餐後，精神變很好，那種『紮實的飽足感』可以撐到晚餐都不餓。
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">陳先生 (40歲)</p>
                <p className="text-xs text-slate-500">業務主管</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-slate-50 p-8 rounded-2xl relative">
            <Quote className="absolute top-6 left-6 text-slate-200 fill-slate-200 w-12 h-12" />
            <div className="relative z-10 pt-6">
              <div className="flex text-yellow-400 mb-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <h4 className="font-bold text-lg mb-2">不愛喝甜的我也能接受</h4>
              <p className="text-slate-600 text-sm mb-6">
                我很怕市面上那種甜死人的奶昔。這款可可口味只有淡淡的甜，喝得到穀物的口感，感覺很天然。現在便便也很順暢。
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">張媽媽 (52歲)</p>
                <p className="text-xs text-slate-500">家庭主婦</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;