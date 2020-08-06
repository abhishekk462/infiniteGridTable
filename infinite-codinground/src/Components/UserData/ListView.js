import React,{useState,useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    margin: '10%',
    marginTop: '0',
    marginBottom: '0',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },

}));

export default function ListView() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [commitHistory, setCommitHistory] = useState([]);
  useEffect(() => {
    fetch(
      `https://reqres.in/api/users?${page}`,
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(response => {
        setCommitHistory(response.data);
      })
      .catch(error => console.log(error));
  }, [page]);

  return (
    commitHistory.map((c, index) => (
    <List className={classes.root}>
    
      <ListItem alignItems="flex-start">
     
        <ListItemAvatar>
          
          <Avatar alt="Remy Sharp" src={c.avatar}/>
        </ListItemAvatar>
        <ListItemText
          primary={c.id}
          secondary={
            <React.Fragment>
            <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary">
            {c.first_name}<br/>
            {c.last_name}<br/>
            {c.email}
            </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    
      <Divider variant="inset" component="li" />
      
    </List>
    ))
  );
}
