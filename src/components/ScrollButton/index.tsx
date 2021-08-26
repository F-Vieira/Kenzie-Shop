import { useState } from "react";
import { ScrollButtonContainer } from "./styles";
import { IoArrowUpCircle } from "react-icons/io5";

const ScrollButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ScrollButtonContainer show={visible}>
      <IoArrowUpCircle onClick={scrollToTop} />
    </ScrollButtonContainer>
  );
};

export default ScrollButton;
