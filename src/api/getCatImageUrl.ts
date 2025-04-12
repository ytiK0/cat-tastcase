interface CatReaponse {
  id: string,
  "url": string,
  "width":number,
  "height":number,
}

export async function getCatImageUrl() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=1");

  if (!res.ok) {
    throw new Error("Request failed");
  }

  return (await res.json() as CatReaponse[])[0].url;
}