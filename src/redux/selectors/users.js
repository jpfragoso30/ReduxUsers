import { createSelector } from '@reduxjs/toolkit';

export const selectUsersModule = (state) => state.users;

export const selectUsers = createSelector(
    [selectUsersModule],
    ({ users }) => users
);

export const selectUser = createSelector(
    [selectUsers, (state, userId) => userId],
    (users, userId) => users.find(({ id }) => id === userId)
);
