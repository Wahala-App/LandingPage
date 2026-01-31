import { motion } from "framer-motion";

const Pricing = () => {
    const currencyStyle = "currency";
    const currencyCountry = "NGN";

    const currencyFormat = new Intl.NumberFormat(
        "en-NG",
        {
            style: currencyStyle,
            currency: currencyCountry,
            minimumFractionDigits: 0, 
            maximumFractionDigits: 0,
        }
    )

    const pricingInfo = {
        "Free" : {
            lowerEndNaira: 0,
            higherEndNaira: 0,
            priceComment: "No Cost as Expected",
            benefits: [
                "You can see all incidents",
                "You can report incidents",
                "You can contribute/corroborate incidents",
            ]
        },
        "Premium" : {
            lowerEndNaira: 35000,
            higherEndNaira: 80000,
            benefits: [
                "All benefits in the Free Tier",
                "Ad-Free Experience",
                "Panic Button for Partners (Direct line to Law Enforcement)",
            ]
        },
        "Enterprise": {
            lowerEndNaira: 500_000,
            higherEndNaira: 2_000_000,
            benefits: [
                "All Benefits in the Free Tier",
                "Access to Risk API to secure delivery and transport routes",
                "Suggested Access Routes for Safe transit",
            ]
        },
        "Agency" : {
            lowerEndNaira: 1_000_000,
            higherEndNaira: 10_000_000,
            benefits: [
                "All Benefits in the Free Tier",
                "Real-time heat maps of suspected activity",
                "Direct line to dispatch teams",
                "Historical crime data for related areas"
            ]
        },
    }

    return (
        <section id = "pricing" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '100px 20px' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h1 className="gradient-text" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Pricing Options</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>How you can contribute to your neighbourhood</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {Object.entries(pricingInfo).map((info, i) => (
                        <motion.div
                            key={info}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.35 }}
                            className="glass-panel"
                            style={{
                                padding: '1.5rem',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'start',
                                transition: 'transform 0.3s ease',
                                minWidth: 'fit-content',
                                minHeight: 'fit-content',
                            }}
                        >
                            <div style ={{fontSize: '2rem', fontWeight: '600', alignSelf: 'center'}}>{info[0]} Tier</div>
                            <div style= {{ display: "flex", width: "100%", fontSize: '1.1rem', fontWeight: '600'}}> 
                                <span style={{ flexGrow: 1, textAlign: "center"}}>
                                    { info[1].priceComment === undefined ?
                                        <>{currencyFormat.format(info[1].lowerEndNaira)} - {currencyFormat.format(info[1].higherEndNaira)}</>
                                    :
                                    <>{info[1].priceComment} </>
                                    } 
                                </span>
                            </div>

                            <ul style={{
                                listStyle: 'none',
                                padding: '1rem 0',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem'
                            }}>
                                {info[1].benefits.map((benefit, i) => (
                                    <li key={i} 
                                        style={{ 
                                            color: 'var(--text-primary)',
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.5em',
                                            fontSize: '0.95rem',
                                            margin: "0.25rem 0",
                                            fontWeight: '450',
                                            textAlign: 'left'
                                        }}
                                    >
                                        <span style={{
                                            width: '0.4rem',
                                            height: '0.4rem',
                                            borderRadius: '100%',
                                            background: 'var(--accent)',
                                            flexShrink: 0,
                                            marginTop: '0.5em'
                                        }}></span>

                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing;