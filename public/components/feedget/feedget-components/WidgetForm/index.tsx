import { useState } from "react";

import BugImageURL from "../../../../assets/icons/bug.svg";
import IdeiaImageURL from "../../../../assets/icons/ideia.svg";
import ThoughtmageURL from "../../../../assets/icons/thought.svg";

import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep";

export const feedBackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: BugImageURL,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: IdeiaImageURL,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: ThoughtmageURL,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedBackTypes;

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSend(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSend ? (
        <FeedbackSuccessStep
          onFeedBackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedBackRestartRequested={handleRestartFeedback}
              onFeedbackSend={() => setFeedbackSend(true)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default WidgetForm;
