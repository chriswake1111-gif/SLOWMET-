import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={toggle}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-slate-800 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-orange-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="text-slate-400 flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "正在打「瘦瘦針」或剛停藥的人可以喝嗎？",
      a: "非常建議！ 這正是我們研發 SLOWMET® 的初衷。打針期間食慾差，更需要高濃度的植物蛋白來保護肌肉，避免變成「肌少型泡芙人」。停藥後使用，則能幫助你維持飽足感，平穩過渡，避免食慾反撲。"
    },
    {
      q: "喝了會肚子絞痛或拉肚子嗎？",
      a: "不會。 我們堅持不添加番瀉葉、氧化鎂等輕瀉劑。如果排便變得順暢，那是因為每包含有 10g 膳食纖維（相當於 3 盤高麗菜）與足量水分的功勞，是自然的生理反應，請安心飲用。"
    },
    {
      q: "真的會有飽足感嗎？還是需要搭配其他東西吃？",
      a: "飽足感非常有感！ 獨家的高纖維矩陣吸水後會物理性膨脹。建議沖泡後靜置 3-5 分鐘，待質地略呈稠狀再飲用，並額外補充 300cc 水分，飽足感可維持 3-5 小時。若男生食量較大，建議搭配一顆水煮蛋或一份水果。"
    },
    {
      q: "三種口味有含糖嗎？素食可食嗎？",
      a: "我們不使用人工代糖。些微的甜味來自食材本身與微量的調味，口感順口不死甜。成分主要為大豆與豌豆蛋白，屬植物五辛素/蛋奶素（視口味而定），素食者可作為優質蛋白補充來源。"
    }
  ];

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">常見問題</h2>
          <p className="text-slate-600">消除你最後的猶豫</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={`Q${index + 1}：${faq.q}`}
              answer={faq.a}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;