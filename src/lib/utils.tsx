export function loadScript(src: string, position: string, id: string) {
  if (!position || !document) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  document.querySelector(position)?.appendChild(script);
}

export function loadStylesheet(href: string, position: string, id: string) {
  if (!position || !document) {
    return;
  }

  const link = document.createElement("link");
  link.setAttribute("async", "");
  link.setAttribute("id", id);
  link.href = href;
  document.querySelector(position)?.appendChild(link);
}
