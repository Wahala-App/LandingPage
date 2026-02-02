import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Clock, Shield, Globe, Users, Bell, Zap, Eye, Lock, CheckCircle } from 'lucide-react';

const Info = () => {
    const problems = [
        {
            icon: <Eye size={32} />,
            title: "Information Blindness",
            desc: "Over 100 million people daily make uninformed decisions about their safety due to critical information gaps."
        },
        {
            icon: <Clock size={32} />,
            title: "Statistical Lag",
            desc: "Official crime and safety statistics are retrospective—often arriving months too late to protect victims."
        },
        {
            icon: <AlertTriangle size={32} />,
            title: "The Cost of Delay",
            desc: "Delayed awareness during crises like infrastructure outages results in billions of dollars in lost productivity."
        }
    ];

    const benefits = [
        {
            title: "Democratization of Safety",
            desc: "Real-time intelligence is no longer a luxury. Wahala makes safety data accessible to everyone, everywhere."
        },
        {
            title: "Life-Saving Potential",
            desc: "From avoiding high-risk zones to early flood warnings, immediate information saves lives."
        },
        {
            title: "Civic Accountability",
            desc: "A public, verifiable map of infrastructure failures creates transparency and pressure for rapid resolution."
        }
    ];

    // Cycle the center icon + label every 5 seconds: Secure -> Fast -> Reliable
    const [displayIndex, setDisplayIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setDisplayIndex(i => (i + 1) % 3), 5000);
        return () => clearInterval(id);
    }, []);

    const centerStates = [
        { key: 'secure', icon: <Shield size={64} color="var(--primary)" />, label: 'SECURE' },
        { key: 'fast', icon: <Zap size={64} color="var(--accent)" />, label: 'FAST' },
        { key: 'reliable', icon: <CheckCircle size={64} color="var(--primary)" />, label: 'RELIABLE' }
    ];

    return (
        <section id="info" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
            
            {/* Background elements */}
            <div className="bg-gradient-circle circle-2" style={{ top: '20%', right: '-10%', opacity: 0.1 }}></div>

            <div className="container">
                
                {/* 1. THE CRISIS */}
                <div style={{ marginBottom: '8rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                            The <span className="gradient-text">Information Crisis</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                            The world's current approach to safety relies on antiquated systems that fail to provide real-time, actionable intelligence.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {problems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-panel"
                                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                            >
                                <div style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. THE SOLUTION */}
                <div style={{ marginBottom: '8rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                         <span style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                            Introducing Wahala
                        </span>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Real-Time Problem <br /> Awareness Infrastructure
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                            Wahala isn't just an app; it's a global nervous system. By crowdsourcing verified incident reports, we close the gap between an event occurring and you knowing about it.
                        </p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <div style={{ width: '36px', height: '36px', display: 'grid', placeItems: 'center', borderRadius: '50%', color: 'var(--primary)', background: 'rgba(105, 212, 6, 0.15)' }}><Zap size={20} /></div>
                                <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>Instant Danger Mapping</span>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <div style={{ width: '36px', height: '36px', display: 'grid', placeItems: 'center', borderRadius: '50%', color: 'var(--primary)', background: 'rgba(255, 7, 7, 0.1)' }}><Globe size={20} /></div>
                                <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>Global Service Alerts</span>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <div style={{ width: '36px', height: '36px', display: 'grid', placeItems: 'center', borderRadius: '50%', color: 'var(--primary)', background: 'rgba(6, 182, 212, 0.1)' }}><Lock size={20} /></div>
                                <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>Verified Crowdsourced Data</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                         initial={{ opacity: 0, scale: 0.9 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8 }}
                         className="glass-panel"
                         style={{ 
                             minHeight: '400px', 
                             display: 'flex', 
                             alignItems: 'center', 
                             justifyContent: 'center',
                             border: '1px solid var(--accent)',
                             background: 'linear-gradient(145deg, rgba(6, 182, 212, 0.05), rgba(0,0,0,0))'
                         }}
                    >
               
                        <div style={{ position: 'relative', width: '300px', height: '300px' }}>
                             <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px dashed var(--accent)', opacity: 0.3 }}
                             />
                             <motion.div 
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                style={{ position: 'absolute', inset: '40px', borderRadius: '50%', border: '2px solid var(--primary)', opacity: 0.3 }}
                             />
                             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                 <AnimatePresence mode="wait">
                                     <motion.div
                                         key={centerStates[displayIndex].key}
                                         initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                         animate={{ opacity: 1, y: 0, scale: 1 }}
                                         exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                         transition={{ duration: 0.6 }}
                                     >
                                         {centerStates[displayIndex].icon}
                                         <div style={{ marginTop: '10px', fontWeight: 700, fontSize: '1.2rem' }}>
                                             {centerStates[displayIndex].label}
                                         </div>
                                     </motion.div>
                                 </AnimatePresence>
                             </div>
                        </div>
                    </motion.div>
                </div>

                {/* 3. THE IMPACT (Benefits) */}
                <div className="glass-panel" style={{ padding: '4rem 2rem', background: 'rgba(27, 43, 71, 0.11)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                         <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Why It Matters</h2>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {benefits.map((item, index) => (
                            <div key={index} style={{ textAlign: 'left', padding: '1rem' }}>
                                <h3 style={{ color: 'var(--accent)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                    {index + 1}. {item.title}
                                </h3>
                                <p style={{ color: 'var(--text-primaet)', lineHeight: '1.6' }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Info;