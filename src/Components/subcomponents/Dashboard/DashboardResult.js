import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FaceImg from './face.png';
import ColorImg from './color.png';
import FoodImg from './food.png';
import { NavLink } from 'react-router-dom';



const styles = {
  card: {
    width: 345,
    margin: "2rem 0"
  },
  media: {
    width:345,
    height: 140,
  },
};

const DashboardResult = ({ classes }) => {

  return (

            <section className={classes.DashboardResult}>
                <Card className={classes.card}>
                <NavLink to="/boda/Face" style={{textDecoration: "none"}}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={FaceImg}
                      title="Face"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Face Detection Page
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NavLink>
                </Card>

                <Card className={classes.card}>
                <NavLink to="/boda/Color" style={{textDecoration: "none"}}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={ColorImg}
                      title="Color"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Color Detection Page
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NavLink>
                </Card>

                <Card className={classes.card}>
                <NavLink to="/boda/Food" style={{textDecoration: "none"}}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={FoodImg}
                      title="Food"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Food Detection Page
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NavLink>
                </Card>

            </section>

  );
}

DashboardResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardResult);