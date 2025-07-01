const Box84SocialLinks = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-4">
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
    )
};

export default Box84SocialLinks;