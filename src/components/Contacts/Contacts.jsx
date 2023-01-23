import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Blocks } from  'react-loader-spinner'
import filterContact from 'redux/contacts/contacts-selectors';
import { ContactsList } from './ContactList';
import { fetchContacts } from "redux/api/contactsAPI";

export default function Contacts() {
    const dispatch = useDispatch();
    const items = useSelector(filterContact);
    const isLoading = useSelector(({ phoneBook }) => phoneBook.loading);
    const isError = useSelector(({ phoneBook }) => phoneBook.error);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);   
 
    return (
        <div>
            {isLoading && <Blocks
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
            />}
            {items && <ContactsList />}
            {isError && <p>Sorry, something is wrong. Please, try again later.</p>}
        </div>
    )
}
