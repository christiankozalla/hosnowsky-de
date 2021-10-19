import { FunctionComponent } from "react";

export interface Text {
  h1: string;
  h2?: string;
  paragraphs: string[];
}

const SectionText: FunctionComponent<{ text: Text }> = ({ text }) => {
  return (
    <div>
      <h1 className="myColor text-900 weight-bold gap-bottom-600">{text.h1}</h1>
      <h2 className="text-600 gap-bottom-500">{text.h2}</h2>
      {text.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 15)} className="gap-bottom-500">
          {paragraph}
        </p>
      ))}
      <style jsx>{`
        @import "../styles/styles";

        :root {
          --flow-space: #{get-size("600")};
        }

        $myColor: green;

        .myColor {
          color: get-color("dark");
        }
      `}</style>
    </div>
  );
};

export default SectionText;
