import styles from './Songs.css';
import SongTile from './SongTile';
import SongGraph from './SongGraph';

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