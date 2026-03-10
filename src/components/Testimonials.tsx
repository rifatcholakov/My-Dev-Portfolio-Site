import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            text: "Awesome team player with excellent attention to detail is what comes to mind when I think of working with Rifat. I have been impressed by his professionalism and creativity when handling projects. He is committed, understands the importance of feedback and follows up on guidelines quickly and effectively. No matter how stressful a situation gets he knows how to keep his cool and lighten the mood. And as such, I strongly believe Rifat can be a wonderful asset to any team.",
            author: "Nadezhda Tancheva",
            role: "Marketer at Chaos"
        },
        {
            text: "I worked with Rifat on a few side projects and was extremely pleasantly surprised. One of the biggest headaches entrepreneurs face with developers is that they are rarely proactive and very few possess critical skills outside the scope of web/app development. Rifat demonstrated great problem-solving skills, self-starter mentality and commitment to getting the job done from the start. To have technical issues resolved before I ever knew I had them is more than I could ever ask from an outside contractor. I will definitely keep using his services in the future.",
            author: "Jordan Tsanev",
            role: "Director of Marketing at Impulse Technology, LLC"
        },
        {
            text: "Rifat did a great job on the website project. He was able to meet all deliverable dates. His knowledge and attention to detail have aided in keeping our company’s website clean and elegant. He is not only thorough but also easy to work with and always willing to take the time to discuss any concerns and respond to questions. I highly recommend his service.",
            author: "Rado Tsanev",
            role: "CEO at Impulse Technology, LLC"
        },
        {
            text: "Rifat is an amazing teammate! I really enjoyed working with him – not just because he is a skilled developer who does an amazing job but also because he is always there willing to give you that extra help whenever you need it and take some of the burdens out of your shoulders. Thanks a lot, Rifat!",
            author: "Anita Nenova",
            role: "Frontend Developer at SiteGround"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <div className="title-wrapper reveal">
                    <div className="section-marker">
                        <span className="marker-line"></span>
                        <span className="marker-text">Testimonials</span>
                        <span className="marker-line"></span>
                    </div>
                    <h2 className="section-title">What others say about me</h2>
                    <p className="section-subtitle">Feedback from colleagues and clients I've had the pleasure to work with.</p>
                </div>

                <div className="slider-container reveal">
                    <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous testimonial">
                        &#10094;
                    </button>

                    <div className="slider-track-container">
                        <div
                            className="slider-track"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div className="slide" key={index}>
                                    <div className="testimonial-card glass">
                                        <div className="quote-icon">"</div>
                                        <p className="testimonial-text">{testimonial.text}</p>
                                        <div className="testimonial-author-info">
                                            <div className="author-avatar">
                                                {testimonial.author.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="author-name">{testimonial.author}</h4>
                                                <p className="author-role">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next testimonial">
                        &#10095;
                    </button>
                </div>

                <div className="slider-dots reveal">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
