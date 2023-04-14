import React, { useEffect, useState } from "react";
import ProductSliderStyles from "./ProductSlider.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const posts = [
  {
    id: 1,
    image:
      "https://images.squarespace-cdn.com/content/v1/57451c424c2f85ae9b18f48d/1583510702290-NM3NR6UFVUGLOMMQUSYA/Picture1.png",
    cName: "Client 1",
    cLoc: "Dubai, United Arab Emirates",
  },
  {
    id: 2,
    image:
      "https://thegingerdiaries.be/wp-content/uploads/2020/06/Fam-Flower-Farm-25.jpg",
    cName: "Client 2",
    cLoc: "Dubai, United Arab Emirates",
  },
  {
    id: 3,
    image:
      "https://thefloweringfarmhouse.com/wp-content/uploads/2021/01/1st-year-flower-farmer_011-684x1024.jpg",
    cName: "Client 3",
    cLoc: "Dubai, United Arab Emirates",
  },
  {
    id: 4,
    image:
      "https://thefloweringfarmhouse.com/wp-content/uploads/2020/01/Flowering-Farmhouse-Intro1-819x1024.jpg",
    cName: "Client 4",
    cLoc: "Dubai, United Arab Emirates",
  },
  {
    id: 5,
    image:
      "https://www.sunset.com/wp-content/uploads/CrowleyHouse_Farm-5076-768x1024.jpg",
    cName: "Client 5",
    cLoc: "Dubai, United Arab Emirates",
  },
  {
    id: 6,
    image:
      "https://thefloweringfarmhouse.com/wp-content/uploads/2021/01/1st-year-flower-farmer_010-684x1024.jpg",
    cName: "Client 6",
    cLoc: "Dubai, United Arab Emirates",
  },
];

const ProductSlider = () => {
  const styles = ProductSliderStyles;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? posts.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const currentPosts = [
    posts[(currentSlide - 1 + posts.length) % posts.length],
    posts[currentSlide],
    posts[(currentSlide + 1) % posts.length],
  ];

  return (
    <>
      <div style={styles.postCarousel}>
        <div style={styles.postCarouselWrapper}>
          {currentPosts.map((post, index) => (
            <>
              <div style={styles.post} key={post.id}>
                <div>
                  <img src={post.image} style={styles.postImg} />
                </div>
                <div>
                  {index === 1 && (
                    <div style={styles.clientInfo}>
                      <h2 style={styles.clientName}>{post.cName}</h2>
                      <p style={styles.clientLoc}>{post.cLoc}</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
        <div style={styles.navBtns}>
          <div>
            <button onClick={prevSlide} style={styles.button}>
              <span style={{ marginRight: "8px" }}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
              Previous
            </button>
          </div>
          <div>
            <button onClick={nextSlide} style={styles.button}>
              Next
              <span style={{ marginLeft: "8px" }}>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
