const ProductSliderStyles = {
  postCarousel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    margin: "50px",
  },

  postCarouselWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  postImg: { width: "300px", height: "420px" },
  post: {
    margin: "0 40px",
    marginRight: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  clientInfo: { margin: "30px 0", textAlign: "center" },
  clientName: { fontSize: "30px", fontWeight: 400, color: "#000000" },
  clientLoc: {
    marginTop: "6px",
    fontSize: "18px",
    fontWeight: 400,
    color: "#7A7777",
  },
  navBtns: {
    position: "absolute",
    bottom: "4%",
    width: "45%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "115px",
    padding: "12px 0",
    textAlign: "center",
    borderRadius: 0,
    color: "#221F20",
    fontSize: "16px",
    fontWeight: 400,
    textTransform: "capitalize",
    backgroundColor: "transparent",
    border: "2px solid #000000",
  },

  "@media (max-width: 768px)": {
    postWrapper: {
      width: "calc(100% / 2 * 5)",
    },
  },
  "@media (max-width: 480px)": {
    postWrapper: {
      width: "calc(100% / 1 * 5)",
    },
  },
};

export default ProductSliderStyles;
