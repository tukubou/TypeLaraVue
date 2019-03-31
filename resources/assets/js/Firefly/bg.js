//**********************************************************************
//バックグラウンド関数群
//**********************************************************************
import Util from './util';
export default class Bg {
    constructor() {
    }
    changeBackGround(wall_num, developflag)
    {
        var pic_path = "img/picture";
        const util = new Util();
    	pic_path += util.getSizeType() == 'xs'? wall_num+"" : (wall_num+5)+""; 
        if(wall_num == 0){
            $('#main').css('background-image', 'none');
            $('#main').css('background-color', '#aaaaaa');
            developflag = true;
        } else {
            // $('#main').css('background-image', "../"+pic_path+".jpg");
            
            developflag = false;
        }
        return;
    }
}