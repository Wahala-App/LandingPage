import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, CheckCircle, Smartphone, AlertTriangle, Wifi } from 'lucide-react';

const FeatureDemo = () => {
    // Animation state
    const [step, setStep] = useState(0);

    // Sequence controller
    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 5);
        }, 2500); // 3 second intervals for each phase
        return () => clearInterval(interval);
    }, []);

    // Derived states for UI
    const isIncident = step >= 1;
    const isBroadcasting = step >= 2;
    const isCorroborating = step >= 3;
    const isVerified = step >= 4;

    return (
        <section id="features" style={{ padding: '100px 0', position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{ color: 'var(--primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                            Crowd-Sourced Trust
                        </span>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Trust, but <br /> <span className="gradient-text">Verify.</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                            Wahala uses a consensus protocol. When an incident is reported, nearby users are instantly pinged to corroborate.
                            <br /><br />
                            1. <strong>Report</strong>: A user drops a pin.
                            <br />
                            2. <strong>Broadcast</strong>: Alerts nearby users
                            <br />
                            3. <strong>Verify</strong>: Neighbors confirm with a tap.
                        </p>
                    </motion.div>

                    {/* Interactive Demo */}
                    <motion.div
                        className="glass-panel"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            height: '500px',
                            position: 'relative',
                            overflow: 'hidden',
                            background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.5) 0%, rgba(5, 5, 17, 0.8) 100%)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        {/* Map Grid Background */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                            opacity: 0.5
                        }}></div>

                        {/* Status Float */}
                        <div style={{ position: 'absolute', top: '20px', left: '20px', right: '20px', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
                            <motion.div
                                animate={{
                                    backgroundColor: isVerified ? 'rgba(6, 182, 212, 0.2)' : 'rgba(254, 213, 1, 0.1)',
                                    borderColor: isVerified ? 'var(--accent)' : 'var(--primary)'
                                }}
                                style={{
                                    padding: '10px 20px',
                                    borderRadius: '30px',
                                    border: '1px solid',
                                    backdropFilter: 'blur(10px)',
                                    display: 'flex', alignItems: 'center', gap: '10px'
                                }}
                            >
                                {isVerified ? <CheckCircle size={18} color="var(--accent)" /> : <AlertTriangle size={18} color="var(--primary)" />}
                                <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'white' }}>
                                    {isVerified ? "INCIDENT VERIFIED" : isIncident ? "VERIFICATION IN PROGRESS..." : "MONITORING ACTIVE"}
                                </span>
                            </motion.div>
                        </div>

                        {/* Central Incident Node */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 5 }}>
                            {/* Pulse Effect */}
                            {isBroadcasting && (
                                <motion.div
                                    initial={{ width: 0, height: 0, opacity: 0.8 }}
                                    animate={{ width: 400, height: 400, opacity: 0 }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    style={{
                                        position: 'absolute', top: '50%', left: '50%', x: '-50%', y: '-50%',
                                        borderRadius: '50%', border: '2px solid var(--primary)'
                                    }}
                                />
                            )}

                            {/* Pin */}
                            <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: isIncident ? 0 : -50, opacity: isIncident ? 1 : 0 }}
                                style={{ color: isVerified ? 'var(--accent)' : 'var(--primary)', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }}
                            >
                                <MapPin size={48} fill={isVerified ? "var(--accent)" : "var(--primary)"} color="#000" />
                            </motion.div>
                        </div>

                        {/* Surrounding Users - 6 users */}
                        <div style={{ position: 'absolute', inset: 0, zIndex: 4 }}>
                            {/* Top Left Cluster */}
                            <UserNode x="-80px" y="-60px" delay={0.2} active={isCorroborating} complete={isVerified} />
                            <UserNode x="-120px" y="-20px" delay={0.3} active={isCorroborating} complete={isVerified} />

                            {/* Top Right Cluster */}
                            <UserNode x="90px" y="-40px" delay={0.4} active={isCorroborating} complete={isVerified} />
                            <UserNode x="130px" y="10px" delay={0.5} active={isCorroborating} complete={isVerified} />

                            {/* Bottom Cluster */}
                            <UserNode x="-20px" y="80px" delay={0.6} active={isCorroborating} complete={isVerified} />
                            <UserNode x="60px" y="90px" delay={0.7} active={isCorroborating} complete={isVerified} />
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Sub-component for User Nodes
const UserNode = ({ x, y, delay, active, complete }) => {
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: `translate(calc(-50% + ${x}), calc(-50% + ${y}))` }}>
            {/* Connection Line */}
            {active && (
                <svg style={{ position: 'absolute', overflow: 'visible', left: '50%', top: '50%', width: '0', height: '0', pointerEvents: 'none' }}>
                    <motion.line
                        x1="0" y1="0" x2={parseInt(x) * -1 + "px"} y2={parseInt(y) * -1 + "px"}
                        stroke={complete ? "var(--accent)" : "rgba(255,255,255,0.2)"}
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </svg>
            )}

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: active ? 1 : 0.5, opacity: active ? 1 : 0.3 }}
                transition={{ delay }}
                style={{
                    background: complete ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                    width: '36px', height: '36px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: active ? '0 0 15px rgba(0,0,0,0.3)' : 'none',
                    border: active ? '1px solid rgba(255,255,255,0.2)' : 'none'
                }}
            >
                {complete ? <Wifi size={18} color="#000" /> : <Smartphone size={18} color="white" />}
            </motion.div>
        </div>
    );
};

export default FeatureDemo;
