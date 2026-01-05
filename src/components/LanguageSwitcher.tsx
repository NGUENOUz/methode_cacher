import { Globe } from 'lucide-react';
import { Language } from '../translations';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSwitcher = ({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) => {
  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ];

  return (
    <div className="fixed top-6 right-6 z-50 bg-white rounded-xl shadow-lg p-2 flex items-center gap-2">
      <Globe className="w-5 h-5 text-[#1F3C88]" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-3 py-1 rounded-lg font-semibold text-sm transition-all ${
            currentLanguage === lang.code
              ? 'bg-gradient-to-r from-[#1F3C88] to-[#2E7D32] text-white'
              : 'text-[#4B5563] hover:bg-gray-100'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
