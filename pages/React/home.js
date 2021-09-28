import React from "react";
import Layout from "../../components/Layout";
import MainContent from "../../components/contents/MainContent";
import SubContent from "../../components/contents/SubContent";
import Header from "../../components/MainHeader";
import Content from "../../components/contents/ContentLayout"
import Footer from "../../components/MainFooter";

export default function ReactHome() {
  return (
    <React.Fragment>
      <Layout title="React">
        <Header></Header>
        <Content>
          <MainContent>
            <h1 className="contents-h1">React</h1>
            <h2 className="contents-h2">最新記事</h2>
            <p className="contents-p">
              最新投稿記事の一覧を10項目程リストで表示する。<br></br>
              分類
            </p>
            <h2 className="contents-h2">初心者サポート</h2>
          </MainContent>
          <SubContent>
            <h1 className="contents-h1">Side Contents</h1>
          </SubContent>
        </Content>
        <Footer></Footer>
      </Layout>
    </React.Fragment>
  )
}
