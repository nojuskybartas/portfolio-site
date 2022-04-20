export const getCodeData = async (pathname: String) => {
  const file = pathname === "/" ? "/index" : pathname;
  const url = `https://raw.githubusercontent.com/nojuskybartas/portfolio-site/main/src/pages${file}.tsx`;
  console.log(url);
  if (url.includes("_next")) return null;
  const res = await fetch(url);
  const codeData = await res.text();
  return codeData;
};

export const getCodeImage = async (
  code: string,
  theme: string,
  tabWidth: number
) => {
  const response = await fetch("https://sourcecodeshots.com/api/image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      code: code,
      settings: {
        language: "ts",
        theme: `github-${theme}`,
        tabWidth: tabWidth,
      },
    }),
  });

  const blob = await response.blob();

  return URL.createObjectURL(blob);
};
