import Layout from "../../../components/Layout";
import Content from "../../../components/templates/contents/ContentLayout";

import { BaseButton } from "../../../components/atoms/button/BaseButton";
import { PrimaryBStyle } from "../../../components/atoms/button/PrimaryButton";
import { HeaderOnly } from "../../../components/templates/HeaderLayOut";
import { ContentsMainArea } from "../../../components/templates/contents/ContentsMainArea";
import { ContentsSubArea } from "../../../components/templates/contents/ContentsSubArea";
import { H1 } from "../../../components/atoms/contents/H1";
import { H2 } from "../../../components/atoms/contents/H2";
import { RegistApp, ContentID} from "../../../components/templates/demoItem/regist/RegistApp";

export default function RegistHome(){
  
    //ヘッダーに表示するリスト 増やしたい時はここいじる
    let id : Array<ContentID> = [
      {ID : 0},
  ];

  return (
    <>
      <Layout title="会員登録">
        <HeaderOnly/>
        <Content>
          <ContentsMainArea>
            <H1>ユーザー管理アプリ(デモ)</H1>
            <H2>メニュー</H2>
              <BaseButton BStyle ={PrimaryBStyle}>ログイン画面</BaseButton>
              <BaseButton BStyle ={PrimaryBStyle}>ユーザー一覧</BaseButton>
            <H2>コンテンツ</H2>
            <RegistApp ID = {id[0].ID} key = {0}></RegistApp>
          </ContentsMainArea>
          <ContentsSubArea>
            <H1>Side Contents</H1>
          </ContentsSubArea>
        </Content>
      </Layout>
    </>
  )
}
