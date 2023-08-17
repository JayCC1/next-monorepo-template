import {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
} from "next";
import dynamic from "next/dynamic";

type Props = InferGetServerSidePropsType<typeof getStaticProps>;

export default function Page({ slug }: Props) {
  const Content = dynamic(() => import(`packges/${slug}/docs/index.mdx`), {
    ssr: false,
  });

  return (
    <div>
      <Content />
    </div>
  );
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  return {
    path: [
      { params: { slug: ["login"] } },
      { param: { slug: ["user-select"] } },
    ],
    fallback: false, // SSG 模式
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string[] }>) {
  const slug = params?.slug.join("/");

  return {
    props: {
      slug,
    }, // 传递给组件的 props
  };
}
