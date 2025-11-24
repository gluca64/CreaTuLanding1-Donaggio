import NavBar from '../components/Navbar/Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="pt-24">
        {children}
      </main>
    </div>
  );
}