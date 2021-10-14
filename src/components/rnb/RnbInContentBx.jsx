
import styled from 'styled-components';
import RnbInContentItem from './RnbInContentItem';

const RnbInContentBx = ({list}) => {

    return (
        <StyledContentBx>
            <div className="listbx">
                <ul>
                    {
                        list.map((item) => <RnbInContentItem 
                                                key={item.id}
                                                item={item}
                                            />)
                    }
                    
                </ul>
            </div>				
        </StyledContentBx>
    )
}

const StyledContentBx = styled.div `
    position: relative;
    overflow: auto;
    border: 1px solid #cfcfcf;
    margin-top: 12px;
    height: calc(100% - 55px);
`

export default RnbInContentBx;