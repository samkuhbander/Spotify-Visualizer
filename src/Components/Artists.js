import styles from './Artists.css';
import ArtistTile from './ArtistTile';
import ArtistGraph from './ArtistGraph';
import ReactWordcloud from 'react-wordcloud';
import { Resizable } from "re-resizable";

//Genre array
const words = []

const options = {
    fontSizes: [45, 50],
    fontStyle: "normal",
    fontWeight: "normal",
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
                    return <ArtistTile key={index} artist={props.artists[index].name} number={index + 1} img={props.artists[index].images[0].url} />
                })}
            </div>
            <ArtistGraph artists={props.artists} />
            <div className={styles} id="WordmapGradientArtist">
                <h1> Your Artist Genre Wordcloud</h1>
                <div>
                    <div style={{ width: "80%", height: "100%", background: "white", margin: "auto"}}>
                        {props.artists.map((artist, index) => {
                            if(words.indexOf (artist.genres[0]) == -1){
                            words.push({ text: props.artists[index].genres[0], value: 100 })
                            }
                        })}
                        <ReactWordcloud options={options} words={words} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artists;