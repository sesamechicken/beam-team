import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Typography, Grid, Chip, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { format } from 'date-fns';
import { loadItemShop } from '../../redux/actions';
import vbucks from '../../static/icons/vbucks.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '1em'
  },
  img: {
    maxWidth: '200px'
  },
  sm_icon: {
    maxWidth: '64px'
  },
  icons: {
    backgroundColor: '#1fcaf3',
    textAlign: 'center',
    width: '200px',
    height: '200px',
    margin: '1em auto'
  },
  item: {
    backgroundColor: '#444'
  },
  fortnite: {
    fontFamily: 'BurbankBigCondensed-Black'
  },
  news: {
    color: '#3f51b5',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '10px 10px 0 10px',
    borderRadius: '22px',
    textAlign: 'center'
  },
  white: {
    color: '#fff',
    textShadow: '1px 1px 5px black'
  }
}));

const shopSection = (type) => {
  
    return type
}


const ItemShop = (props) => {
  const { loadItemShop } = props;
  const classes = useStyles();

  useEffect( () => {
    loadItemShop();
  }, []);


  const { specialFeatured, featured, daily } = props.itemShop;
  let date = '' || props.itemShop.date && new Date(props.itemShop.date);

  return(
    <React.Fragment>
      <Typography className={[classes.fortnite, classes.news]} variant='h4'>Current Item Shop</Typography>
      <Typography className={`${classes.fortnite}`} variant="subtitle1">
        <span className={classes.white}>Updated on {date && format(date, 'PPpp')}</span>
      </Typography>
      <Typography variant='h2' className={classes.fortnite}>{specialFeatured?.name}</Typography>
      {
        specialFeatured?.entries?.map((entry) => (
          <div key={entry.offerId} className={classes.root}>
            <Card className={classes.paper} elevation={3}>
              <Grid container>
                <Grid item xs>
                  <Typography className={classes.fortnite} variant='h3'>{entry.bundle?.name}</Typography>
                  <Typography variant='body1'>{entry.bundle?.info}</Typography>
                </Grid>
                <Grid item xs style={{textAlign: 'right'}}>
                  <Chip
                    color="primary"
                    avatar={<img alt="vBucks" src={vbucks}/>}
                    label={<b>{entry.finalPrice}</b>}
                    className={classes.fortnite}
                  />
                </Grid>
              </Grid>
              <div className={classes.root}>
                <Grid container>
                {
                  entry.items.map((item) => 
                    <div className={classes.root} key={item.id}>
                      <Grid item xs={12}>
                        <Typography className={classes.fortnite} variant='h4'>{item.name}</Typography>
                        <Typography variant='body1'>{item.description}</Typography>
                        <Card elevation={2} className={classes.icons}>
                          <img className={classes.img} src={item.images.icon} />
                        </Card>
                      </Grid>
                    </div>
                  )
                }
                </Grid>
              </div>
            </Card>
          </div>)
          )
      }

      <Typography variant='h2' className={classes.fortnite}>{featured?.name}</Typography>
      {featured?.entries?.map((entry) => (
      <div key={entry.offerId} className={classes.root}>
        <Card className={classes.paper} elevation={3}>
          <Grid container>
            <Grid item xs>
              <Typography className={classes.fortnite} variant='h3'>{entry.bundle?.name}</Typography>
              <Typography variant='body1'>{entry.bundle?.info}</Typography>
            </Grid>
            <Grid item xs style={{textAlign: 'right'}}>
              <Chip
                color="primary"
                avatar={<img alt="vBucks" src={vbucks}/>}
                label={<b>{entry.finalPrice}</b>}
                className={classes.fortnite}
              />
            </Grid>
          </Grid>
          <div className={classes.root}>
            <Grid container>
            {
              entry.items.map((item) => 
                <div className={classes.root} key={item.id}>
                  <Grid item xs={12}>
                    <Typography className={classes.fortnite} variant='h4'>{item.name}</Typography>
                    <Typography variant='body1'>{item.description}</Typography>
                    <Card elevation={2} className={classes.icons}>
                      <img className={classes.img} src={item.images.icon} />
                    </Card>
                  </Grid>
                </div>
              )
            }
            </Grid>
          </div>
        </Card>
      </div>)
      )}

<Typography variant='h2' className={classes.fortnite}>{daily?.name}</Typography>
      {daily?.entries?.map((entry) => (
      <div key={entry.offerId} className={classes.root}>
        <Card className={classes.paper} elevation={3}>
          <Grid container>
            <Grid item xs>
              <Typography className={classes.fortnite} variant='h3'>{entry.bundle?.name}</Typography>
              <Typography variant='body1'>{entry.bundle?.info}</Typography>
            </Grid>
            <Grid item xs style={{textAlign: 'right'}}>
              <Chip
                color="primary"
                avatar={<img alt="vBucks" src={vbucks}/>}
                label={<b>{entry.finalPrice}</b>}
                className={classes.fortnite}
              />
            </Grid>
          </Grid>
          <div className={classes.root}>
            <Grid container>
            {
              entry.items.map((item) => 
                <div className={classes.root} key={item.id}>
                  <Grid item xs={12}>
                    <Typography className={classes.fortnite} variant='h4'>{item.name}</Typography>
                    <Typography variant='body1'>{item.description}</Typography>
                    <Card elevation={2} className={classes.icons}>
                      <img className={classes.img} src={item.images.icon} />
                    </Card>
                  </Grid>
                </div>
              )
            }
            </Grid>
          </div>
        </Card>
      </div>)
      )}

    </React.Fragment>
  )

}

const mapStateToProps = ({itemShop}) => {
  return {
    itemShop
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItemShop: () => dispatch(loadItemShop())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemShop);