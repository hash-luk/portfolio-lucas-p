export function handleRedirect(url: string, target: string): void {
  if (target === "self") {
    if (url !== "") {
      const urlToRedirect = "#" + url;
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
