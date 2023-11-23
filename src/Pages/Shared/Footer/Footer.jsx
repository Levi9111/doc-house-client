import DocIconFooter from "../../../assets/icons/DocIconFooter";
import { BtnOutlined } from "../../../Components/Button";
import { Link } from "react-router-dom";

import {
  StyledFooter,
  FooterContainer,
  FooterTitle,
  FooterLinks,
  BottomFooter,
} from "../SharedStyles";

const links = [
  {
    title: "About Us",
    path: "",
  },
  {
    title: "Service",
    path: "",
  },
  {
    title: "Doctors",
    path: "",
  },
  {
    title: "Departments",
    path: "",
  },
  {
    title: "Online Payment",
    path: "",
  },
  {
    title: "Contact Us",
    path: "",
  },
  {
    title: "My Account",
    path: "",
  },
];

const services = [
  "Pediatric Clinic",
  "Diagnosis Clinic",
  "Cardiac Clinic",
  "Laboratory Analysis",
  "Gynecological Clinic",
  "Personal Counseling",
  "Dental Clinic",
];

const WorkingHours = [
  `
Monday - 10 am to 7 pm`,
  `
Tuesday - 10 am to 7 pm`,
  `
Wednesday - 10 am to 7 pm`,
  `
Thursday - 10 am to 7 pm`,
  `
Friday - 10 am to 7 pm`,
  `
Saturday - 10 am to 7 pm`,
  `
Sunday - 10 am to 7 pm
`,
];

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterTitle>
          <div>
            <DocIconFooter />
            <h3>
              Doc <span>House</span>
            </h3>
          </div>
          <p>
            Doc House is committed to delivering top-notch healthcare services
            to our community. Our team of experienced doctors and medical
            professionals strives to ensure your health and satisfaction. For
            appointments, inquiries, or to learn more about our services, browse
            our website or contact us today.
          </p>
          <Link to="/appointment">
            <BtnOutlined>Appointment</BtnOutlined>
          </Link>
        </FooterTitle>

        <FooterLinks>
          <div>
            <h3>Quick Links</h3>
            <ul>
              {links.map((link) => (
                <li key={link.title}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Doc House Services</h3>
            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Working Hours</h3>
            <ul>
              {WorkingHours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
          </div>
        </FooterLinks>
        <BottomFooter>
          Copyright &copy; {new Date().getFullYear()} - All right reserved by
          Doc House Ltd
        </BottomFooter>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
