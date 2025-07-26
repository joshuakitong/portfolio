import Box84Links from '../components/shared/links/Box84Links';
import MusicProdTech from '../components/shared/tech/MusicProdTech';
import VideoEditTech from '../components/shared/tech/VideoEditTech';
import SoundEngrTech from '../components/shared/tech/SoundEngrTech';
import GraphicDesTech from '../components/shared/tech/GraphicDesTech';
import MusicFeatSongs from '../components/shared/project/MusicFeatSongs';
import MusicFeatSampleBeats from '../components/shared/project/MusicFeatSampleBeats';
import MusicFeatMV from '../components/shared/project/MusicFeatMV';
import MusicFeatLV from '../components/shared/project/MusicFeatLV';
import MusicFeatABMM from '../components/shared/project/MusicFeatABMM';
import MusicFeatCoverArt from '../components/shared/project/MusicFeatCoverArt';

export const sections = [
  {
    id: "music-creation",
    title: "Music Creation",
    content: (
      <>
        <h2 className="header">Background</h2>
        <p className="mb-6">
          I started playing guitar at the age of six. Over time, I picked up other instruments too, including lead guitar, bass, drums, and keyboards. 
           Throughout my school years, I stayed active in music, joining battle of the bands and talent shows.<br/><br/>

          After graduating, however, I lost touch with music. It wasn’t until the pandemic that I rediscovered my passion. Around that time, my brother and his friends 
           started an independent record label and collective called BOX84. I joined the team and have been deeply involved as a <strong>music producer</strong> 
           , <strong>manager</strong>, and <strong>co-owner</strong> ever since.<br/><br/>

          Since then, I’ve taught myself to <strong>make beats</strong>, <strong>write and arrange songs</strong>, <strong>mix and master tracks</strong>
           , <strong>edit videos and graphics</strong> , <strong>release music on streaming platforms</strong>, <strong>manage artists and social media pages</strong>. 
           To date, I’ve produced over a hundred tracks, generating over a million total streams across various platforms.<br/><br/>
           
          I primarily use <strong>FL Studio</strong>, <strong>Adobe Premiere Pro</strong>, and <strong>Photoshop</strong>. You can find more about the tools I use for 
           each part of the process in the sections below.
        </p>
        <h2 className="header">Music Production Services</h2>
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
        <h2 className="header">Featured Songs</h2>
        <MusicFeatSongs />
        <h2 className="header">Featured Sample Beats</h2>
        <MusicFeatSampleBeats />
        <h2 className="header">Tech & Tools</h2>
        <MusicProdTech />
      </>
    )
  },
  {
    id: "video-editing",
    title: "Video Editing",
    content: (
      <>
        <h2 className="header">Background</h2>
        <p className="mb-6">
          My first experience with video editing was using Windows Movie Maker when I was a kid, creating montages of family outings and skateboard clips my friends and I filmed. 
           Later in college, I learned how to use <strong>Adobe Premiere Pro</strong> and <strong>Sony Vegas Pro</strong>, editing school projects and gameplay videos.<br/><br/>

          While video editing wasn't a passion on the same level as gaming or music, I discovered I had a natural knack for it. Over time, I honed my skills as a 
           video editor for our record label, where I <strong>edited music videos</strong>, <strong>lyric videos</strong>, and <strong>visualizers</strong>.
        </p>
        <h2 className="header">Featured Music Videos</h2>
        <MusicFeatMV />
        <h2 className="header">Featured Lyric Videos</h2>
        <MusicFeatLV />
        <h2 className="header">Tech & Tools</h2>
        <VideoEditTech />
      </>
    )
  },
  {
    id: "sound-engineering",
    title: "Sound Engineering",
    content: (
      <>
        <h2 className="header">Background</h2>
        <p className="mb-6">
          I was first introduced to this field at a young age, watching my dad and cousin record vocals for jingles and song covers using Cool Edit Pro (now Adobe Audition). 
           I then got hands-on experience working as a sound technician for our family’s sound system business during summer campaign seasons.<br/><br/>
           
          It wasn’t something I focused on deeply at the time, but I eventually revisited and developed the skill as a sound engineer for BOX84 where I taught myself everything 
           from <strong>recording</strong> to <strong>mixing</strong> and <strong>mastering</strong>, primarily using <strong>FL Studio</strong> and <strong>eMastered</strong>.
        </p>
        <h2 className="header">Featured Before & After Mix/Master</h2>
        <MusicFeatABMM />
        <h2 className="header">Tech & Tools</h2>
        <SoundEngrTech />
      </>
    )
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    content: (
      <>
        <h2 className="header">Background</h2>
        <p className="mb-6">
          I used to color and paint a lot as a kid, and that creative interest later translated into digital art when we were introduced to <strong>Photoshop</strong> in 
           high school. I then continued learning more advanced techniques in college.<br/><br/>
          
          Although graphic design wasn’t my primary focus, I enjoyed it and knew it would be a useful skill down the line. I eventually got back into it as a graphic designer 
          for our record label, where I <strong>created cover arts</strong>, <strong>logos</strong>, and <strong>social media assets</strong>.
        </p>
        <h2 className="header">Featured Cover Arts</h2>
        <MusicFeatCoverArt />
        <h2 className="header">Tech & Tools</h2>
        <GraphicDesTech />
      </>
    )
  },
  {
    id: "more",
    title: "More",
    content: (
      <>
        <h2 className="header">Publishing and Management</h2>
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
        <h2 className="header">BOX84 Pages and Socials</h2>
        <p>
          Feel free to check out and follow us on our social media pages:
        </p>
        <Box84Links />
      </>
    )
  }
];