import { FormEvent, useState } from "react";

import { ArrowLeft } from "phosphor-react";

import Loading from "../../Loading";
import { FeedbackType, feedBackTypes } from "..";
import { ScreenshotButton } from "../ScreenshotButton";
import CloseButton from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedBackRestartRequested: () => void;
  onFeedbackSend: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedBackRestartRequested,
  onFeedbackSend,
}: FeedbackContentStepProps) {
  const [screenShot, setScreenShot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedBackTypesInfo = feedBackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSendingFeedback(true);

    console.log("Enviado");

    setIsSendingFeedback(false);
    onFeedbackSend();
  }

  return (
    <>
      <header>
        <button type="button" onClick={onFeedBackRestartRequested}>
          <ArrowLeft />
        </button>

        <span>
          <img
            src={feedBackTypesInfo.image.source}
            alt={feedBackTypesInfo.image.alt}
          />
          {feedBackTypesInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            onScreenShotTook={setScreenShot}
            screenShot={screenShot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
          >
            {isSendingFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}
