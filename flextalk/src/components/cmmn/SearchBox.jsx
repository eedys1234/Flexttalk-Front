import SearchBtn from './SearchBtn';
import CacnelBtn from './CancelBtn';

const SearchBox = ({onClickCancel, onClickSearch, onKeyUpSearch, onChangeInput}) => (

    <div class="search_bx">
        <div class="searchfield">
            <div class="basic_text">
                <div class="inpbx">
                    <input type="text" onChange={onChangeInput}>
                    </input>
                    <SearchBtn 
                        onClick={onClickSearch}
                        onKeyUp={onKeyUpSearch}
                    />
                    <CacnelBtn 
                        onClick={onClickCancel}
                    />                    
                </div>
            </div>
        </div>
    </div>
);

export default SearchBox;