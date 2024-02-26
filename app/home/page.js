import MainSectionLayout from "@/components/MainSectionLayout/mainsectionlayout";
import SideBar from "@/components/SideBar/sidebar";
import SideBarLayout from "@/components/SideBarLayout/sidebarlayout";
import DashboardAnime from "../../components/DashboardAnime/dashboardanime";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <MainSectionLayout>
        <DashboardAnime />
      </MainSectionLayout>
      <SideBarLayout>
        <SideBar />
      </SideBarLayout>
    </div>
  );
}
