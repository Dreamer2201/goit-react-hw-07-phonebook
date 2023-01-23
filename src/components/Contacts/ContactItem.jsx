import { ContactItemStyled, DeleteContactBtn} from "./ContactsStyled"

export default function ContactItem({ contact, deleteContact }) {
    const { id, name, phone } = contact;

    return (
        <div>
            <ContactItemStyled> {name}: {phone}
                <DeleteContactBtn type='button'
                    onClick={() => deleteContact({ id })}
                > Delete
                </DeleteContactBtn>
            </ContactItemStyled>
        </div>
    )
}
