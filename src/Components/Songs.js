import styles from './Songs.css';
import SongTile from './SongTile';
import SongGraph from './SongGraph';


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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#fff",
};

function Songs(props) {
    return (
        <div>
            <div className={styles} id="Songgradient">
                <h1>Your Top Songs This Month</h1>
                {props.songs.map((song, index) => {
                    return <SongTile key={index} song={props.songs[index].name} number={index+1} img={props.songs[index].album.images[0].url} />
                })}
            </div>
            <SongGraph songs={props.songs} />
        </div>
    )
}

export default Songs;