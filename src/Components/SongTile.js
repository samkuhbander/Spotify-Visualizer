import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function SongTile(props) {
    return (
        <div>
            <Paper sx={{ p: 2, margin: 'auto', marginTop: 2, maxWidth: 500, flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Typography variant="h5" component="h3">
                            {props.number}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src={props.img} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography variant="h4" color="text.secondary">
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