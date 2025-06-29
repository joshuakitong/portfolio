import { Download } from 'lucide-react';

export const sections = [
  {
    id: "contact-details",
    title: "Contact Details",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">How to Reach Me</h2>
        <p className="mb-6">
          Email: joshuakitong@gmail.com<br/>
          Phone: 0905-737-9500
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Resume</h2>
        <a
          href={`${process.env.PUBLIC_URL}/resume/Joshua_Kitong_Resume_2025.pdf`}
          download
          className="flex items-center justify-center gap-2 w-[14rem] text-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition shadow-lg"
        >
          <Download size={18} />
          <strong>Download Resume</strong>
        </a>
      </>
    )
  },
  {
    id: "links",
    title: "Pages and Socials",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Web Dev</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-4 mb-6">
          <div className="space-y-6 flex justify-center">
            <a href="https://github.com/joshuakitong" target="_blank" className="block w-full text-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-black transition">
              <strong>GitHub</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://www.linkedin.com/in/joshua-christopher-kitong-65805a2a9" target="_blank" className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              <strong>LinkedIn</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://leetcode.com/u/fgs8LXq4KP" target="_blank" className="block w-full text-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
              <strong>LeetCode</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="/" className="block w-full text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              <strong>Portfolio</strong>
            </a>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">BOX84</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-4 mb-6">
          <div className="space-y-6 flex justify-center">
            <a href="https://www.youtube.com/@BOX84" target="_blank" className="block w-full text-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
              <strong>YouTube</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://open.spotify.com/playlist/2AAIvXFYyNZo12DHMJqMi5" target="_blank" className="block w-full text-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              <strong>Spotify</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://www.facebook.com/box84official" target="_blank" className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              <strong>Facebook</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://www.instagram.com/box84official/" target="_blank" className="block w-full text-center px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition">
              <strong>Instagram</strong>
            </a>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Kits2g</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-4">
          <div className="space-y-6 flex justify-center">
            <a href="https://www.twitch.tv/kits2g" target="_blank" className="block w-full text-center px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition">
              <strong>Twitch</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://www.tiktok.com/@kits2g_ttv" target="_blank" className="block w-full text-center px-4 py-2 bg-[#EE1D52] text-white rounded-md hover:bg-[#c91946] transition">
              <strong>TikTok</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://discord.gg/J9td3cpeC9" target="_blank" className="block w-full text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              <strong>Discord</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://twitter.com/kits2g_ttv" target="_blank" className="block w-full text-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-black transition">
              <strong>X (Twitter)</strong>
            </a>
          </div>
        </div>
      </>
    )
  },
];