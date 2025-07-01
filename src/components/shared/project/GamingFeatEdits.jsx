import Carousel from '../../../components/Carousel';

const tiktokHighlights = ['7447849730698267922', '7424075120857287944', '7333191304827899137', '7446751162281381138', '7441911466573237512', '7291636397570608385', '7340980566017494274', '7416305465497308437', '7431859063677324545'];

const GamingFeatEdits = () => {
    return (
        <>
        <Carousel
            type="tiktok"
            items={tiktokHighlights}
        />
        </>
    )
};

export default GamingFeatEdits;