import { nanoid } from 'nanoid';
import { InputName } from './App/AppStyled';
import { getFilter } from '../redux/filter/filter-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { filterNameContact } from "redux/filter/filter-Slice";

export default function FilterContacts() { 
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const filterId = nanoid();

    const handleChangeInput = e => {
        dispatch(filterNameContact(e.target.value));
    }
    return (
        <div>
            <InputName htmlFor={filterId}>Find contacts by name</InputName>
            <input
                id={filterId}
                value={filter}
                type="text"
                name="filter"
                onChange={handleChangeInput}
            />
        </div>      
    )
}
