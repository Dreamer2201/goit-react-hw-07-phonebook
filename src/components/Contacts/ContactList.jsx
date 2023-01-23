
import { ContactsListStyled } from "./ContactsStyled";
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from "./ContactItem";
import filterContact from 'redux/contacts/contacts-selectors';
import { deleteContact } from "redux/api/contactsAPI";

export function ContactsList() {
    const items = useSelector(filterContact);
    const dispatch = useDispatch();
    const onDelete = (id) => dispatch(deleteContact(id));

    const elements = items.map((item) => {
         return (<ContactItem key={item.id} contact={item} deleteContact={onDelete} />)
    });
    return (
        <div>
            <ContactsListStyled> {elements}</ContactsListStyled>
        </div>
    )
}