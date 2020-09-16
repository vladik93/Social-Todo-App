import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

function CardWrappper(props) {
    return (
        <Card variant="outlined">
            <CardHeader  
                avatar={
                    <Avatar src="/images/profiles/profile1.jpg"></Avatar>
                }
                title="New Task"
                subheader="(task type)"
            /> 
            <CardContent>
                {props.children}
            </CardContent>
            
        </Card>
    )
}

export default CardWrappper;


