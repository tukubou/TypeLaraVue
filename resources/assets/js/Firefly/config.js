//**********************************************************************
//JSONファイルをドラッグ&ドロップするとそのファイルの内容がテキストエリアに出力される関数(テキストでも可)
//htmlファイルを読み込んだ後に
//1.ドラッグ&ドロップするオブジェクトを指定
//2.最終的にオブジェクトが格納されるjsonObjを指定
//**********************************************************************
// ui-grid.js

class Config {
    constructor() {
        this.pole_span = -1;
        this.registants = null;
        this.charas = null;
        this.Link_Array = null;
        this.users_array;        
        $.getJSON("data/link_info.json", function(mydata){
            //ユーザ情報リストを取得
            config.Link_Array = mydata.Link_Array;
            var img_str ="";
            var count =0;
        });
    }
    /*
    // private property
    var privPropName = "privPropValue";

    // private method
    function privFuncName() {
    }

    // public function
    third.funcName = function () {
    }

    // public class
    third.ClassName = (function () {
        function ClassName() {
        }
        return ClassName;
    })();

    // public singleton object    
    third.objectName = (function () {
        return {
        };
    })();
*/
}