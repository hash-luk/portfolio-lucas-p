import Image from "next/image";
import { FeedbackType, feedBackTypes } from "..";
import CloseButton from "../../CloseButton";
import * as S from "./styles";

interface FeedbackTypeStepProps {
  onFeedBackTypeChanged: (feedbackType: FeedbackType) => void;
}

const FeedbackTypeStep = ({
  onFeedBackTypeChanged,
}: FeedbackTypeStepProps) => {
    return(
        <S.Container>
            <header>
                <span className="text-xl leading-6">
                    Deixe o seu feedback!
                </span>
                <CloseButton />
            </header>

            <div className="type-picker-container">
                {Object.entries(feedBackTypes).map(([key, value]) => {
                    return(
                        <button
                        key={key}
                        onClick={() => onFeedBackTypeChanged(key as FeedbackType)}
                      >
                        <Image src={value.image.source} alt={value.image.alt} width={40} height={40}/>
                        <span>{value.title}</span>
                      </button>
                    )
                })}
            </div>
        </S.Container>
    )
};

export default FeedbackTypeStep;
