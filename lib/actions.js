"use server";

import { redirect } from "next/navigation";
import { saveAnime } from "./animelist";

export async function handleFormData(data) {
  const anime = {
    title: data.get("title"),
    slug: data.get("slug"),
    episode: data.get("episode"),
    image: data.get("image"),
    summary: data.get("summary"),
    information: data.get("information"),
    creator: data.get("creator"),
  };

  await saveAnime(anime);
  redirect("/home");
}
