//use params.slug to do the api call to get that respective anime info

import { getAnimeInfo } from "@/lib/animelist";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function animeInfo({ params }) {
  let animeInfo = await getAnimeInfo(params.slug);
  if (!animeInfo) notFound();
  animeInfo.information = animeInfo.information.replace(/\n/g, "<br />");
  return (
    <div>
      <Image
        src={animeInfo.image}
        alt={animeInfo.title}
        width={300}
        height={400}
        priority
      ></Image>
      <p>{animeInfo.title}</p>
      <p>Current Episode: {animeInfo.episode}</p>
      <p dangerouslySetInnerHTML={{ __html: animeInfo.information }}></p>
    </div>
  );
}
