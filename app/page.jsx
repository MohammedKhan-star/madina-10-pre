import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      <Header />

      <main className="flex-grow px-4 py-10">

        <p className="mb-6 text-lg text-center text-gray-800">
          Enter your <strong>Hall Ticket Number</strong> to check your result.
        </p>

        <SearchForm />

      </main>

      <Footer />

    </div>
  );
}