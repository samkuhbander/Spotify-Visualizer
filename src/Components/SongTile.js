import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: "15vw",
    height: "15vw",
});

function SongTile(props) {
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
                            <a href={props.url}>
                                <Img alt={props.song} src={props.img} />
                            </a>
                    </Grid>
                    <Grid item xs={5} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs sx={{ overflow: 'auto' }}>
                                <Typography gutterBottom variant="subtitle1">
                                    {props.song}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default SongTile;