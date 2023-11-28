import { useContext } from "react";
import { doctorInfoContext } from "./DoctorContext";
import styled from "styled-components";

const Visit = styled.div`
  h2 {
    margin-top: 1rem;
    color: var(--text-gray-primary);
  }
  p {
    font-size: var(--banner-font);
    font-weight: 500;
    color: green;
  }
`;

const TelemedicineAvailability = styled.div`
  margin-top: 5rem;
  p {
    font-size: var(--secondary-header-font);
    font-weight: 300;
    color: ${(props) => (props.isAvailable ? "green" : "red")};
  }
`;

function TabPanel1() {
  const infoContext = useContext(doctorInfoContext);

  const {
    aboutMe,
    education,
    experience,
    areasOfInterest,
    professionalMemberships,
    services,
    specializations,
    contactInformation,
    visit,
    telemedicineAvailability,
  } = infoContext;
  return (
    <>
      <h3>About me</h3>
      <p>{aboutMe}</p>
      <aside>
        <span>
          <div>
            <h4>Education</h4>
            {education.map((item, i) => (
              <ul key={i + 1}>
                <li>{item.degree}</li>
                <li>{item.school}</li>
                <li>{item.year}</li>
              </ul>
            ))}
          </div>
          <div>
            <h4>Experience</h4>
            {experience.map((item, i) => (
              <ul key={i + 1}>
                <li>{item.institute}</li>
                <li>{item.role}</li>
                <li>{item.workingYear}</li>
              </ul>
            ))}
          </div>
          <div>
            <h4>Area of Interest</h4>
            <ul>
              {areasOfInterest.map((item, i) => (
                <li key={i + 1}>{item}</li>
              ))}
            </ul>
          </div>
        </span>
        <span>
          <div>
            <h4>Professional Memberships</h4>
            <ul>
              <li>{professionalMemberships[0]}</li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {services.map((item, i) => (
                <li key={i + 1}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Specializations</h4>
            <ul>
              {specializations.map((item, i) => (
                <li key={i + 1}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact Information</h4>
            <ul>
              <li>Address: {contactInformation.officeAddress}</li>
              <li>Email: {contactInformation.email}</li>
              <li>Phone Number: {contactInformation.phone}</li>
            </ul>
          </div>
          <Visit>
            <h2>Visit</h2>
            <p>${visit}</p>
          </Visit>
          <TelemedicineAvailability isAvailable={telemedicineAvailability}>
            {telemedicineAvailability ? (
              <p>**Available for telemedicine</p>
            ) : (
              <p>**Not available for telemedicine</p>
            )}
          </TelemedicineAvailability>
        </span>
      </aside>
    </>
  );
}

export default TabPanel1;
