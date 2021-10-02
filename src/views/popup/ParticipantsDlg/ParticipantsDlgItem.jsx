
import styled from 'styled-components';

const ParticipantsDlgItem = () => {

    return (
        <StyledContentItem>
            <StyledContentItemBtn>
                <StyledProfileBx>
                    <StyledImageBx />
                </StyledProfileBx>
                <StyledProfileInfoBx>
                    <StyledProfileName>이정환
                        <StyledProfileMaster>마스터</StyledProfileMaster>
                    </StyledProfileName>
                    <div style={{maxWidth: '100%'}}>
                        <StyledProfileEmail>
                            test@gmail.com
                        </StyledProfileEmail>
                    </div>
                </StyledProfileInfoBx>
            </StyledContentItemBtn>
        </StyledContentItem>
    )
}

const StyledContentItem = styled.li `
    position: relative;
    border-bottom: 1px solid #e9e9e9;
`

const StyledContentItemBtn = styled.button `
    position: relative;
    padding: 17px 25px 17px 80px;
    box-sizing: border-box;
    border: 0;
    background: transparent;
    text-align: left;
    width: 100%;
    outline: 0;		
    cursor: pointer;
    &::before {
        content: "";
        position: absolute;
        top: 15px;
        left: 24px;
        width: 6px;
        height: 6px;
        background: #a5a5a5;
        border-radius: 50%;	
    }
`

const StyledProfileBx = styled.div `
    position: absolute;
    top: 50%;
    left: 26px;
    margin-top: -21px;
    width: 42px;
    height: 42px;
    overflow: hidden;
    display: inline-block;
    background-color: #accfec;
    border-radius: 50%;
    vertical-align: top;
    transform: translateY(0);		
    overflow: hidden;
`

const StyledImageBx = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://static.wehago.com/imgs/common/profile_default.png);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    color: transparent;		
`

const StyledProfileInfoBx = styled.div `
    text-align: left;
`

const StyledProfileName = styled.span `
    display: inline-block;
    padding-right: 55px;
    max-width: 100%;
    box-sizing: border-box;	
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    text-overflow: ellipsis;
    position: relative;
    font-size: 14px;
    color: #393939;	
`

const StyledProfileMaster = styled.span `
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    font-size: 11px;
    color: #fff;
    background: #ffc600;
    height: 16px;
    line-height: 18px;
    padding: 0 4px 0 16px;
    border-radius: 4px;
    vertical-align: top;
    width: 50px;
    box-sizing: border-box;
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 4px;
        width: 10px;
        height: 10px;
        margin-top: -5px;
        background: url(https://static.wehago.com/imgs/common/sp_rnb.png) -242px -295px no-repeat;
    }
`

const StyledProfileEmail = styled.span `
    display: block;
    font-size: 12px;
    color: #929292;
    padding-top: 7px;	
    padding-right: 70px;
`

export default ParticipantsDlgItem;