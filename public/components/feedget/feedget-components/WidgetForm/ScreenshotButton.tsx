import { useState } from "react";

import { Camera, Trash } from "phosphor-react";
import Loading from "../Loading";
import html2canvas from "html2canvas";

import * as S from "./styles";

interface ScreenShotButtonProps {
  onScreenShotTook: (screenShot: string | null) => void;
  screenShot: string | null;
}

export function ScreenshotButton({
  screenShot,
  onScreenShotTook,
}: ScreenShotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenShot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenShotTook(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenShot) {
    return (
      <S.Container>
        <button
          type="button"
          onClick={() => onScreenShotTook(null)}
          style={{
            backgroundImage: `url(${screenShot})`,
            backgroundPosition: "right bottom",
            backgroundSize: 180,
          }}
        >
          <Trash weight="fill" width={30} height={30}/>
        </button>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <button type="button" onClick={handleTakeScreenShot}>
        {isTakingScreenshot ? <Loading /> : <Camera width={30} height={30} className="camera-icon" />}
      </button>
    </S.Container>
  );
}
