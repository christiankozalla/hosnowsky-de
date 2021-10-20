import { FunctionComponent } from "react";
import Link from "next/link";

const CallToAction: FunctionComponent<{
  callToAction: { text: string; url: string };
}> = ({ callToAction }) => {
  return (
    <div>
      <Link href={callToAction.url}>
        <a className="button gap-top-600 gap-bottom-600 pad-left-500 pad-right-500 pad-top-400 pad-bottom-400">
          {callToAction.text.toUpperCase()}
        </a>
      </Link>
      <style jsx>{`
        @import "../styles/styles";

        .button {
          display: inline-block;
          color: get-color("primary");
          background-color: transparent;
          border: 2px solid get-color("primary");
          font-size: get-size("500");
          border-radius: get-size("300");
        }

        .button:hover {
          background-color: get-color("primary");
          color: white;
          transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default CallToAction;
