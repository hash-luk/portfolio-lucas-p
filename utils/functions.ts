import React from "react";

interface IHandleRedirect {
  url: string;
  target: string;
  eventHandler: React.MouseEvent<HTMLElement>;
}

export function handleRedirect(handleRedirectProps: IHandleRedirect): void {
  handleRedirectProps.eventHandler.preventDefault();
  if (handleRedirectProps.target === "self") {
    if (handleRedirectProps.url !== "") {
      const urlToRedirect = "#" + handleRedirectProps.url;
      const elementScrollTo = document.querySelector(
        urlToRedirect
      ) as HTMLDivElement;

      const locationToScroll = elementScrollTo ? elementScrollTo.offsetTop : 0;
      window.scroll(0, locationToScroll);
    } else {
      window.location.reload();
    }
  }
}

export function handleDownload(target: string) {
  const link = document.createElement("a");
  link.href = target;
  link.download = "Curriculo_Lucas_Patrick";
  link.click();
}
