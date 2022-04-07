import React from 'react';
import UserRow from '../userRow';
import useUsersList from './useUsersList';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        alignItems: 'center',
        marginBottom: 24,
    },
    input: {
        height: 32,
        width: 128,
    },
    button: {
        border: 0,
        width: 38,
        height: 38,
        backgroundColor: '#F0DB4F',
        opacity: '.8',
        marginRight: 16,
        '&:hover': { cursor: 'pointer', opacity: '1' },
    },
    usersList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    buttonSort: {
        border: 0,
        minWidth: 38,
        width: 'fit-content',
        height: 38,
        backgroundColor: 'gray',
        color: 'white',
        opacity: '.8',
        '&:hover': { cursor: 'pointer', opacity: '1' },
    },
});

const UsersList = () => {
    const classes = useStyles();
    const {
        users,
        newUser,
        handleUserInput,
        handleAddUser,
        toggleSort,
        sortAscending,
    } = useUsersList();

    return (
        <section className={classes.container}>
            <form className={classes.form}>
                <h5>Agregar usuario:</h5>
                <input
                    type='text'
                    value={newUser}
                    onChange={handleUserInput}
                    className={classes.input}
                />
                <button
                    type='button'
                    onClick={handleAddUser}
                    className={classes.button}
                >
                    +
                </button>
                <h5>Ordenar usuario:</h5>

                <button
                    type='button'
                    onClick={toggleSort}
                    className={classes.buttonSort}
                >
                    {sortAscending ? 'A-Z' : 'Z-A'}
                </button>
            </form>
            {users?.length > 0 && <h5>Usuarios:</h5>}
            <div className={classes.usersList}>
                {users?.map(({ id }) => (
                    <UserRow key={id} userId={id} />
                ))}
            </div>
        </section>
    );
};

export default UsersList;
