import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart2, Globe, Shield } from 'lucide-react';

const FeatureDemo = () => {
    return (
        <section id="features" style={{ padding: '100px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <span style={{ color: 'var(--secondary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Future Release</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '1rem' }}>The <span className="gradient-text"> Wahala Dashboard</span></h2>
                </motion.div>

                {/* Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel"
                    style={{
                        width: '100%',
                        maxWidth: '1000px',
                        height: '600px',
                        margin: '0 auto',
                        position: 'relative',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 0 50px rgba(99, 102, 241, 0.1)',
                        display: 'grid',
                        gridTemplateColumns: '250px 1fr',
                        overflow: 'hidden'
                    }}
                >
                    {/* Sidebar */}
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.8 }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--secondary)' }}></div>
                            <span style={{ fontWeight: 600 }}>Nova OS</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--primary)', background: 'rgba(99,102,241,0.1)', padding: '10px', borderRadius: '10px' }}>
                                <Activity size={18} /> <span>Overview</span>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.6 }}>
                                <BarChart2 size={18} /> <span>Analytics</span>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.6 }}>
                                <Globe size={18} /> <span>Network</span>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.6 }}>
                                <Shield size={18} /> <span>Security</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div style={{ padding: '3rem', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '2rem' }}>System Status</h3>
                                <p style={{ opacity: 0.6 }}>Live metrics from Sector 7</p>
                            </div>
                            <div className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem', borderRadius: '8px' }}>Export Report</div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '15px' }}>
                                <p style={{ opacity: 0.7, marginBottom: '0.5rem' }}>CPU Usage</p>
                                <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>42%</div>
                                <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.1)', marginTop: '1rem', borderRadius: '2px' }}>
                                    <div style={{ height: '100%', width: '42%', background: 'var(--accent)' }}></div>
                                </div>
                            </div>
                            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '15px' }}>
                                <p style={{ opacity: 0.7, marginBottom: '0.5rem' }}>Active Nodes</p>
                                <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>1,024</div>
                                <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.1)', marginTop: '1rem', borderRadius: '2px' }}>
                                    <div style={{ height: '100%', width: '85%', background: 'var(--secondary)' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Fake Chart */}
                        <div style={{ marginTop: '2rem', height: '200px', background: 'rgba(0,0,0,0.2)', borderRadius: '15px', display: 'flex', alignItems: 'flex-end', padding: '20px', gap: '10px' }}>
                            {[40, 60, 45, 70, 50, 80, 65, 90, 75, 55].map((h, i) => (
                                <div key={i} style={{ flex: 1, height: `${h}%`, background: `linear-gradient(to top, var(--primary), transparent)`, borderRadius: '4px 4px 0 0', opacity: 0.6 }}></div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureDemo;
