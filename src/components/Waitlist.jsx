import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle } from 'lucide-react';
import { db } from "../../lib/firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

const Waitlist = () => {
    const [email, setEmail] = useState("");
    const [isSent, setSent] = useState(false)

    const sendEmailToBackEnd = async (e) => {
        e.preventDefault();

        if (!email || email.trim() === '') {
            alert("Please enter a valid email address.");
            console.warn("Input 'email' is empty or invalid:", email);
            return;
        }

        // Sanitize and trim the email input
        const cleanEmail = email.trim().toLowerCase();

        try {
            const docRef = doc(db, "waitlistSignUpEmails", cleanEmail);

            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                alert("It looks like this email is already on our waitlist. Thank you!");
                setEmail("");
                return;
            }

            const dataToSet = {
                email: cleanEmail, // Use the cleaned email for the field value
                timestamp: serverTimestamp()
            };

            await setDoc(docRef, dataToSet);
            setSent(true);

        } catch (error) {
            console.error("FAILURE: An error occurred during email submission.");
            console.error("Error details:", error);
            console.error("Error Code:", error.code);
            console.error("Error Message:", error.message);

            // Provide more specific user feedback if possible
            if (error.code === 'permission-denied') {
                alert("A server-side permission error occurred. This might indicate an issue with your Firestore rules or data structure. Please check the console for details.");
            } else if (error.code === 'invalid-argument') {
                alert("There was an issue with the data being sent to Firestore. Please ensure your email is valid and try again.");
            }
            else {
                alert("An unexpected error occurred while adding your email. Please try again.");
            }
            setSent(false); // Ensure UI reflects failure
        }
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
                        placeholder="Email"
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