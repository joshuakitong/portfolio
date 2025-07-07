export default function TLDR({ summary }) {
  return(
    <div className="relative inline-block group">
      <span className="text-xs text-blue-500 cursor-pointer">TL;DR</span>

      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[20rem] p-4 border border-black/10 dark:border-white/10 rounded-2xl bg-[#f2f3f4] dark:bg-[#222] text-gray-800 dark:text-gray-200 text-sm shadow-lg 
        opacity-0 group-hover:opacity-100 
        pointer-events-none group-hover:pointer-events-auto 
        transition-all duration-300 z-20">
      {summary}
      </div>
    </div>
  );
}