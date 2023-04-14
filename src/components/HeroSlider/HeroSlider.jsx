import HeroSliderStyles from "./HeroSlider.styles";

import React, { useState, useEffect } from "react";
import slideOne from "../../assets/images/nick-fewings.jpg";
import slideTwo from "../../assets/images/shaojie.jpg";
import slideThree from "../../assets/images/simon-godfrey.jpg";
import slideFour from "../../assets/images/lawrence-hookham.jpg";

import MainNavbar from "../MainNavbar/MainNavbar";
import "./loader.css";

const HeroSlider = ({ autoplay = false, autoplayDuration = 5000 }) => {
  const styles = HeroSliderStyles;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(null);

  const slides = [
    {
      id: 0,
      image: slideOne,
      title: "from our farms to your hands",
      subtitle: "welcome to TenTwenty Farms",
    },
    {
      id: 1,
      image: slideTwo,
      title: "from our farms to your hands",
      subtitle: "welcome to TenTwenty Farms",
    },
    {
      id: 2,
      image: slideThree,
      title: "from our farms to your hands",
      subtitle: "welcome to TenTwenty Farms",
    },
    {
      id: 4,
      image: slideFour,
      title: "from our farms to your hands",
      subtitle: "welcome to TenTwenty Farms",
    },
  ];

  useEffect(() => {
    if (autoplay) {
      const slideTimer = setInterval(() => {
        if (!loading) {
          setCurrentSlide((currentSlide) =>
            currentSlide === slides.length - 1 ? 0 : currentSlide + 1
          );
        }
      }, autoplayDuration);

      setTimer(slideTimer);

      return () => {
        clearInterval(timer);
      };
    }
  }, [currentSlide, loading, slides, timer, autoplay, autoplayDuration]);

  const handleNextSlide = () => {
    if (!loading) {
      setLoading(true);

      setTimeout(() => {
        setCurrentSlide(
          currentSlide === slides.length - 1 ? 0 : currentSlide + 1
        );
        setLoading(false);
      }, 1000);
    }
  };

  const handlePrevSlide = () => {
    if (!loading) {
      setLoading(true);

      setTimeout(() => {
        setCurrentSlide(
          currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        );
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <>
      <div style={styles.carouselContainer}>
        <div style={styles.navbarContainer}>
          <MainNavbar />
        </div>
        <div style={styles.slideContainer}>
          <div
            style={{
              ...styles.slideBackground,
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          />
          <div style={styles.slideContent}>
            <div style={{ textAlign: "left" }}>
              <h6 style={styles.slideSubtitle}>
                {slides[currentSlide].subtitle}
              </h6>
              <h1 style={styles.slideTitle}>{slides[currentSlide].title}</h1>
            </div>
          </div>
          <div style={styles.navigation}>
            <div style={styles.thumbnailContainer} className="bodyCont">
              <div className="loader">
                {slides[currentSlide + 1].id && (
                  <div style={styles.thumbnail}>
                    <img
                      style={styles.thumbnailImage}
                      src={slides[currentSlide + 1].image}
                      alt={`Thumbnail for Slide ${slides[currentSlide + 1].id}`}
                    />
                  </div>
                )}
              </div>
              <div style={styles.thumbnailText}>
                <span onClick={handleNextSlide}>Next</span>
              </div>
            </div>
            <span style={styles.spanText}>{slides[currentSlide].id + 1}</span>{" "}
            <span>
              <hr
                style={{
                  margin: "0 -50px",
                  border: "1px solid #ffffff",
                  width: "100px",
                }}
              />
            </span>
            <span style={styles.spanText}>{slides.length}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
