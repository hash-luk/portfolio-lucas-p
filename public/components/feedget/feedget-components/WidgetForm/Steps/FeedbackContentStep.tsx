import { FormEvent, useState } from "react";
import Image from "next/image";

import { ArrowLeft } from "phosphor-react";

import Loading from "../../Loading";
import { FeedbackType, feedBackTypes } from "..";
import { ScreenshotButton } from "../ScreenshotButton";
import CloseButton from "../../CloseButton";

import * as S from "./styles";

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
    <S.Container>
      <header className="about-header">
        <button
          type="button"
          onClick={onFeedBackRestartRequested}
          className="back-button"
        >
          <ArrowLeft weight="bold" className="back-icon" />
        </button>

        <span className="text-xl relative leading-6 flex items-center gap-2">
          <Image
            src={feedBackTypesInfo.image.source}
            alt={feedBackTypesInfo.image.alt}
            className="icon"
            width={30}
            height={30}
          />
          {feedBackTypesInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback}>
        <textarea
          rows={5}
          className="input-area"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="bottom-content">
          <ScreenshotButton
            onScreenShotTook={setScreenShot}
            screenShot={screenShot}
            className = "screenshot-button"
          />

          <button
            type="submit"
            className="submit-button"
            disabled={comment.length === 0 || isSendingFeedback}
          >
            {isSendingFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </S.Container>
  );
}
