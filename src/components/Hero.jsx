import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '100px 20px' }}>
            {/* Background elements */}
            <div className="bg-gradient-circle circle-1"></div>
            <div className="bg-gradient-circle circle-2"></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{
                        textTransform: 'uppercase',
                        letterSpacing: '8px',
                        fontSize: '1.8rem',
                        color: 'var(--accent)',
                        marginBottom: '1rem',
                        display: 'block',
                        fontWeight: 600
                    }}>
                        Introducing Wahala
                    </span>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 800 }}>
                        Disrupt the <br /> <span className="gradient-text">Status Quo</span>
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Instant incident reporting and event notification. Making our communities safer one report at a time
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
