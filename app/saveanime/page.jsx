import AnimeHeader from "@/components/AnimeHeader/animeheader";
import MainSectionLayout from "@/components/MainSectionLayout/mainsectionlayout";
import SaveAnime from "@/components/SaveForm/SaveAnime";
import SideBar from "@/components/SideBar/sidebar";
import SideBarLayout from "@/components/SideBarLayout/sidebarlayout";

export default function AddNewAnime() {
  return (
    <div style={{ display: "flex" }}>
      <MainSectionLayout>
        <AnimeHeader text="Haven't Found Your Anime? Send it to Us" />
        <SaveAnime />
      </MainSectionLayout>
      <SideBarLayout>
        <SideBar />
      </SideBarLayout>
    </div>
  );
}
