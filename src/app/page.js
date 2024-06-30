import Header from '../components/Header';

export default function Home() {
  return (
    <>
    <main>
      <Header />

      <div className="grid justify-center min-h-screen bg-red-600">
        <h1>Les projets</h1>
      </div>
      <div className="grid justify-center min-h-screen bg-green-600">
        <h1>Les projets</h1>
      </div>
    </main>
    </>
  );
}
