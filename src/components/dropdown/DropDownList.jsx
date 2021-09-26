import { memo } from 'react';
import DropDownItem from './DropDownItem';
import styled from 'styled-components';

const DropDownList = ({opened, list, getName, getId, onClickItem, onClickFrontIC, onClickBackIC}) => {
    
    return(
        <StyledDropDownList
            opened={opened}
        >
        {
            list.map(item => 
                    <DropDownItem 
                        key={getId ? getId(item) : item.id}
                        name={getName ? getName(item) : item.name}
                        item={item}
                        onClickItem={onClickItem}
                        onClickFrontIC={onClickFrontIC}
                        onClickBackIC={onClickBackIC}
                    />
            )
        }
        </StyledDropDownList>
    )
};

const StyledDropDownList = styled.ul `
    border-bottom: 1px solid #e5e5e5;
    display: ${({opened}) => opened ? 'block' : 'none'}

`

export default memo(DropDownList);