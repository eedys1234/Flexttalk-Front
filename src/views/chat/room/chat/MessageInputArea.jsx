
import styled from "styled-components";

const MessageInputArea = () => {

    return (
        <div className="chat_input">
        <div className="chat_input_inner">
            <div className="appending">
                <button type="button" className="ft_btn btn_appending">
                    <span className="ic_appending" />
                </button>
                <div className="appending_balloon_wrap">
                    <span className="ic_arrow_down" />
                    <div style={{ whiteSpace: 'nowrap' }}>
                        <dl className="appending_dl bxline">
                            <dt>공유</dt>
                            <dd>
                                <div>
                                    <button type="button" className="ft_btn">
                                        <span className="ic_file" />
                                    </button>
                                    <input type="file" />
                                </div>
                            </dd>
                            <dd>
                                <div>
                                    <button type="button" className="ft_btn">
                                        <span className="ic_file" />
                                    </button>
                                </div>
                            </dd>
                        </dl>
                        <dl className="appending_dl bxline">
                            <dt>부가기능</dt>
                            <dd>
                                <div>
                                    <button type="button" className="ft_btn">
                                        <span className="ic_file" />
                                    </button>
                                </div>
                            </dd>
                            <dd>
                                <div>
                                    <button type="button" className="ft_btn">
                                        <span className="ic_file" />
                                    </button>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="mentiony_container">
                <div className="mentiony_content" contentEditable="true">
                </div>
                <div className="mention">
                    <button type="button" className="ft_btn btn_mention">
                        <span className="ic_mention" />
                    </button>
                </div>
                <div className="emotion">
                    <button type="button" className="ft_btn btn_emotion">
                        <span className="ic_emotion" />
                    </button>
                </div>
                <button type="button" className="ft_btn chat_submit">
                    전송
                </button>
            </div>
        </div>
    </div>
    )
}

export default MessageInputArea;