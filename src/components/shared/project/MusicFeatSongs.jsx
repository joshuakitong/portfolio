import Carousel from '../../../components/Carousel';

const spotifyTrackIds = ['2KzsoukDO8x0ysUWpMbRjA', '2lupzTKwSvsAFNlMfcgw7F', '7tkzOTQVundq3UpgQJie19', '2rlaH2B1gWeNwJo7CrygXp', '27r8BrTAgTjq9J2Mr4kxkv', '4VdmtcT6DVJZxAkx3rk0Aa'];

const MusicFeatSongs = () => {
    return (
        <>
        <Carousel
          type="spotify"
          items={spotifyTrackIds}
        />
        </>
    )
};

export default MusicFeatSongs;