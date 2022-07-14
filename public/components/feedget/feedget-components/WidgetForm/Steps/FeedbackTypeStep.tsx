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
                <span className="text-xl leading-6">
                    Deixe o seu feedback!
                </span>
                <CloseButton />
            </header>

            <div>
                {Object.entries(feedBackTypes).map(([key, value]) => {
                    return(
                        <button
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
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
