import MotionImageCarousel from '../../../components/MotionImageCarousel';

const coverArts = [
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

const MusicFeatCoverArt = () => {
    return (
        <>
        <MotionImageCarousel
          images={coverArts}
          height="h-48"
        />
        </>
    )
};

export default MusicFeatCoverArt;