import styles from './Artists.css';
import ArtistTile from './ArtistTile';
import ArtistGraph from './ArtistGraph';
import ReactWordcloud from 'react-wordcloud';

//Genre array
const words = []

const options = {
    fontSizes: [35, 36],
    fontStyle: "normal",
    fontWeight: "normal",
    fontFamily: "impact",
    padding: 2,
    spiral: "archimedean",
    transitionDuration: 1000,
    rotationAngles: [0, 45],
    enableTooltip: false,
}

const resizeStyle = {
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#fff",
};


function Artists(props) {
    return (
        <div>
            <div className={styles} id="Artistgradient">
                <h1>Your Top Artists This Month</h1>
                {props.artists.map((artist, index) => {
                    return <ArtistTile key={index} artist={props.artists[index].name} number={index + 1} img={props.artists[index].images[0].url} url={props.artists[index].external_urls.spotify} />
                })}
            </div>
            <ArtistGraph artists={props.artists} />
            <div className={styles} id="WordmapGradientArtist">
                <h1> Your Genre Word Cloud</h1>
                <div>
                    <div style={{ width: "80%", height: "70vh", background: "white", margin: "auto", borderRadius: "20px" }}>
                        {
                            //If word cloud is empty, then add the words to the array
                            words.length === 0 ?
                                props.artists.map((artist, index) => {
                                    for (let i = 0; i < artist.genres.length; i++) {
                                        if (words.includes(props.artists[index].genres[i]) === false) {
                                            words.push({ text: props.artists[index].genres[i], value: 1 })
                                        }
                                    }
                                })
                                : null
                        }
                        <ReactWordcloud options={options} words={words} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artists;