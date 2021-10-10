import React from "react";
import Layout from "../../components/Layout";
import MainContent from "../../components/contents/MainContent";
import SubContent from "../../components/contents/SubContent";
import Header from "../../components/MainHeader";
import Content from "../../components/contents/ContentLayout"
import Footer from "../../components/MainFooter";
import Link from "next/link";

export default function LoadHome() {
  return (
    <React.Fragment>
      <Layout title="Load">
        <Header></Header>
        <Content>
          <MainContent>
            <h1 className="contents-h1">Load</h1>
            <h2 className="contents-h2">お試しで作ったもの</h2>
              <Link href="./todo">
                  <a className="contents-p">
                    Todoアプリ
                  </a>
              </Link>
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
