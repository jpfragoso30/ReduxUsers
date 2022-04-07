import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'usersModule',
    initialState: { users: [], id: 0 },
    reducers: {
        addUser: (state, action) => {
            const newId = state.id + 1;

            return {
                ...state,
                id: newId,
                users:
                    state.users.length === 0
                        ? [{ name: action.payload.user, id: state.id }]
                        : [
                              ...state.users,
                              { name: action.payload.user, id: state.id },
                          ],
            };
        },
        editUser: (state, action) => ({
            ...state,
            users: state.users.map((user) =>
                user.id === action.payload.id
                    ? { ...user, name: action.payload.name }
                    : user
            ),
        }),
        deleteUser: (state, action) => ({
            ...state,
            users: state.users.filter(({ id }) => id !== action.payload.id),
        }),
    },
});

export const { addUser, editUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
