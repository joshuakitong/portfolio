import Carousel from '../../../components/Carousel';

const twitchClips = [
  'HelpfulDistinctMooseLitFam-9RTqpUv_UgOJAoZ3',
  'PlausibleStrangeFiddleheadsDogFace-suY4Tnr-mABHkWP3',
  'PatientFastOryxKappaRoss-JDErDey3IWWNnN1u',
  'InterestingHeartlessTofuShadyLulu-cv6tRHiUzFSGynh9',
  'LittleBoldPartridgeOSkomodo-eJiAF5y4-zK5IiVz',
  'ThoughtfulRelatedTruffleWow--SbwoII9jpktcwXN',
  'ImpartialDependableLEDCurseLit-SoaPgj2PeHZlDIrp',
  'PopularMagnificentBatteryFeelsBadMan-JBGRf07047iHeSLr',
  'HeartlessProductiveCarabeefOMGScoots-IvA57S7tNDAR2qpL',
  'SincereHonorableChoughTwitchRaid-PYG92rTSHJayhJfX',
  'ThoughtfulBrainyCucumberSoonerLater-D72xN2Ikx9Ywx4PB',
  'FantasticBreakableBoarSSSsss-TtlopIlwdNQlv4lT',
];

const GamingFeatClips = () => {
    return (
        <>
        <Carousel
          type="twitch"
          items={twitchClips}
        />
        </>
    )
};

export default GamingFeatClips;