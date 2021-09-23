
import styled from "styled-components";

const PopupBox = () => {

    return (
        <StyledPopupResultBox>
        <div className="result_scrall">
            <div className="result_scrallin">
                <div className>
                    <ul className="result_lst">
                        <li>
                            <StyledPopupResultItem>
                                <StyledPopupResultInner>답장</StyledPopupResultInner>
                            </StyledPopupResultItem>
                        </li>
                        <li>
                            <StyledPopupResultItem>
                                <StyledPopupResultInner>삭제</StyledPopupResultInner>
                            </StyledPopupResultItem>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </StyledPopupResultBox>

    );
}

const StyledPopupResultBox = styled.div `
    left: auto;
    right: 0;
    position: absolute;
    top: 100%;
    min-width: 88px;
    background: #fff;
    z-index: 20;
` 

const StyledPopupResultItem = styled.a `
    display: block;
    padding: 4px 6px 3px;
    color: #4a4a4a;
    font-size: 12px;
    font-family: 돋움,Dotum,Helvetica,Apple SD Gothic Neo,sans-serif!important;
    line-height: 20px;
    letter-spacing: -.5px;
    &:hover {
        background: #e5f3ff;
        
    }
    cursor: pointer;
`

const StyledPopupResultInner = styled.div `
    color: #4a4a4a;
    font-size: 12px;
    font-family: 돋움,Dotum,Helvetica,Apple SD Gothic Neo,sans-serif!important;
    text-align: left;
    line-height: 20px;
    letter-spacing: -.5px;
`

export default PopupBox;