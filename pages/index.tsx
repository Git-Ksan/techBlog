import React from "react";
import Layout from "../components/Layout";
import Content from "../components/templates/contents/ContentLayout"

import { HeaderOnly } from "../components/templates/HeaderLayOut";
import { ContentsMainArea } from "../components/templates/contents/ContentsMainArea";
import { ContentsSubArea } from "../components/templates/contents/ContentsSubArea";
import { H1 } from "../components/atoms/contents/H1";
import { H2 } from "../components/atoms/contents/H2";
import { P } from "../components/atoms/contents/P";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <HeaderOnly/>
        <Content>
          <ContentsMainArea>
            <H1>Home</H1>
            <H2>最新記事</H2>
            <P>
              最新投稿記事の一覧を10項目程リストで表示する。<br />
              分類
            </P>
            <H2>初心者サポート</H2>
          </ContentsMainArea>
          <ContentsSubArea>
            <H1>Side Contents</H1>
          </ContentsSubArea>
        </Content>
      </Layout>
    </>
  )
}
