import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { createTheme } from '@mui/material/styles';
import { Fab } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Artists from './Components/Artists.js';
import Record from './Videos/Record.mp4';
import Songs from './Components/Songs.js';
import Footer from './Components/Footer';


const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3988f9',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#eae9e9',
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h2',
                    h2: 'h2',
                    h3: 'h2',
                    h4: 'h2',
                    h5: 'h2',
                    h6: 'h2',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },
    },
})

function App() {
    const CLIENT_ID = "38722807c67a45c2bbb14b8db7999b25" 
    const REDIRECT_URI = "https://superlative-phoenix-67b1a8.netlify.app" //http://localhost:3000
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPE = "user-top-read"

    const [token, setToken] = useState("")
    const [user, setUser] = useState({})
    const [artists, setArtists] = useState([])
    const [songs, setSongs] = useState([])

    /* Get token from Spotify */
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)   
        }

        setToken(token)
    }, [])

    /* Remove login token */
    const logout = () => {
        window.localStorage.removeItem("token")
        setToken("")
    }

    //Get username from the spotify api
    const getUser = async () => {
        const { data } = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setUser(data)
    }

    //Update user info every time the token changes
    useEffect(() => {
        if (token) {
            getUser()
        }
    }, [token])

    //Get top 5 artists from the spotify api
    const getTopArtists = async () => {
        const { data } = await axios.get("https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=5", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setArtists(data.items)
    }

    //Render the artists component
    const renderArtists = () => {
        if (artists.length > 0) {
            return <Artists artists={artists} />
        }
    }


    //Get top 5 songs from the spotify api
    const getTopSongs = async () => {
        const { data } = await axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setSongs(data.items)
    }

    //Render the songs component
    const renderSongs = () => {
        if (songs.length > 0) {
            return <Songs songs={songs} />
        }
    }

    //Scroll Artistgradient into view
    const scrollToArtists = () => {
        //One second delay to allow the page to load
        setTimeout(() => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        })
        }, 1000)
    }


    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <div className="video-container">
                    <video className='video' autoPlay loop muted playsinline>
                        <source src={Record} type='video/mp4' />
                    </video>
                </div>
                <header className="App-header overlay">
                    <h1>Spotify Visualizer</h1>
                    {!token || token === "" ?
                        //Call the login function
                        <Fab variant="extended" color="primary" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&show_dialog=true`}>Login
                            to Spotify </Fab>
                        : <div>
                            <h1>{user.display_name ? user.display_name : ""}</h1>
                            <br></br>
                            <Fab variant="extended" color="primary" onClick={logout}> Logout </Fab>
                        </div>}
                        <br></br>
                        {token && 
                            <div>
                        <Fab variant="extended" color="primary" onClick={() => {getTopArtists(); getTopSongs(); scrollToArtists()}}> Get Your Data </Fab>
                        </div>}
                        <br></br>
                    <h3> Created by Sam Kuhbander</h3>
                    <p> Contact: kuhbandersam@gmail.com</p>
                </header>
                <br></br>
                {token && renderArtists()}
                {token && renderSongs()}
               <Footer></Footer>
            </div>
        </ThemeProvider>
    );
}

export default App;