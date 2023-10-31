import { useRouter } from "next/router";

const PortfolioPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <h1>The {router.query.projectId} Page</h1>;
};

export default PortfolioPage;
