import styles from './Songs.css';
import SongTile from './SongTile';

function Songs(props) {
    return (
        <div>
            <div className={styles} id="Songgradient">
                <h1>Your Top Songs This Month</h1>
                <SongTile song="Broadway Girls (feat. Morgan Wallen)" number="1" img="https://i.scdn.co/image/ab67616d0000b273e56c40e55f2d9ba5dc2b0c9d"/>
                <SongTile song="The Walls Are Way Too Thin" number="2" img="https://i.scdn.co/image/ab67616d0000b273aae57de1bfa40910c241d507"/>
                <SongTile song="Hypersonic Missiles" number="3" img="https://i.scdn.co/image/ab67616d0000b273afb4accd45527de5717afc9a"/>
                <SongTile song="Jump Around" number="4" img="https://i.scdn.co/image/ab67616d0000b273c9f143444515b5106b0e4de5"/>
                <SongTile song="Scarlett" number="5" img="https://i.scdn.co/image/ab67616d0000b273aae57de1bfa40910c241d507"/>
            </div>
        </div>
    )
}

export default Songs;