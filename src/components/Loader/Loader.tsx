
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  animation: fadeOut 1s ease-out 1s forwards;

  .loader {
    width: 84px;
    aspect-ratio: 1;
    background: linear-gradient(#ff4500 0 0) left/50% 100% no-repeat,
      conic-gradient(
        from -90deg at 32px 9.47px,
        #fff8dc 135deg,
        #8b0000 0 270deg,
        #ffa500 0
      );
    background-blend-mode: multiply;
    -webkit-mask: linear-gradient(
        to bottom right,
        #0000 8px,
        #000 0 52px,
        #0000 0
      ),
      conic-gradient(from -90deg at right 6px bottom 6px, #000 90deg, #0000 0);
    mask: linear-gradient(to bottom right, #0000 8px, #000 0 52px, #0000 0),
      conic-gradient(from -90deg at right 6px bottom 6px, #000 90deg, #0000 0);
    background-size: 50% 50%;
    -webkit-mask-size: 50% 50%;
    mask-size: 50% 50%;
    -webkit-mask-composite: source-in;
    mask-composite: intersect;
    animation: l9 1.8s infinite cubic-bezier(0.5, 0.2, 0.5, 1);
    box-shadow: 0 0 15px rgba(255, 69, 0, 0.6);
    transform: perspective(1000px) rotateY(15deg);
  }

  @keyframes l9 {
    0% {
      background-position: 0% 0%, 0 0;
      transform: perspective(1000px) rotateY(15deg) scale(1);
      box-shadow: 0 0 15px rgba(255, 69, 0, 0.6);
    }
    25% {
      background-position: 100% 0%, 0 0;
    }
    50% {
      background-position: 100% 100%, 0 0;
      transform: perspective(1000px) rotateY(15deg) scale(1.08);
      box-shadow: 0 0 25px rgba(255, 69, 0, 0.8);
    }
    75% {
      background-position: 0% 100%, 0 0;
    }
    100% {
      background-position: 0% 0%, 0 0;
      transform: perspective(1000px) rotateY(15deg) scale(1);
      box-shadow: 0 0 15px rgba(255, 69, 0, 0.6);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Loader;
