import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


export interface IPublication {
    authors: string;
    year: string;
    title: string;
    journal: string;
    code: string;
}

interface IProps {
    publication: IPublication;
}

const PublicationDetails = (props: IProps) => {
    const { publication } = props;
    return (
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={<Typography sx={{ color: "#0263B6" }}>{`${publication.title}`}</Typography>}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {`${publication.authors}, ${publication.year} `}
                        </Typography>
                        - {`${publication.journal}. ${publication.code}.`}
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}

export default PublicationDetails;