import { FeedbackType, feedBackTypes } from "..";
import CloseButton from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedBackTypeChanged: (feedbackType: FeedbackType) => void;
}

const FeedbackTypeStep = ({
  onFeedBackTypeChanged,
}: FeedbackTypeStepProps) => {
    return(
        <>
            <header>
                <span>
                    Deixe o seu feedback!
                </span>
                <CloseButton />
            </header>

            <div>
                {Object.entries(feedBackTypes).map(([key, value]) => {
                    return(
                        <button
                        key={key}
                        onClick={() => onFeedBackTypeChanged(key as FeedbackType)}
                      >
                        <img src={value.image.source} alt={value.image.alt} />
                        <span>{value.title}</span>
                      </button>
                    )
                })}
            </div>
        </>
    )
};

export default FeedbackTypeStep;
