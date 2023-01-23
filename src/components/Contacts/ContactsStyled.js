import styled from 'styled-components';

const ContactsListStyled = styled.ol`
    font-size: 24px;
`;
const ContactItemStyled = styled.li`
    display: flex;
    align-items: center;
`;

const DeleteContactBtn = styled.button`
    margin-left: 15px;
`;

export { ContactsListStyled, ContactItemStyled, DeleteContactBtn };