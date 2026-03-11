import { useState } from 'react';
import './Testimonials.css';
import { TESTIMONIALS_DATA } from '../constants/data';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = TESTIMONIALS_DATA.length;

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

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

                <div 
                    className="slider-container reveal" 
                    role="region" 
                    aria-label="Testimonials slider"
                    onTouchStart={(e) => {
                        const touch = e.touches[0];
                        (e.currentTarget as any).touchStartX = touch.clientX;
                    }}
                    onTouchEnd={(e) => {
                        const touchStartX = (e.currentTarget as any).touchStartX;
                        const touchEndX = e.changedTouches[0].clientX;
                        const diff = touchStartX - touchEndX;

                        if (Math.abs(diff) > 50) { // Threshold for swipe
                            if (diff > 0) {
                                nextSlide();
                            } else {
                                prevSlide();
                            }
                        }
                    }}
                >
                    <button
                        className="slider-btn prev-btn"
                        onClick={prevSlide}
                        aria-label="Previous testimonial"
                    >
                        &#10094;
                    </button>

                    <div className="slider-track-container">
                        <div
                            className="slider-track"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {TESTIMONIALS_DATA.map((testimonial) => (
                                // author is unique — safe as key
                                <div className="slide" key={testimonial.author}>
                                    <div className="testimonial-card">
                                        <div className="quote-icon" aria-hidden="true">"</div>
                                        <p className="testimonial-text">{testimonial.text}</p>
                                        <div className="testimonial-author-info">
                                            <div className="author-avatar" aria-hidden="true">
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

                    <button
                        className="slider-btn next-btn"
                        onClick={nextSlide}
                        aria-label="Next testimonial"
                    >
                        &#10095;
                    </button>
                </div>

                <div className="slider-dots reveal" role="tablist" aria-label="Testimonial navigation">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <button
                            key={testimonial.author}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to testimonial from ${testimonial.author}`}
                            aria-current={currentIndex === index ? 'true' : undefined}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
