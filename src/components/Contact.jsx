import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import tunjiImg from '../assets/tunji.jpeg';

const profiles = [
    {
        id: 1,
        name: "Ose",
        role: "Chief Visionary",
        contact: "elena@wahala.app",
        idPhotoLink: undefined,
        gradient: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"
    },
    {
        id: 2,
        name: "Kosi",
        role: "Mobile Dev",
        contact: "turbo@wahala.app",
        idPhotoLink: undefined,
        gradient: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    {
        id: 3,
        name: "Tunji",
        role: "Creative Director",
        contact: "tunjiadewoye1@gmail.com",
        idPhotoLink: tunjiImg,
        gradient: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)"
    }
];

const Contact = () => {
    return (
        <section id="contact" style={{ minHeight: '80vh', padding: '100px 20px', position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>The <span className="gradient-text">Squad</span></h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Meet the minds behind the madness.</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {profiles.map((profile, i) => (
                        <motion.div
                            key={profile.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-panel"
                            style={{
                                padding: '2rem',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                transition: 'transform 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                backgroundImage: profile.idPhotoLink ? `url(${profile.idPhotoLink})` : profile.gradient,
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                marginBottom: '1.5rem',
                                boxShadow: '0 0 20px rgba(0,0,0,0.2)'
                            }}></div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{profile.name}</h3>
                            <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '1.5rem' }}>{profile.role}</p>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                <button className="btn-icon" style={{ background: 'var(--glass-border)', border: 'none', color: 'var(--text-primary)', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}>
                                    <Mail size={18} />
                                </button>
                                <button className="btn-icon" style={{ background: 'var(--glass-border)', border: 'none', color: 'var(--text-primary)', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}>
                                    <Linkedin size={18} />
                                </button>
                                <button className="btn-icon" style={{ background: 'var(--glass-border)', border: 'none', color: 'var(--text-primary)', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}>
                                    <Twitter size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
