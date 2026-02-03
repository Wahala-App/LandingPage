import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-navbar"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.2rem 4rem',
            }}
        >
            <div className="logo" style={{ fontSize: '2rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                onClick={(e) => {e.preventDefault(); scrollToSection("hero")}}>
                <img src="/wahala.svg" alt="Wahala" style={{ width: '32px', height: '32px' }} />
                {/* <div style={{ width: '12px', height: '12px', background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent)' }}></div> */}
                <span className="gradient-text">Wahala</span>
            </div>

            <ul className="nav-links" style={{ display: 'flex', gap: '3rem', listStyle: 'none' }}>
                {['Home', 'Info', 'Features', 'Contact', 'Waitlist'].map((item) => ( //Add Pricing back at some point
                    <li key={item}>
                        <a
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase()); }}
                            className="nav-link"
                            style={{ fontSize: '1.1rem' }}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
