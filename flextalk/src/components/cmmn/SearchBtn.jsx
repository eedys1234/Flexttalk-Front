
const SearchBtn = ({onClick, onKeyUp}) => (

    <button type="button" class="btn search" onClick={onClick} onKeyUp={onKeyUp}>
        <span class="sp_ic ic_search"></span>
    </button>
);

export default SearchBtn;