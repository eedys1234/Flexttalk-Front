
import styled from "styled-components";
import DropDownList from "./DropDownList";

const list = [
    {
        selected: true,
        name : '차석기',
        count : 1,
    },
    {
        selected: false,
        name : '이해준',
        count : 1,
    },
    {
        selected: false,
        name : 'LEE',
        count : 1,
    }
]

const DropDownBox = ({title = '', count = 0, opened = true}) => {

    return(
    <StyledDropDownBox
        opened={opened}
    > 
        <StyledDropDownTitleBox>
            <StyledDropDownTitle>
                <span>
                    {/* 즐겨찾는 목록 */}
                    {title}(<span className="number">{count}</span>)
                </span>
                <StyledDropDownCollapse/>
            </StyledDropDownTitle>
        </StyledDropDownTitleBox>
        <DropDownList
            list={list}
        >
        </DropDownList>
    </StyledDropDownBox>
    )
}

const StyledDropDownBox = styled.div `
    background: #fff;
    border-radius: 5px;
    margin-top: 9px;
    display: ${(props) => props.opened ? 'block' : 'none'}
`

const StyledDropDownTitleBox = styled.div `
    position: relative;
    border-bottom: 1px solid #d9e4e5;
`

const StyledDropDownTitle = styled.a `
    display: block;
    height: 48px;
    line-height: 48px;
    padding: 0 50px 0 33px;
    font-size: 14px;
    cursor: pointer;
`

const StyledDropDownCollapse = styled.i `
    position: absolute;
    top: 21px;
    left: 17px;
    background-position: ${(props) => props.opened ? '-50px -50px' : '-175px -225px'};
    width: 8px;
    height: ${(props) => props.opened ? '4px' : '8px'};
    margin-top: ${(props) => props.opened ? '-2px' : '0'};
`

export default DropDownBox;