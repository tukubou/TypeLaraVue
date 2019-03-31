import Bg from "./bg";
import Firefly from "./firefly";
import Util from "./util";
const canvas = $("#main");
const util = new Util();
const ps = util.getParentSize();
canvas.attr("width", ps.width);
canvas.attr("height", ps.height);
const ctx = document.getElementById("main").getContext("2d");
const fireflies = []; // サークルオブジェクトを入れる関数
let time = 0;

const w = window.innerWidth;
const getsizetype = w <= 768 ? "sm" : w <= 991 ? "md" : w <= 1199 ? "lg" : "xs";
let maxnum = getsizetype == "xs" ? 1000 : 20; // 出現するホタルの最大数
maxnum = 10000;
let maxflag = false; // ホタルの数がMAXになったら立つ
const developflag = false;

const background = new Bg();
background.changeBackGround(1, developflag);
// $('#main').css('background-image', "{{ asset('img/firefly/picture1.jpg') }}'");
$("#main").css("background-image", "../../../img/firefly/picture1.jpg");
/*
bgm.play();
bgm.loop = true;
river.play();
river.volume = 0.2;
river.loop = true;
//kohrogi2.play();
//kohrogi2.volume = 0.2;
suzumushi2.play();
suzumushi2.volume = 0.2;
*/
setInterval(main, 10);
console.log("START");
// メイン関数
function main() {
    // キャンバスをクリア（消す）
    ctx.clearRect(0, 0, ps.width, ps.height);
    console.log("AAA");
    if (time > 100 || time == 0) {
        time = 0;
        // サークルオブジェクトを配列に格納
        if (!maxflag) {
            fireflies.push(new Firefly(fireflies.length, ctx));
            fireflies[fireflies.length - 1].init();
            if (fireflies.length === maxnum) {
                maxflag = true;
            }
        }
    }
    // 蛍の描画
    for (const firefly of fireflies) {
        firefly.move();
        firefly.view(developflag);
    }
    time++;
}
