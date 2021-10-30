import Layout from "../../components/Layout";
import Content from "../../components/templates/contents/ContentLayout";

import { BaseLink } from "../../components/atoms/link/BaseLink";
import { ContentLStyle } from "../../components/atoms/link/ContentLink";
import { HeaderOnly } from "../../components/templates/HeaderLayOut";
import { ContentsMainArea } from "../../components/templates/contents/ContentsMainArea";
import { ContentsSubArea } from "../../components/templates/contents/ContentsSubArea";
import { H1 } from "../../components/atoms/contents/H1";
import { H2 } from "../../components/atoms/contents/H2";
import { P } from "../../components/atoms/contents/P";

export default function LoadHome() {
  return (
    <>
      <Layout title="Load">
        <HeaderOnly/>
        <Content>
          <ContentsMainArea>
            <H1>今まで作ってきたものの</H1>
            <H2>試作品機能群</H2>
              <BaseLink name="Todoアプリ" url="./todo" LStyle = {ContentLStyle} key="0"/><br></br>
              <BaseLink name="会員登録系" url="./regist/home" LStyle = {ContentLStyle} key="0"/>
              <P>test</P>
          </ContentsMainArea>
          <ContentsSubArea>
            <H1>Side Contents</H1>
          </ContentsSubArea>
        </Content>
      </Layout>
    </>
  )
}
