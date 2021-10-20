import { FunctionComponent } from "react";

const Jumbotron: FunctionComponent<{
  image: { url: string; alt: string };
  decorator?: { url: string };
}> = ({ image, decorator }) => {
  return (
    <div className="jumbotron__wrapper">
      <img className="jumbotron" src={image.url} alt={image.alt} />
      {decorator && (
        <img
          className="decorator"
          src={decorator.url}
          alt="Image Decorator Logo"
        />
      )}
      <style jsx>{`
        @import "../styles/styles";

        .jumbotron__wrapper {
          position: relative;
        }

        .jumbotron {
          display: block;
          width: 100%;
        }

        .decorator {
          position: absolute;
          right: 5%;
          top: 25%;
          height: 50%;
        }

        @media only screen and (max-width: 769px) {
          .decorator {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Jumbotron;
