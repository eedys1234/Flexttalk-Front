import CMSnbHeader from './CMSnbHeader';

const CMSnb = () => (
    <div class="communication_snb">
    <CMSnbHeader />
    <div class="communication_snb_group">
      <div class="chatgroup_box close">
          <div class="chatgroup_box_title">
            <a class="title" href="#">
                <span>
                  즐겨찾는 목록(<span class="number">4</span>)
                </span>
                <i class="sp_ic"></i>
            </a>
          </div>
          <ul class="chatgroup_list">
            <li class="group_box">
                <a href="#" class="text">
                    <div class="img_thum">
                        <div class="pic_wrap">
                            <span class="use_member"></span>
                            <span class="use_member"></span>
                            <span class="use_member"></span>
                            <span class="use_member"></span>
                        </div>
                    </div>
                    <div class="ellipsis_text_wrap">
                      <em class="left_text">WEHAGO 팩스 서비스</em>
                      <span class="right_text member_count">(10)</span>
                    </div>
                </a>
                <button type="button" class="btn_bookmark">
                    <span class="ic_bookmark"></span>
                </button>
                <div class="alaram_bx">
                    <button type="button" class="btn_alaram">
                        <span class="ic_alaram"></span>
                    </button>
                </div>
            </li>
          </ul>
      </div>

      <div class="chatgroup_box open">
          <div class="chatgroup_box_title">
            <a class="title" href="#">
                <span>1:1 대화(<span class="number">4</span>)
                </span>
                <i class="sp_ic"></i>
            </a>
            <div class="btn_area">
              <button type="button" class="ft_btn btn_add_group">
                  <span class="sp_snb ic_add_group"></span>
              </button>
            </div>
          </div>
          <ul class="chatgroup_list">
            <li class="group_box">
                <a href="#" class="text">
                    <div class="img_thum">
                        <div class="pic_wrap">
                            <span class="use_member"></span>
                            <span class="use_member"></span>
                            <span class="use_member"></span>
                            <span class="use_member"></span>
                        </div>
                    </div>
                    <div class="ellipsis_text_wrap">
                        <span class="left_text">WEHAGO 팩스 서비스</span>
                        <span class="right_text member_count">10</span>
                    </div>
                </a>
                <button type="button" class="btn_bookmark">
                    <span class="sp_co ic_bookmark add"></span>
                </button>
                <div class="alaram_bx">
                    <button type="button" class="btn_alaram">
                        <span class="sp_co ic_alaram"></span>
                    </button>
                </div>
            </li>
            <li class="group_box select">
                <a href="#" class="text">
                    <div class="img_thum">
                        <div class="pic_wrap">
                            <span class="use_member"></span>
                            <span class="use_member"></span>
                            <span class="use_member"></span>
                            <span class="use_member"></span>
                        </div>
                    </div>
                    <div class="ellipsis_text_wrap">
                        <span class="left_text">WEHAGO 팩스 서비스</span>
                        <span class="right_text member_count">10</span>
                    </div>
                </a>
                <button type="button" class="btn_bookmark">
                    <span class="sp_co ic_bookmark remove"></span>
                </button>
                <div class="alaram_bx">
                    <button type="button" class="btn_alaram">
                        <span class="sp_co ic_alaram"></span>
                    </button>
                </div>
            </li>
            <li class="group_box">
                <a href="#" class="text">
                    <div class="img_thum">
                        <div class="pic_wrap">
                            <span class="use_member"></span>
                            <span class="use_member"></span>
                            <span class="use_member"></span>
                            <span class="use_member"></span>
                        </div>
                    </div>
                    <div class="ellipsis_text_wrap">
                        <span class="left_text">WEHAGO 팩스 서비스</span>
                        <span class="right_text member_count">10</span>
                    </div>
                </a>
                <button type="button" class="btn_bookmark">
                    <span class="sp_co ic_bookmark add"></span>
                </button>
                <div class="alaram_bx">
                    <button type="button" class="btn_alaram">
                        <span class="sp_co ic_alaram"></span>
                    </button>
                </div>
            </li>
          </ul>
      </div>
    </div>
</div>

);

export default CMSnb;