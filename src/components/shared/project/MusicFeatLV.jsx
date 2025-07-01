import Carousel from '../../../components/Carousel';

const lyricVideoIds = ['d47RWJJgcc4?start=10&', '54Wx18U38Rg?start=10&', 'zJvjXfVxSBc?start=10&', 'FGUbe-jqxRo', 'OMTKFErpn5c', '1yLmYB3b_1E'];

const MusicFeatLV = () => {
    return (
        <>
        <Carousel
          type="youtube"
          items={lyricVideoIds}
        />
        </>
    )
};

export default MusicFeatLV;