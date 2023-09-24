import React from "react";
import GooogleMapReact from 'google-map-react';
import {Paper,Typography,useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map=({setCoordinates,setBounds,coordinates}) => {

    const classes =useStyles();
    const isMobile=useMediaQuery('(min-width:600px)');

    

    return (
        <div className={classes.mapContainer}>
            <GooogleMapReact
            bootstrapURLKeys={{key:'AIzaSyCrOgwGadO4WeTOigSScR-5uG-gpvkGWBA'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={(e)=>{
                setCoordinates({lat:e.center.lat, lng:e.center.lng});
                setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw});
            }}
            onChildClick={''}
            >

            </GooogleMapReact>
        </div>
    );
}
export default Map;