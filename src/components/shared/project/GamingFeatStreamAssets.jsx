import MotionImageCarousel from '../../../components/MotionImageCarousel';

const animatedEmotes = [
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gSH.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/kits2gEE.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gSH.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gGG.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gWKey.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gVictoryRoyale.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gWave.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gLove.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gLaugh.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gDab.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gHype.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gSad.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gSheesh.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gPepe.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gHandsome.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gBanana.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gCorny.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gHahahakdog.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gPotatoAim.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gYay.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gOK.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gHoodieMwa.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gPet.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/animated/Kits2gRage.gif`,
];
const irlEmotes = [
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gHeyGuys.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gSeemsGood.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gLUL.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gJebaited.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gCmonBruh.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gWutFace.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gKappa.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gResidentSleeper.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gNotLikeThis.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gA1.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gA2.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gA3.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gA4.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gB1.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gB2.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gB3.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gB4.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gC1.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gC2.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gC3.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gC4.png`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Adonis1.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Adonis2.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gLablab.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gMmmwa.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gCornyyy.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gPetpet.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gAlelelelele.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/emotes/irl/Kits2gGigil.gif`,
];
const posters = [
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/posters/MrBeast.jpg`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/posters/Sabathon.jpg`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/posters/1kSubathon.jpg`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/posters/Giftathon.jpg`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/posters/AffiversarySubathon.jpg`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/posters/Rankathon.jpg`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/posters/2kSubathon.jpg`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/posters/BdaySubathon.jpg`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/posters/2ndAffiversaryRankathon.jpg`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/posters/2ndAffiversaryCrownathon.jpg`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/posters/Streamathon.jpg`,
];
const scenes = [
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/scenes/SS.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/scenes/BRB.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/scenes/SE.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/scenes/T.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/alerts/A1.gif`,
  `${process.env.PUBLIC_URL}/gaming/streaming-assets/alerts/A2.gif`,
];

const GamingFeatStreamAssets = () => {
    return (
        <>
        <MotionImageCarousel
          images={animatedEmotes}
          height="h-12"
        />
        <MotionImageCarousel
          images={irlEmotes}
          height="h-12"
          reversed={true}
        />
        <MotionImageCarousel
          images={posters}
          height="h-36"
        />
        <MotionImageCarousel
          images={scenes}
          height="h-24"
          reversed={true}
        />
        </>
    )
};

export default GamingFeatStreamAssets;