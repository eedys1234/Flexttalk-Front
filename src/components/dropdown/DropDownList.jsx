import { memo } from 'react';
import DropDownItem from './DropDownItem';
import styled from 'styled-components';

const DropDownList = ({list, convertProps}) => {
    
    list = convertProps && list.map(convertProps);

    return(
        <StyledDropDownList>
        {
            list.map(item => 
                <DropDownItem 
                    key={item.id}
                    item={item}
                    convertProps={convertProps}
                />
            )
        }
        </StyledDropDownList>
    )
};

const StyledDropDownList = styled.ul `
    border-bottom: 1px solid #e5e5e5;
`

export default memo(DropDownList);