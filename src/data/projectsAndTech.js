import WebDevProj from '../components/shared/project/WebDevProj';
import MusicFeatSongs from '../components/shared/project/MusicFeatSongs';
import MusicFeatSampleBeats from '../components/shared/project/MusicFeatSampleBeats';
import MusicFeatMV from '../components/shared/project/MusicFeatMV';
import MusicFeatLV from '../components/shared/project/MusicFeatLV';
import MusicFeatABMM from '../components/shared/project/MusicFeatABMM';
import MusicFeatCoverArt from '../components/shared/project/MusicFeatCoverArt';
import GamingDigitalNation from '../components/shared/project/GamingDigitalNation';
import GamingFeatEdits from '../components/shared/project/GamingFeatEdits';
import GamingFeatClips from '../components/shared/project/GamingFeatClips';
import GamingTrailer from '../components/shared/project/GamingTrailer';
import GamingFeatStreamAssets from '../components/shared/project/GamingFeatStreamAssets';
import WebDevTech from '../components/shared/tech/WebDevTech';
import MusicProdTech from '../components/shared/tech/MusicProdTech';
import VideoEditTech from '../components/shared/tech/VideoEditTech';
import SoundEngrTech from '../components/shared/tech/SoundEngrTech';
import GraphicDesTech from '../components/shared/tech/GraphicDesTech';
import StreamingTech from '../components/shared/tech/StreamingTech';

export const sections = [
  {
    id: "web-dev",
    title: "Web Development",
    content: (
      <>
        <h2 className="header">Websites & Apps</h2>
        <div className="mb-6">
            <WebDevProj />
        </div>
        <h2 className="header">Tech & Tools</h2>
        <WebDevTech />
      </>
    )
  },
  {
    id: "music-production",
    title: "Music Production",
    content: (
      <>
        <h2 className="header">Songs</h2>
        <MusicFeatSongs />
        <h2 className="header">Sample Beats</h2>
        <MusicFeatSampleBeats />
        <h2 className="header">Music Videos</h2>
        <MusicFeatMV />
        <h2 className="header">Lyric Videos</h2>
        <MusicFeatLV />
        <h2 className="header">Before & After Mix/Master</h2>
        <MusicFeatABMM />
        <h2 className="header">Cover Arts</h2>
        <MusicFeatCoverArt />
        <h2 className="header">Tech & Tools</h2>
        <MusicProdTech />
        <div className="mt-6" />
        <VideoEditTech />
        <div className="mt-6" />
        <SoundEngrTech />
        <div className="mt-6" />
        <GraphicDesTech />
      </>
    )
  },
  {
    id: "gaming-and-streaming",
    title: "Gaming & Streaming",
    content: (
      <>
        <h2 className="header">TikTok Edits</h2>
        <GamingFeatEdits />
        <h2 className="header">Random Funny Twitch Clips</h2>
        <GamingFeatClips />
        <h2 className="header">Twitch Trailer</h2>
        <GamingTrailer />
        <h2 className="header">Stream Assets</h2>
        <GamingFeatStreamAssets />
        <h2 className="header">Competitive Gaming + Music Production</h2>
        <GamingDigitalNation />
        <h2 className="header">Tech & Tools</h2>
        <StreamingTech />
      </>
    )
  }
];