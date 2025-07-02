import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 rounded-full bg-[#eee] dark:bg-[#222] border border-black/10 dark:border-white/10 text-black dark:text-white shadow-md"
      >
        {isDark ? <Moon size={24} /> : <Sun size={24} />}
      </button>
    </div>
  );
}