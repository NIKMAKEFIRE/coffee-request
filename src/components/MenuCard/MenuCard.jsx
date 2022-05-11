import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TagsCard from '../Tags/Tags';

export default function Menu({ data }) {

    return (
        <Card sx={{ width: 'auto' }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.blend_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.origin}
                    </Typography>
                    <div style={{ marginTop: '10px' }}> <TagsCard data={data} /></div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


