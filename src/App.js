import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { createTheme } from '@mui/material/styles';
import { Button, Fab, Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Artists from './Components/Artists.js';
import Record from './Videos/Record.mp4';


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
    const CLIENT_ID = "75235d5523914e0e96b1d0b4faed4553"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [user, setUser] = useState({})

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

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
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

    const renderUser = () => {
        getUser()
        return (
            <div>
                <h1>{user.display_name ? user.display_name : "Issue displaying username Spotify may be limiting requests"}</h1>
                <br></br>
                <Fab variant="extended" color="primary" onClick={logout}> Logout </Fab>
            </div>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <div className="video-container">
                    <video className='video' autoPlay loop muted>
                        <source src={Record} type='video/mp4' />
                    </video>
                </div>
                <header className="App-header overlay">
                    <h1>Spotify Visualizer</h1>
                    {!token ?
                        <Fab variant="extended" color="primary" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                            to Spotify </Fab>
                        : renderUser()}
                    <h3> Created by Sam Kuhbander</h3>
                </header>
                <Artists />
            </div>

        </ThemeProvider>
    );
}

export default App;