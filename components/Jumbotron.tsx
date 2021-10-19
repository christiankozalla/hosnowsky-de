import { FunctionComponent } from "react";

const Jumbotron: FunctionComponent<{
  image: { url: string; alt: string };
  decorator?: { url: string };
}> = ({ image, decorator }) => {
  return (
    <div>
      <img src={image.url} alt={image.alt} />
      {decorator && <img src={decorator.url} alt="Image Decorator Logo" />}
    </div>
  );
};

export default Jumbotron;
