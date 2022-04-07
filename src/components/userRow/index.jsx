import React from 'react';
import { createUseStyles } from 'react-jss';
import useUserRow from './useUserRow';

const useStyles = createUseStyles({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end',
        width: '100%',
        gap: '8px',
    },
    buttonEdit: {
        border: 0,
        padding: 8,
        minWidth: 32,
        width: 'fit-content',
        height: 32,
        backgroundColor: '#F0DB4F',
        opacity: '.8',
        '&:hover': { cursor: 'pointer', opacity: '1' },
    },
    buttonCancel: {
        border: 0,
        padding: 8,
        minWidth: 32,
        width: 'fit-content',
        height: 32,
        backgroundColor: 'gray',
        color: 'white',
        opacity: '.8',
        '&:hover': { cursor: 'pointer', opacity: '1' },
    },
    buttonDelete: {
        border: 0,
        padding: 8,
        minWidth: 32,
        width: 'fit-content',
        height: 32,
        backgroundColor: 'red',
        color: 'white',
        opacity: '.8',
        '&:hover': { cursor: 'pointer', opacity: '1' },
    },
    input: { border: 0, height: 32, width: 128, padding: 0 },
    name: { marginRight: 8 },
});

const UserRow = ({ userId }) => {
    const classes = useStyles();
    const {
        user,
        handleDeleteUser,
        userEdit,
        handleUserEdit,
        triggerUserEdit,
        acceptEdit,
        cancelEdit,
        isEditing,
    } = useUserRow(userId);

    return (
        <div className={classes.row}>
            {isEditing ? (
                <>
                    <input
                        type='text'
                        value={userEdit}
                        onChange={handleUserEdit}
                        className={classes.input}
                    />
                    <button
                        type='button'
                        onClick={acceptEdit}
                        className={classes.buttonEdit}
                    >
                        Aceptar
                    </button>
                    <button
                        type='button'
                        onClick={cancelEdit}
                        className={classes.buttonCancel}
                    >
                        Cancelar
                    </button>
                </>
            ) : (
                <>
                    <span className={classes.name}>{user.name}</span>
                    <button
                        type='button'
                        onClick={triggerUserEdit}
                        className={classes.buttonEdit}
                    >
                        Editar
                    </button>
                </>
            )}
            <button
                type='button'
                onClick={handleDeleteUser}
                className={classes.buttonDelete}
            >
                x
            </button>
        </div>
    );
};

export default UserRow;
