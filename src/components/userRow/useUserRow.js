import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, editUser } from '../../redux/modules/users';
import { selectUser } from '../../redux/selectors/users';

const useUserRow = (userId) => {
    const dispatch = useDispatch();

    const [userEdit, setUserEdit] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const user = useSelector((state) => selectUser(state, userId));

    const handleUserEdit = ({ target: { value } }) => setUserEdit(value);

    const handleDeleteUser = () => dispatch(deleteUser({ id: userId }));

    const triggerUserEdit = () => {
        setUserEdit(user.name);
        setIsEditing(true);
    };

    const acceptEdit = () => {
        dispatch(editUser({ name: userEdit, id: userId }));
        setIsEditing(false);
    };

    const cancelEdit = () => {
        setIsEditing(false);
    };

    return {
        user,
        handleDeleteUser,
        userEdit,
        handleUserEdit,
        triggerUserEdit,
        acceptEdit,
        cancelEdit,
        isEditing,
    };
};

export default useUserRow;
