import Link from "next/link";

const PortfolioPage = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <ul>
        <li>
          <Link href="portfolio/max">Maximilian</Link>
        </li>
        <li>
          <Link href="portfolio/manuel">Manuel</Link>
        </li>
      </ul>
    </>
  );
};

export default PortfolioPage;
