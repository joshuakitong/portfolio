const GamingDigitalNation = () => {
    return (
        <>
        <p>
          In addition, I had the opportunity to merge my passion for both music and gaming by collaborating with one of the top Axie players and coaches of all
           time, <a href="https://www.youtube.com/@ElijahMT8" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400"><strong>Elijah MT8</strong> </a>
           (a.k.a. <a href="https://open.spotify.com/artist/6mvvyrOrdUglR4tX4Vl3lb" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400"><strong>Elijah Flows</strong></a>
           ). I produced and edited the music video for Digital Nation as part of this collaboration:<br/><br/>
          </p>
          <div className="relative w-full max-w-[36rem] aspect-video overflow-hidden mx-auto">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/Ey7eeE35gjU?enablejsapi=1`}
              title="Digital Nation"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </>
    )
};

export default GamingDigitalNation;