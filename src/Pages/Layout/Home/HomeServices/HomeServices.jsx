import {
  StyledHomeServices,
  ServiesContainer,
  BannerImage,
  ServiceDescriptor,
  ReactTabs,
} from "../HomeStyles.js";
import bannerImg from "../../../../assets/images/home-services-1.png";
import tabsImg1 from "../../../../assets/images/home-services-2.png";
import tabsImg2 from "../../../../assets/images/home-services-3.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BtnOutlined } from "../../../../Components/Button";
import { Link } from "react-router-dom";

const tabsData = [
  {
    sl: "1",
    title: "Cosmetic Dentisty",
    img: tabsImg1,
    text1:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inve ntore veritatis et quasi architectobeatae vitae dicta sunt explicabo. Sed ut perspiciatis undeomnis iste natus error",
    text2:
      "Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    path: "/cosmetic-dentistry",
  },
  {
    sl: "2",
    title: "Electro Gastrology Therapy",
    img: tabsImg2,
    text1:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inve ntore veritatis et quasi architectobeatae vitae dicta sunt explicabo. Sed ut perspiciatis undeomnis iste natus error",
    text2:
      "Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    path: "/electro-gastrology-therapy",
  },
  {
    sl: "3",
    title: "Electro Gastrology Therapy",
    img: tabsImg2,
    text1:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inve ntore veritatis et quasi architectobeatae vitae dicta sunt explicabo. Sed ut perspiciatis undeomnis iste natus error",
    text2:
      "Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    path: "/cosmetic-dentistry",
  },
];

function HomeServices() {
  return (
    <StyledHomeServices>
      <ServiesContainer>
        <BannerImage src={bannerImg} />
        <ServiceDescriptor>
          <aside>
            <h2>Our Services</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </aside>
          <ReactTabs>
            <Tabs>
              <TabList>
                <Tab>Cavity Protection</Tab>
                <Tab>Cosmetic Dentisty</Tab>
                <Tab>Oral Surgery</Tab>
              </TabList>

              {tabsData.map((data) => (
                <TabPanel key={data.sl}>
                  <img src={data.img} alt="" />
                  <h2>{data.title}</h2>
                  <p>{data.text1}</p>
                  <p>{data.text2}</p>
                  <Link to={data.path}>
                    <BtnOutlined>View Details</BtnOutlined>
                  </Link>
                </TabPanel>
              ))}
            </Tabs>
          </ReactTabs>
        </ServiceDescriptor>
      </ServiesContainer>
    </StyledHomeServices>
  );
}

export default HomeServices;
