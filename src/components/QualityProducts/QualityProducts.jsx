import React from "react";
import ProductSlider from "../ProductSlider/ProductSlider";
import QualityProductsStyles from "./QualityProducts.styles";

const QualityProducts = () => {
  const styles = QualityProductsStyles;
  return (
    <>
      <div style={styles.mainContainer}>
        <div>
          <h2 style={styles.mainHeading}>Quality Products</h2>
        </div>
        <div style={{ width: "35%" }}>
          <p style={styles.descriptionPara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div>
        <ProductSlider />
      </div>
    </>
  );
};

export default QualityProducts;
