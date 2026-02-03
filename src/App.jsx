import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import FeatureDemo from './components/FeatureDemo';
import Info from './components/Info';
import Waitlist from './components/Waitlist';
import Pricing from './components/Pricing';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Hero />
                <Info />
                <FeatureDemo />
                {/* <Pricing /> */}
                <Contact />
                <Waitlist />
            </main>
            <footer style={{
                textAlign: 'center',
                padding: '3rem 2rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                marginTop: '2rem',
                color: 'var(--text-secondary)'
            }}>
                <p>&copy; 2025 Wahala Inc. Built for the bold.</p>
            </footer>
        </div>
    );
}

export default App;
