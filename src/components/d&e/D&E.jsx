import data from '../../data/index.json';

export default function DE(){
    return(
        <section className="de--section">
            <div className="portfolio--container">
                <h1 className="de--section--heading">Design & Entrepreneurship: Sustainable Food Systems</h1>
            </div>
            <div className="de--container">
                <h2 className="skills-section--heading--right">Overview</h2>
                <div className="radio--section--card" style={{ marginTop: 40 }}>
                    <div className="de--section--card--content">
                        <div>
                            <ul>
                                <li>
                                    <div className="text-container" style={{ gap: 10}}>
                                        <p className="text-lg" style={{ fontWeight: 'bold' }}>Goal:</p>
                                        <p className="text-lg">Identify problems at the University of Pittsburgh under the topic of Sustainable Food Systems and design potential solutions.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-container" style={{ gap: 10}}>
                                        <p className="text-lg" style={{ fontWeight: 'bold' }}>Identifying Problems:</p>
                                        <p className="text-lg">Conducted a series of interviews and created one How Might We question based on responses.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-container" style={{ gap: 10}}>
                                        <p className="text-lg" style={{ fontWeight: 'bold' }}>Potential Solutions:</p>
                                        <p className="text-lg">Designed three different three different prototypes to address the HMW question. Returned to interviewing, asking students what they thought about the prototypes.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-container" style={{ gap: 10}}>
                                        <p className="text-lg" style={{ fontWeight: 'bold' }}>Final Prototype & Value Proposition:</p>
                                        <p className="text-lg">Used feedback to decide on a prototype that answers the HMW question best. Crafted a value proposition for it and presented to the rest of class.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                <div className="de--container">
                    <h2 className="skills-section--heading--right">Identifying Problems</h2>
                    <div className="de--container--columns">
                        <div>
                        <div className="radio--section--card" style={{ marginTop: 40 }}>
                        <div className="de--section--card--content">
                        <div>
                            <p className="text-lg" style={{ fontWeight: 'bold', marginLeft: 20 }}>Questions</p>
                            <ol>
                                <li>
                                    <p className="text-lg" style={{ marginTop : 10 }}>​How many times do you eat per day?</p>
                                </li>
                                <li>
                                    <p className="text-lg" style={{ marginTop : 10 }}>Do you think your meals are healthy/balanced?</p>
                                </li>
                                <li>
                                    <p className="text-lg" style={{ marginTop : 10 }}>What do your meals usually consist of?</p>
                                </li>
                                <li>
                                    <p className="text-lg" style={{ marginTop : 10 }}>Which establishment (restaurant) have you visited the most while here at Pitt?</p>
                                </li>
                                <li>
                                    <p className="text-lg" style={{ marginTop : 10 }}>Do you ever prepare your own meals?</p>
                                </li>
                                <li>
                                    <p className="text-lg" style={{ marginTop : 10 }}>How healthy is the food you eat? (Ranking 1-100)</p>
                                </li>
                                <li>
                                    <p className="text-lg" style={{ marginTop : 10 }}>Do you ever have issues trying to find healthy food on campus?</p>
                                </li>
                                <li>
                                    <p className="text-lg" style={{ marginTop : 10 }}>What do you consider healthy nutrition? </p>
                                </li>
                            </ol>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div>
                            <div className="radio--section--card" style={{ marginTop: 40 }}>
                            <div className="de--section--card--content">
                            <div>
                                <p className="text-lg" style={{ fontWeight: 'bold' }}>Problems Identified</p>
                                <ul>
                                    <li>
                                        <p className="text-lg" style={{ marginTop : 10 }}>Lack healthy options on campus</p>
                                    </li>
                                    <li>
                                        <p className="text-lg" style={{ marginTop : 10 }}>Healthy options that exist are inconvenient</p>
                                    </li>
                                    <li>
                                        <p className="text-lg" style={{ marginTop : 10 }}>Excess food waste</p>
                                    </li>
                                </ul>
                                </div>
                                </div>
                                </div>
                                <div className="radio--section--card" style={{ marginTop: 40 }}>
                            <div className="de--section--card--content">
                            <div>
                            <p className="text-lg" style={{ fontWeight: 'bold' }}>How Might We Questions</p>
                            <div className="text-container" style={{ marginTop : 15 }}>
                                <p className="text-lg" style={{ fontWeight: 'bold' }}>H</p>
                                <p className="text-lg" style={{marginRight: 5 }}>ow</p>
                                <p className="text-lg" style={{ fontWeight: 'bold' }}>M</p>
                                <p className="text-lg" style={{marginRight: 5 }}>ight</p>
                                <p className="text-lg" style={{ fontWeight: 'bold' }}>W</p>
                                <p className="text-lg">e make healthy food more</p>
                            </div>
                            <div className="text-container">
                                <p className="text-lg">accessible than unhealthy food in a sustainable way?</p>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="de--container">
                <h2 className="skills-section--heading--right">Potential Solutions</h2>
                <div className="portfolio--section--container" style={{marginTop: 40}}>
                    {data?.prototypes?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                        <img src={item.src} alt="Placeholder" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p className="text-md" style={{marginTop: 10}}>{item.description}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="de--container">
                    <h2 className="skills-section--heading--right">Final Prototype & Value Proposition</h2>
                    <div className="de--container--columns">
                        <div>
                            <div className="radio--section--card" style={{ marginTop: 40 }}>
                                <div className="de--section--card--content">
                                    <div>
                                    <p className="text-lg" style={{ fontWeight: 'bold', marginLeft: 20 }}>Questions</p>
                                    <ol>
                                        <li>
                                            <p className="text-lg" style={{ marginTop : 10 }}>
                                            Do you believe these prototypes are convenient? <br/> (if yes, which ones; if no, why?)</p>
                                        </li>
                                        <li>
                                            <p className="text-lg" style={{ marginTop : 10 }}>Would these prototypes help you waste less food? <br/> (if yes, which ones; if no, why?)</p>
                                        </li>
                                        <li>
                                            <p className="text-lg" style={{ marginTop : 10 }}>Would these prototypes make it easier for you to eat more healthy food? <br/> (if yes, which ones; if no, why?)</p>
                                        </li>
                                        <li>
                                            <p className="text-lg" style={{ marginTop : 10 }}>Could you see yourself using these prototypes if implemented? <br/> (if yes, which ones; if no, why?)</p>
                                        </li>
                                    </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="radio--section--card" style={{ marginTop: 40 }}>
                                <div className="de--section--card--content">
                                    <div>
                                        <p className="text-lg" style={{ fontWeight: 'bold' }}>Chosen Prototype</p>
                                        <div className="text-container" style={{ marginTop : 10 }}>
                                            <p className="text-lg">Healthy Snack Stand</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="radio--section--card" style={{ marginTop: 40 }}>
                                <div className="de--section--card--content">
                                    <div>
                                        <p className="text-lg" style={{ fontWeight: 'bold' }}>Value Proposition</p>
                                        <div className="text-container" style={{ marginTop : 10 }}>
                                            <p className="text-lg">We help students with busy schedules maintain a healthy plate and balance their meals by providing them with quick and healthy options for dining while also reducing food waste.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}