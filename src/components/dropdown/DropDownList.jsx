import DropDownItem from './DropDownItem';
import styled from 'styled-components';

const DropDownList = ({list}) => {

    return(
        <StyledDropDownList>
        {
            list.map((item)=> createItem(item))
        }
        </StyledDropDownList>
    )
};

const createItem = (item) => {
    return <DropDownItem 
                item={item}
            />
}

const StyledDropDownList = styled.ul `
    border-bottom: 1px solid #e5e5e5;
`

export default DropDownList;