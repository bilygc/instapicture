import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: '15px',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
  },
  image: {
    width:'100px',
    height:'auto',
  },
  [theme.breakpoints.down('xs') ]:{
    mainContainer:{
      flexDirection:'column-reverse',
    }
  },
  noPadding:{
    padding:'0',
  }
}));