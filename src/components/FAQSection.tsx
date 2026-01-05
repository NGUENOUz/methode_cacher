import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  t: {
    title: string;
    questions: FAQItem[];
  };
}

export const FAQSection = ({ t }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#111827] mb-16">
          {t.title}
        </h2>

        <div className="space-y-4">
          {t.questions.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-[#1F3C88]/20 transition-colors"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-[#111827] pr-4">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#1F3C88] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-[#4B5563] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
