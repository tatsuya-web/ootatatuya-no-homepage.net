import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>ootatatuya-no-homepage.net</title>
        <meta name="description" content="オオタ タツヤのホームページです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.heroImage}>
            <img src="/images/my-face.jpeg" alt="オオタタツヤの似顔絵" />
          </div>
          <h1 className={styles.heroTtl}>
            <ruby>
              <rb>太田 達也</rb>
              <rp>（</rp>
              <rt>オオタ タツヤ</rt>
              <rp>）</rp>
            </ruby>
          </h1>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.intro}>
          <p>
            北陸でwebエンジニアしてます。
            <br />
            お仕事ください。
            <br />
            <a href="mailto:tatuya2518@gmail.com?subject=ホームページより:お仕事の依頼">
              tatuya2518@gmail.com
            </a>
          </p>
          <ul className={styles.sns}>
            <li>
              <a href="/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.inner}>
          <section className={styles.section}>
            <h2 className={styles.sectionName}>Skill</h2>
            <dl className={styles.skill}>
              <dt>プログラミング言語</dt>
              <dd>PHP/Javascript/Typescript/Go/python</dd>
              <dt>フレームワーク/ライブラリ</dt>
              <dd>Laravel/Wordpress/jQuery/React/Nextjs/Revel</dd>
              <dt>データベース</dt>
              <dd>MySql/MariaDB/SQLite</dd>
              <dt>AWS</dt>
              <dd>
                VPC/InternetGateway/NatGateway/APIGateway/Route53/
                <br />
                CloudFront/EC2/S3/ECS/AWSFargate/RDB/ElastiCache/Cloud Watch
              </dd>
              <dt>その他インフラ</dt>
              <dd>
                さくらレンタルーサーバー/さくらVPS/さくらクラウド/ロリポップ
              </dd>
              <dt>趣味で触ったもの</dt>
              <dd>raspberrypi/M5Stack/Flutter/Firebse など</dd>
            </dl>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionName}>Works</h2>
            <div className={styles.works}>
              <article>
                <time dateTime="2023-00-00">2023/00/00</time>
                <a href="/" target="_blank">
                  <em>XXXXXXXXXXXXX</em>
                </a>
              </article>
              <article>
                <time dateTime="2023-00-00">2023/00/00</time>
                <em>XXXXXXXXXXXXX</em>
              </article>
              <article>
                <time dateTime="2023-00-00">2023/00/00</time>
                <em>XXXXXXXXXXXXX</em>
              </article>
              <article>
                <time dateTime="2023-00-00">2023/00/00</time>
                <em>XXXXXXXXXXXXX</em>
              </article>
              <article>
                <time dateTime="2023-00-00">2023/00/00</time>
                <em>XXXXXXXXXXXXX</em>
              </article>
              <article>
                <time dateTime="2023-00-00">2023/00/00</time>
                <em>XXXXXXXXXXXXX</em>
              </article>
              <article>
                <time dateTime="2023-00-00">2023/00/00</time>
                <em>XXXXXXXXXXXXX</em>
              </article>
            </div>
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© OOTATATUYA</p>
      </footer>
      <main className={styles.main}></main>
    </>
  );
}
