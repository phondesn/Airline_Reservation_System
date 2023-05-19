import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack } from '@mui/system';
import { Divider, Grid } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function FinalTicket() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Stack alignItems={'center'} direction={'row'} spacing={2}>
    <Stack alignContent={'center'} width={'20%'} marginLeft={'50px'}>
      <Typography variant="h5" gutterBottom color={'green'}>
        Your ticket has been booked successfully..<br></br>
        We wish you a very happy journey..
      </Typography>
    </Stack>
    <Card sx={{ maxWidth: 800, minWidth: 800 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Logged in user name"
        subheader="Ticket Generation Time{Sys}"
      />
      <CardMedia
        component="img"
        height="275"
        image="http://www.differencebetween.info/sites/default/files/images/3/airplane.jpg"
        alt="Aeroplane Img"/>
        
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          <Stack>
            <Grid container spacing={2} direction='row'>
            <Grid item xs={12}>
                <b>TICKET ID: </b>
                Genereted ticket ID here
            </Grid>
            <Grid item xs={4}>
                <b>SOURCE: </b>
            </Grid>
            <Grid item xs={4}>
                <b>DESTINATION: </b>
            </Grid>
            <Grid item xs={4}>
                <b>DATE OF JOURNEY: </b>
            </Grid>
            <Grid item xs={4}>
                source here
            </Grid>
            <Grid item xs={4}>
                destination here
            </Grid>
            <Grid item xs={4}>
                date of journey here
            </Grid>
            </Grid>
          </Stack>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Stack>
            <Grid container spacing={2} direction='row'>
              <Grid item xs={12}>
                  <b>PASSENGER DETAILS</b>
              </Grid>
              <Grid item xs={12}><hr></hr></Grid>
                <Grid item xs={12}>
                    <b>PASSENGER 1</b>
                </Grid>
                <Grid item xs={4}>
                    <b>AADHAR: </b>{"user aadhar"}
                </Grid>
                <Grid item xs={4}>
                    <b>NAME: </b>{" user name"}
                </Grid>
                <Grid item xs={4}>
                    <b>AGE: </b>{"user age"}
                </Grid>
                <Grid item xs={4}>
                    <b>GENDER: </b>{" user gender"}
                </Grid>
                <Grid item xs={4}>
                    <b>MOBILE: </b>{"user mobile"}
                </Grid>
                <Grid item xs={4}>
                    <b>SEAT NO: </b>{"user seat no."}
                </Grid>
                <Grid item xs={4}>
                    <b>CLASS: </b>{"user class"}
                </Grid>
                <Grid item xs={4}>
                    <b>MEAL ID: </b>{"user meal-id"}
                </Grid>
                <Grid item xs={12}><hr></hr></Grid>
                <Grid item xs={12}>
                    <b>PASSENGER 2</b>
                </Grid>
                <Grid item xs={4}>
                    <b>AADHAR: </b>{"user aadhar"}
                </Grid>
                <Grid item xs={4}>
                    <b>NAME: </b>{" user name"}
                </Grid>
                <Grid item xs={4}>
                    <b>AGE: </b>{"user age"}
                </Grid>
                <Grid item xs={4}>
                    <b>GENDER: </b>{" user gender"}
                </Grid>
                <Grid item xs={4}>
                    <b>MOBILE: </b>{"user mobile"}
                </Grid>
                <Grid item xs={4}>
                    <b>SEAT NO: </b>{"user seat no."}
                </Grid>
                <Grid item xs={4}>
                    <b>CLASS: </b>{"user class"}
                </Grid>
                <Grid item xs={4}>
                    <b>MEAL ID: </b>{"user meal-id"}
                </Grid>
                <Grid item xs={12}><hr></hr></Grid>
              
              
            </Grid>
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
    </Stack>
  );
}