import Home from "../../sources/view/home/Home";


export default function AProposPage() {
  return <Home />;
}

export async function getStaticProps(props) {
  //faire la requête axios
  return {
    props: {},
    revalidate: 60,
  };
}
