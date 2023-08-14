import { useRouter } from "next/router";
// наш_домен.com/news/something-important
function DetailPage() {
  const router = useRouter();
  console.log(router.query.newsId);

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
