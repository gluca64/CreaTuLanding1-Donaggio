import NavBar from '../components/Navbar/Navbar';
import PropTypes from 'prop-types';

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

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};