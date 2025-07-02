const WebDevLinks = () => {
    return (
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
            <a href="/portfolio" className="block w-full text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              <strong>Portfolio</strong>
            </a>
          </div>
        </div>
    )
};

export default WebDevLinks;