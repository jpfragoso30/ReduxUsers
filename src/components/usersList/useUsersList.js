import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../redux/modules/users';
import { selectUsers } from '../../redux/selectors/users';

const useUsersList = () => {
    const dispatch = useDispatch();

    const users = useSelector(selectUsers);
    const [newUser, setNewUser] = useState('');
    const [sortAscending, setSortAscending] = useState(true);
    const [sortedUsers, setSortedUsers] = useState(users);

    const handleUserInput = ({ target: { value } }) => setNewUser(value);

    const handleAddUser = () => {
        if (!newUser || newUser?.length === 0) return;

        dispatch(addUser({ user: newUser }));
    };

    const toggleSort = () => {
        setSortAscending((prevBool) => !prevBool);
    };

    useEffect(() => {
        if (sortAscending) {
            setSortedUsers(
                [...users].sort((a, b) => a.name.localeCompare(b.name))
            );
        } else {
            setSortedUsers(
                [...users].sort((a, b) => b.name.localeCompare(a.name))
            );
        }
    }, [users, sortAscending]);

    return {
        users: users?.length <= 1 ? users : sortedUsers,
        newUser,
        handleUserInput,
        handleAddUser,
        toggleSort,
        sortAscending,
    };
};

export default useUsersList;
