//**********************************************************************
//サウンドに関する関数群
//**********************************************************************
class Sound {
    constructor(name, audio) {
        this.name = name;
        this.audio = audio;
        this.sounds = [];
        this.sounds.push(new Sound("bgm", new Audio("sound/bgm.mp3")));
        this.sounds.push(new Sound("flogs", new Audio("sound/flogs.mp3")));
        this.sounds.push(new Sound("river", new Audio("sound/river.mp3")));
        this.sounds.push(new Sound("kohrogi", new Audio("sound/kohrogi.mp3")));
        this.sounds.push(
            new Sound("kohrogi2", new Audio("sound/kohrogi2.mp3"))
        );
        this.sounds.push(
            new Sound("suzumushi", new Audio("sound/suzumushi.mp3"))
        );
        this.sounds.push(
            new Sound("suzumushi2", new Audio("sound/suzumushi2.mp3"))
        );
        this.ctrlSounds("bgm", 0);
    }

    //**********************************************************************
    //すべての効果音をストップさせる
    //**********************************************************************
    pauseAllEffectSounds() {
        for (var i = 0; i < sound.sounds.length; i++) {
            if (!sound.sounds[i].audio.paused) {
                sound.sounds[i].audio.pause();
            }
        }
        return;
    }
    //**********************************************************************
    //ある効果音だけ指定してストップ
    //**********************************************************************
    pauseEffectSound(
        name //my_pauseEffectSound(name){
    ) {
        for (var i = 0; i < sound.sounds.length; i++) {
            if (sound.sounds[i].name == name) {
                sound.sounds[i].audio.pause();
                break;
            }
        }
        return;
    }
    //**********************************************************************
    //ある効果音だけ指定して再生
    //**********************************************************************
    playEffectSound() { //my_playEffectSound(name){
        for (var i = 0; i < sound.sounds.length; i++) {
            if (sound.sounds[i].name == name) {
                sound.sounds[i].audio.play();
                break;
            }
        }
        return;
    }
    //**********************************************************************
    //音が出ていたら止めて止まっていたらならす
    //**********************************************************************
    switchEffectSound(name) {
        for (var i = 0; i < sound.sounds.length; i++) {
            if (sound.sounds[i].name == name) {
                console.log(sound.sounds[i].name);
                if (!sound.sounds[i].audio.paused) {
                    sound.sounds[i].audio.pause();
                } else {
                    sound.sounds[i].audio.play();
                }
                break;
            }
        }
        return;
    }
    //**********************************************************************
    //音源に関する関数
    //何(音源ファイル名)をどうするか(stop, clear, start, restart)？
    //**********************************************************************
    ctrlSounds(name, action) {
        for (var i = 0; i < sound.sounds.length; i++) {
            if (sound.sounds[i].name == name) {
                sound.soundsAction(sound.sounds[i].audio, action);
                break;
            }
        }
    }
    //**********************************************************************
    //音源に関する関数
    //音源をどうするか(stop, clear, start, restart)？
    //**********************************************************************
    soundsAction(audio, action) {
        switch (action) {
            case 0:
                audio.loop = true;
                audio.play();
                break;
            case 1:
                if (!audio.ended) {
                    audio.pause();
                }
                break;
            case 2:
                audio.volume += 0.1;
                break;
            case 3:
                audio.volume -= 0.1;
            case 2:
                audio.loop = true;
                break;
            case 3:
                audio.loop = false;
                break;
            default:
                console.log("err");
                break;
        }
    }
}
