import { memo } from "react";
import Login from "../../../organisms/demoItem/regist/Login";
import AllUser from "../../../organisms/demoItem/regist/AllUser";

/** 凄い雑な作り…IDの紐づけ周りtableか連想配列とかでやりたい*/
export type ContentID = {
    ID: number;
}

/**
 * 練習用
 * ユーザー管理アプリを開いた時のコンテンツに表示物をControllするController
 */
export const RegistApp = memo(function registapp(props : ContentID){
    /** 取得したIDで表示するものを変える*/
    const { ID =  0 } = props;

    //データ登録(ここらへんいい仕組みが思いつけば変えたい)
    
    return(
        <>
            <Login/>
        </>
    );
})