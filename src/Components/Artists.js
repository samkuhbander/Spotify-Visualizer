import styles from './Artists.css';
import ArtistTile from './ArtistTile';

function Artists(props) {
    return (
        <div>
            <div className={styles} id="Artistgradient">
                <h1>Your Top Artists This Month</h1>
                <ArtistTile artist="Sam Fender" number="1" img="https://i.scdn.co/image/ab6761610000e5eb3f024102223561c771cce4ed"/>
                <ArtistTile artist="Kanye West" number="2" img="https://i.scdn.co/image/ab6761610000e5eb867008a971fae0f4d913f63a"/>
                <ArtistTile artist="Morgan Wallen" number="3" img="https://i.scdn.co/image/ab6761610000e5eb0da5abcc5c0aef0c3cc573d0"/>
                <ArtistTile artist="Holly Humberstone" number="4" img="https://i.scdn.co/image/ab6761610000e5ebaeefd08e91c8375b0fc5bca5"/>
                <ArtistTile artist="Juice WRLD" number="5" img="https://i.scdn.co/image/ab6761610000e5eb1908e1a8b79abf71d5598944"/>
            </div>
        </div>
    )
}

export default Artists;