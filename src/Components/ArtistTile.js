import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: "15vw",
    height: "15vw",
});

function ArtistTile(props) {
    return (
        <div>
            <Paper sx={{ p: 2, margin: 'auto', marginTop: 2, maxWidth: 500, flexGrow: 1 }}>
                <Grid container>
                    <Grid item>
                        <Typography variant="h5" component="h3">
                            {props.number}
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <ButtonBase>
                            <a href={props.url}>
                                <Img alt={props.artist} src={props.img} />
                            </a>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={5} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h5">
                                    {props.artist}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default ArtistTile;