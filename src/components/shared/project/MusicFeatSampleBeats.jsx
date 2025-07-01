import Carousel from '../../../components/Carousel';

const sampleBeats = [
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

const MusicFeatSampleBeats = () => {
    return (
        <>
        <Carousel
          type="waveform"
          items={sampleBeats}
        />
        </>
    )
};

export default MusicFeatSampleBeats;