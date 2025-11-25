import "./Home.css";
import AboutAtGlance from "../components/AboutAtGlance";
import StudentFacilities from "../components/StudentFacilities";
import StudentOrganizationsSlider from "../components/StudentOrganizationsSlider";
import Portion from "../components/portion";
import Footer from "../components/Footer";

function Home() {
  // placeholder: later fetch these from backend (API)
  // const [stats, setStats] = useState([]);

  // useEffect(() => {
  //   // Example: fetch stats from backend when ready
  //   // fetch("/api/home/stats").then(r => r.json()).then(setStats).catch(() => {});
  //   // For now set demo values (these will be overwritten by your backend)
  //   setStats([
  //     { id: 1, iconType: "department", value: "15", label: "Departments", bgColor: "#f3f3fb", iconColor: "#3d33a7" },
  //     { id: 2, iconType: "students", value: "5K+", label: "Current Students", bgColor: "#f3f3fb", iconColor: "#3d33a7" },
  //     { id: 3, iconType: "faculty", value: "380", label: "Faculty Members", bgColor: "#f6f0e6", iconColor: "#cda00a" },
  //     { id: 4, iconType: "graduates", value: "50K+", label: "Graduates", bgColor: "#f6f0e6", iconColor: "#cda00a" },
  //   ]);
  // }, []);

  return (
    <div>
      <Portion />
      <AboutAtGlance />
      <StudentFacilities />
      <StudentOrganizationsSlider />
      <Footer />
    </div>
  );
}

export default Home;
