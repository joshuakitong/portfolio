import Carousel from '../../../components/Carousel';

const musicVideoIds = ['G0okBMMk4jU', 'vF6hub6jKl8', 'h7dbqvFbySA', 'yl9oyMt218g', 'QlkDan679Nc', '7cw69wj9SCo'];

const MusicFeatMV = () => {
    return (
        <>
        <Carousel
            type="youtube"
            items={musicVideoIds}
        />
        </>
    )
};

export default MusicFeatMV;