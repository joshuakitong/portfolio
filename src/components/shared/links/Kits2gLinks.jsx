const Kits2gLinks = () => {
    return (
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
    )
};

export default Kits2gLinks;