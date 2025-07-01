const GamingTrailer = () => {
    return (
        <>
        <div className="w-full flex justify-center">
            <div className="relative w-full max-w-[36rem] aspect-video overflow-hidden mx-auto mt-6 mb-2">
            <iframe
                src={`https://player.twitch.tv/?video=1874204688&parent=${window.location.hostname}&autoplay=false`}
                title={`Twitch channel trailer`}
                frameBorder="0"
                allowFullScreen
                scrolling="no"
                allow="fullscreen"
                className="w-full h-full"
                loading="lazy"
            />
            </div>
        </div>
        </>
    )
};

export default GamingTrailer;