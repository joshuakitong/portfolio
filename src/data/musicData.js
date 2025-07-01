import Carousel from '../components/Carousel';
import MotionImageCarousel from '../components/MotionImageCarousel';
import Box84Links from '../components/shared/links/Box84Links';

export const spotifyTrackIds = ['2KzsoukDO8x0ysUWpMbRjA', '2lupzTKwSvsAFNlMfcgw7F', '7tkzOTQVundq3UpgQJie19', '2rlaH2B1gWeNwJo7CrygXp', '27r8BrTAgTjq9J2Mr4kxkv', '4VdmtcT6DVJZxAkx3rk0Aa'];
export const musicVideoIds = ['G0okBMMk4jU', 'vF6hub6jKl8', 'h7dbqvFbySA', 'yl9oyMt218g', 'QlkDan679Nc', '7cw69wj9SCo'];
export const lyricVideoIds = ['d47RWJJgcc4?start=10&', '54Wx18U38Rg?start=10&', 'zJvjXfVxSBc?start=10&', 'FGUbe-jqxRo', 'OMTKFErpn5c', '1yLmYB3b_1E'];
export const abTracks = [
  ['Past 3', `${process.env.PUBLIC_URL}/music/mix-and-master/Track2A.mp3`, `${process.env.PUBLIC_URL}/music/mix-and-master/Track2B.mp3`],
  ['Closed Quarters', `${process.env.PUBLIC_URL}/music/mix-and-master/Track1A.mp3`, `${process.env.PUBLIC_URL}/music/mix-and-master/Track1B.mp3`],
  ['Got U', `${process.env.PUBLIC_URL}/music/mix-and-master/Track6A.mp3`, `${process.env.PUBLIC_URL}/music/mix-and-master/Track6B.mp3`],
  ['Outlook Drive', `${process.env.PUBLIC_URL}/music/mix-and-master/Track5A.mp3`, `${process.env.PUBLIC_URL}/music/mix-and-master/Track5B.mp3`],
  ['Goat', `${process.env.PUBLIC_URL}/music/mix-and-master/Track4A.mp3`, `${process.env.PUBLIC_URL}/music/mix-and-master/Track4B.mp3`],
  ['Greater Heights', `${process.env.PUBLIC_URL}/music/mix-and-master/Track3A.mp3`, `${process.env.PUBLIC_URL}/music/mix-and-master/Track3B.mp3`],
];
export const sampleBeats = [
  ['Sample Beat 1 (Sa***.mp3)', `${process.env.PUBLIC_URL}/music/sample-beats/Beat1.mp3`],
  ['Sample Beat 2 (Ma***.mp3)', `${process.env.PUBLIC_URL}/music/sample-beats/Beat2.mp3`],
  ['Sample Beat 3 (Bo***.mp3)', `${process.env.PUBLIC_URL}/music/sample-beats/Beat3.mp3`],
  ['Sample Beat 4 (Na***.mp3)', `${process.env.PUBLIC_URL}/music/sample-beats/Beat4.mp3`],
  ['Sample Beat 5 (Ch***.mp3)', `${process.env.PUBLIC_URL}/music/sample-beats/Beat5.mp3`],
  ['Sample Beat 6 (7 ***.mp3)', `${process.env.PUBLIC_URL}/music/sample-beats/Beat6.mp3`],
  ['Sample Beat 7 (Tr***.mp3)', `${process.env.PUBLIC_URL}/music/sample-beats/Beat7.mp3`],
  ['Sample Beat 8 (Ni***.mp3)', `${process.env.PUBLIC_URL}/music/sample-beats/Beat8.mp3`],
  ['Sample Beat 9 (To***.mp3)', `${process.env.PUBLIC_URL}/music/sample-beats/Beat9.mp3`],
  ['Sample Beat 10 (Sa***.mp3)', `${process.env.PUBLIC_URL}/music/sample-beats/Beat10.mp3`],
];
export const coverArts = [
  `${process.env.PUBLIC_URL}/music/cover-arts/CA1.jpg`,
  `${process.env.PUBLIC_URL}/music/cover-arts/CA2.jpg`,
  `${process.env.PUBLIC_URL}/music/cover-arts/CA3.jpg`,
  `${process.env.PUBLIC_URL}/music/cover-arts/CA4.jpg`,
  `${process.env.PUBLIC_URL}/music/cover-arts/CA5.jpg`,
  `${process.env.PUBLIC_URL}/music/cover-arts/CA6.jpg`,
  `${process.env.PUBLIC_URL}/music/cover-arts/CA7.jpg`,
  `${process.env.PUBLIC_URL}/music/cover-arts/CA8.jpg`,
  `${process.env.PUBLIC_URL}/music/cover-arts/CA9.jpg`,
  `${process.env.PUBLIC_URL}/music/cover-arts/CA10.jpg`,
];

export const sections = [
  {
    id: "music-creation",
    title: "Music Creation",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Background</h2>
        <p className="mb-6">
          I started playing guitar at the age of six, with minimal formal lessons — most of what I learned was self-taught. Over time, I picked up other instruments too, 
           including lead guitar, bass, drums, and keyboards. Throughout my school years, I stayed active in music, joining battle of the bands and talent shows.<br/><br/>

          After graduating, however, I lost touch with music. It wasn’t until the pandemic in 2020 that I rediscovered my passion — around the time my brother and his friends 
           started an independent record label and collective called BOX84. I joined the team and have been deeply involved as a <strong>music producer</strong> 
           , <strong>manager</strong>, and <strong>co-owner</strong> ever since.<br/><br/>

          Since then, I’ve taught myself to <strong>make beats</strong>, <strong>write and arrange songs</strong>, <strong>mix and master tracks</strong>
           , <strong>edit videos and graphics</strong> , <strong>release music on streaming platforms</strong>, <strong>manage artists and social media pages</strong>. 
           To date, I’ve produced over a hundred tracks, generating over a million total streams across various platforms.<br/><br/>
           
          I primarily use <strong>FL Studio</strong>, <strong>Adobe Premiere Pro</strong>, and <strong>Photoshop</strong> — and you can find more about the tools I use for 
           each part of the process in the sections below.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Music Production Services</h2>
        <p>
          Here's a list of the music production services I offer:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-2 mb-6">
          <div className="space-y-6">
            <strong>Beat Making</strong><br/>
            <strong>Mixing and Mastering</strong> <span className="text-sm">(Beats & Vocals)</span><br/>
            <strong>Recording</strong> <span className="text-sm">(Vocals & Instruments)</span>
          </div>
          <div className="space-y-6">
            <strong>Song Writting and Arranging</strong><br/>
            <strong>Video Editing</strong> <span className="text-sm">(Music Videos & Visualizers)</span><br/>
            <strong>Graphic Design</strong> <span className="text-sm">(Covers Arts & Social Media Assets)</span><br/>
          </div>
          <div className="space-y-6">
            <strong>Song Publishing and Distribution</strong><br/>
            <strong>Social Media Management</strong>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Songs</h2>
        <Carousel
          type="spotify"
          items={spotifyTrackIds}
        />
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Sample Beats</h2>
        <Carousel
          type="waveform"
          items={sampleBeats}
        />
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Tech & Tools</h2>
        <p>
          These are the apps and tools I have experience with in music production:<br/>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
          <div className="space-y-6">
            <strong>DAWs</strong>: FL Studio, Ableton Live<br/>
            <strong>VSTs</strong>: Soundtoys, iZotope, Tokyo Dawn Records, MeldaProduction, Spectrasonics, Nexus, stock DAW VSTs and plugins
          </div>
          <div className="space-y-6">
            <strong>Sample Libraries</strong>: Splice, Cymatics, LANDR, Loopmasters<br/>
            <strong>AI Tools</strong>: eMastered, Splice AI, ChatGPT
          </div>
        </div>
      </>
    )
  },
  {
    id: "video-editing",
    title: "Video Editing",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Background</h2>
        <p className="mb-6">
          My first experience with video editing was using Windows Movie Maker when I was a kid, creating montages of family outings and skateboard clips my friends and I filmed. 
           Later in college, I learned how to use <strong>Adobe Premiere Pro</strong> and <strong>Sony Vegas Pro</strong>, editing school projects and gameplay videos.<br/><br/>

          While video editing wasn't a passion on the same level as gaming or music, I discovered I had a natural knack for it. Over time, I honed my skills as a 
           video editor for our record label, where I <strong>edited music videos</strong>, <strong>lyric videos</strong>, and <strong>visualizers</strong>.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Music Videos</h2>
        <Carousel
          type="youtube"
          items={musicVideoIds}
        />
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Lyric Videos</h2>
        <Carousel
          type="youtube"
          items={lyricVideoIds}
        />
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Tech & Tools</h2>
        <p>
          These are the apps I have experience with in video editing:<br/>
        </p>
        <strong>Editing Software</strong>: Adobe Premiere Pro, Sony Vegas Pro, Adobe After Effects, CapCut, Canva<br/>
      </>
    )
  },
  {
    id: "sound-engineering",
    title: "Sound Engineering",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Background</h2>
        <p className="mb-6">
          I was first introduced to this field at a young age, watching my dad and cousin record vocals for jingles and song covers using Cool Edit Pro (now Adobe Audition). 
           I then got hands-on experience working as a sound technician for our family’s sound system business during summer campaign seasons.<br/><br/>
           
          It wasn’t something I focused on deeply at the time, but I eventually revisited and developed the skill as a sound engineer for BOX84 — where I taught myself everything 
           from <strong>recording</strong> to <strong>mixing</strong> and <strong>mastering</strong>, primarily using <strong>FL Studio</strong> and <strong>eMastered</strong>.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Before & After Mix/Master</h2>
        <Carousel
          type="abwaveform"
          items={abTracks}
        />
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Tech & Tools</h2>
        <p>
          These are the apps and tools I have experience with in sound engineering:<br/>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
          <div className="space-y-6">
            <strong>DAWs/Recording Tools</strong>: FL Studio, Ableton Live, Adobe Audition, Audacity<br/>
            <strong>AI Tools & Web Apps</strong>: eMastered, ChatGPT, Loudness Penalty, Youlean
          </div>
          <div className="space-y-6">
            <strong>VSTs</strong>: Youlean, Soundtoys, iZotope, Tokyo Dawn Records, MeldaProduction, stock DAW VSTs and plugins
          </div>
        </div>
      </>
    )
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Background</h2>
        <p className="mb-6">
          I used to color and paint a lot as a kid, and that creative interest later translated into digital art when we were introduced to <strong>Photoshop</strong> in 
           high school. I then continued learning more advanced techniques in college.<br/><br/>
          
          Although graphic design wasn’t my primary focus, I enjoyed it and knew it would be a useful skill down the line. I eventually got back into it as a graphic designer 
          for our record label, where I <strong>created cover arts</strong>, <strong>logos</strong>, and <strong>social media assets</strong>.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Cover Arts</h2>
        <MotionImageCarousel
          images={coverArts}
          height="h-48"
        />
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Tech & Tools</h2>
        <p>
          These are the apps I have experience with in graphic design:<br/>
        </p>
        <strong>Design Software</strong>: Adobe Photoshop, Canva<br/>
      </>
    )
  },
  {
    id: "more",
    title: "More",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Publishing and Management</h2>
        <p className="mb-6">
          When the record label first started, releases were only uploaded to YouTube and not distributed to major streaming platforms like Spotify or Apple Music. I took the 
           initiative to research how to formally release music and eventually signed us up with Ditto Music, which I found to be the most suitable distributor for independent 
           artists and labels.<br/><br/>
          
          We initially paid for their services, but about a year later, our work caught the attention of the <strong>Ditto Music</strong> team. They offered us a <strong>partnership</strong>, 
           which we’ve maintained ever since. I now serve as their primary <strong>point of contact</strong> for releases under our indie record label.<br/><br/>

          I’ve also taken the initiative to manage the label’s artists, oversee production needs, and run our social media pages. In the process, I’ve learned the basics of digital 
           marketing and familiarized myself with tools and platforms like <strong>Meta Business Suite</strong>, <strong>YouTube Studio</strong>, <strong>Spotify for Artists</strong>, 
           and the <strong>Ditto Music Dashboard</strong>.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">BOX84 Pages and Socials</h2>
        <p>
          Feel free to check out and follow us on our social media pages:
        </p>
        <Box84Links />
      </>
    )
  }
];