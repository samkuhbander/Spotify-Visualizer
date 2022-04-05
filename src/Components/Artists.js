import styles from './Artists.css';
import ArtistTile from './ArtistTile';
import ArtistGraph from './ArtistGraph';

function Artists(props) {
    return (
        <div>            
            <div className={styles} id="Artistgradient">
                <h1>Your Top Artists This Month</h1>
                {props.artists.map((artist, index) => {
                    return <ArtistTile key={index} artist={props.artists[index].name} number={index+1} img={props.artists[index].images[0].url} />
                })}
            </div>
            <ArtistGraph artists={props.artists} />
        </div>
    )
}

export default Artists;