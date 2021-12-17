import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Christmas_Gift from '../../images/Christmas_Gift.jpg'

const Cards = () => {
    return (
        <>
         <Card>
             <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={Christmas_Gift}
                alt="christmas gift"
                />
            </CardActionArea>
        </Card>   
        </>
    )
}

export default Cards
