import Header from "../components/Header";
import Banner from "../components/Banner";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Banner />
      <SearchBox />
    </div>
  );
}
