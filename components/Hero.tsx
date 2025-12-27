import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-slate-50 overflow-hidden py-12 md:py-24 lg:py-32">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 transform origin-top translate-x-12 z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100/80 text-blue-800 px-4 py-1.5 rounded-full w-fit text-sm font-bold border border-blue-200">
              <ShieldCheck size={16} />
              <span>藥師親研・代謝專科</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              別再用「挨餓」<br />
              懲罰你的身體了。
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 font-medium border-l-4 border-orange-500 pl-4 leading-relaxed">
              SLOWMET® 代謝節奏飲：<br className="md:hidden"/>藥師親研，幫你找回「不反彈」的身體秩序。
            </p>

            <div className="space-y-4 text-slate-600">
              <p className="flex items-start">
                <MapPin className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="font-bold text-slate-800">全台 8 間藥局同步販售</span>
              </p>
              <p className="flex items-start">
                <CheckCircle2 className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span>單包 20g 雙植物蛋白 + 10g 飽足高纖</span>
              </p>
              <p className="flex items-start">
                <CheckCircle2 className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span>專為「易復胖體質」與「飲食管理期」設計的營養後盾</span>
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="#offer"
                className="group relative inline-flex flex-col items-center justify-center w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center text-xl">
                  啟動我的 28 天代謝重建計畫 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-sm font-normal opacity-90 mt-1">
                  平均一餐只要 $93，今天下單享免運
                </span>
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-square bg-white">
              {/* Product Image - User provided */}
              <img 
                src="./slowmet_product_main.jpg" 
                alt="SLOWMET® 慢代謝管理代餐" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Ambient Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;