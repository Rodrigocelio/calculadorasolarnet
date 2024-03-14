const glow = document.querySelector(".framer-1ud2un");
const stroke = document.querySelector(".framer-sg5jcs");

const glowAnimation = keyframes`
  0% {
    background: radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 20%, rgba(255, 255, 255, 0.8) 60%, rgba(255, 255, 255, 0) 100%);
  }
  100% {
    background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 20%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%);
  }
`;

const strokeAnimation = keyframes`
  0% {
    background: radial-gradient(circle, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%);
  }
  100% {
    background: radial-gradient(circle, rgba(255, 255, 255, 0) 0%, hsl(0, 0%, 100%) 100%);
  }
`;

glow.style.animation = glowAnimation;
stroke.style.animation = strokeAnimation;