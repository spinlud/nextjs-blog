import Head from 'next/head';
import Layout from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from '../lib/posts';
import Link from 'next/link';

export async function getStaticProps() {
    const postsData = getSortedPostsData();
    return { props: { postsData } };
}

export default function Home({ postsData }) {
    return (
        <Layout home>
            <Head>
                <title>Home</title>
            </Head>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {postsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}