import AllAnime from "@/components/AllAnime/allanime";
import AnimeHeader from "@/components/AnimeHeader/animeheader";
import MainSectionLayout from "@/components/MainSectionLayout/mainsectionlayout";
import SideBar from "@/components/SideBar/sidebar";
import SideBarLayout from "@/components/SideBarLayout/sidebarlayout";

export default async function AnimeList() {
  return (
    <div style={{ display: "flex" }}>
      <MainSectionLayout>
        <AnimeHeader text="Anime in Order" />
        <AllAnime />
      </MainSectionLayout>
      <SideBarLayout>
        <SideBar />
      </SideBarLayout>
    </div>
  );
}
