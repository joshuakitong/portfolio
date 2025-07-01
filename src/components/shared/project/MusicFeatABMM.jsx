import Carousel from '../../../components/Carousel';

const abTracks = [
  ['Past 3', `${process.env.PUBLIC_URL}/music/mix-and-master/Track2A.mp3`, `${process.env.PUBLIC_URL}/music/mix-and-master/Track2B.mp3`],
  ['Closed Quarters', `${process.env.PUBLIC_URL}/music/mix-and-master/Track1A.mp3`, `${process.env.PUBLIC_URL}/music/mix-and-master/Track1B.mp3`],
  ['Got U', `${process.env.PUBLIC_URL}/music/mix-and-master/Track6A.mp3`, `${process.env.PUBLIC_URL}/music/mix-and-master/Track6B.mp3`],
  ['Outlook Drive', `${process.env.PUBLIC_URL}/music/mix-and-master/Track5A.mp3`, `${process.env.PUBLIC_URL}/music/mix-and-master/Track5B.mp3`],
  ['Goat', `${process.env.PUBLIC_URL}/music/mix-and-master/Track4A.mp3`, `${process.env.PUBLIC_URL}/music/mix-and-master/Track4B.mp3`],
  ['Greater Heights', `${process.env.PUBLIC_URL}/music/mix-and-master/Track3A.mp3`, `${process.env.PUBLIC_URL}/music/mix-and-master/Track3B.mp3`],
];

const MusicFeatABMM = () => {
    return (
        <>
        <Carousel
          type="abwaveform"
          items={abTracks}
        />
        </>
    )
};

export default MusicFeatABMM;