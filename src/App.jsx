import React from 'react';
import { createUseStyles } from 'react-jss';
import UsersList from './components/usersList';

const useStyles = createUseStyles({
    app: {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: '16px',
        fontFamily: 'arial',
    },
    header: {
        width: '100%',
        backgroundColor: '#323330',
        padding: 8,
        color: 'white',
        fontWeight: 800,
        fontSize: 32,
    },
});

function App() {
    const classes = useStyles();

    return (
        <div className={classes.app}>
            <header className={classes.header}>Usuarios x React Redux</header>
            <UsersList />
        </div>
    );
}

export default App;
