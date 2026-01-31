import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle } from 'lucide-react';

const Waitlist = () => {
    const [email, setEmail] = useState("");
    const [isSent, setSent] = useState(false)

    const sendEmailToBackEnd = async (e) => {
        e.preventDefault();
        console.log(email);
        //Send email to our db or something
        setSent(true)
    }   
    return (
        <section id = "waitlist" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '100px 20px' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h1 className="gradient-text" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Waitlist</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Be ready for when the product drops</p>
            </motion.div>

            <form onSubmit={sendEmailToBackEnd}>
                <div style={{ display: 'flex', flexDirection: "column", gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <input
                        type="email"
                        id="email"
                        required
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                        style={{
                            width: '50vh',
                            padding: '1rem 0.5rem',
                            fontSize: '1.1rem',
                            textAlign: 'center',
                            outline: 'none',
                            border: '0.2rem solid var(--accent)',
                            borderRadius: '1rem',
                        }}
                    />

                    {isSent && 
                        <div style={{
                            fontSize: '1.2rem',
                            alignSelf: 'center',
                            fontWeight: "500",
                            color: "grey",
                            alignItems: 'center',
                        }}> 
                            <CheckCircle size={24} style= {{margin: "0rem 1rem"}} color="var(--accent)" />
                            You will be notified when Wahala goes live !
                        </div>}
                    <button type="submit" disabled={isSent} className= {isSent ? "btn btn-disabled" :"btn btn-primary"} style={{ alignSelf: 'center', maxWidth: 'fit-content', border: isSent ? '': '0.1rem solid var(--accent)'}}>Get Started</button>
                </div>
            </form>
        </section>
    )
}

export default Waitlist;