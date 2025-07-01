const MusicProdTech = () => {
    return (
        <>
        <p>
          These are the apps and tools I have experience with in music production:<br/>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
          <div className="space-y-6">
            <strong>DAWs</strong>: FL Studio, Ableton Live<br/>
            <strong>VSTs</strong>: Soundtoys, iZotope, Tokyo Dawn Records, MeldaProduction, Spectrasonics, Nexus, stock DAW VSTs and plugins
          </div>
          <div className="space-y-6">
            <strong>Sample Libraries</strong>: Splice, Cymatics, LANDR, Loopmasters<br/>
            <strong>AI Tools</strong>: eMastered, Splice AI, ChatGPT
          </div>
        </div>
        </>
    )
};

export default MusicProdTech;