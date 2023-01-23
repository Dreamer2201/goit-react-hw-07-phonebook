import { Wrapper, Title } from './AppStyled';
import PhonebookForm from '../PhonebookForm/PhonebookForm';
import Contacts from '../Contacts/Contacts';
import FilterContacts from '../FilterContacts';

export default function App() {
  return (<Wrapper>
              <div>
                  <Title>Phonebook</Title>
                  <PhonebookForm />
              </div>
              <div>
                  <Title>Contacts</Title>
                  <FilterContacts />
                  <Contacts />
              </div>
          </Wrapper>)
  }

