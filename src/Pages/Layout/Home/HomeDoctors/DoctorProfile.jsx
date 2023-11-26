import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Banner from "../../../../Components/Banner";
import LocationIcon from "../../../../assets/icons/LocationIcon";

const StyledDoctorProfile = styled.div`
  background-color: #f3f3f3;
  aside {
    width: var(--controlled-width);
    margin: auto;
    padding: var(--secondary-controlled-padding);
  }
`;
const DoctorImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3.2rem;
  background-color: #fff;
  padding: 3.5rem;
  img {
    width: 35rem;
    height: 37rem;
  }

  h3 {
    font-size: var(--primary-header-font);
    margin-bottom: 5px;
  }

  p {
    color: var(--text-gray-primary);
    font-size: var(--banner-font);
  }

  div {
    margin: 1rem 0;
  }
`;
const DoctorInfo = styled.div``;
const Location = styled.span`
  display: flex;
  p {
    margin-left: 2rem;
    font-size: var(--font-base);
  }

  a {
    text-decoration: none;
    color: var(--bg-button);
    font-weight: 700;
  }
`;

function DoctorProfile() {
  const doctorInfo = useLoaderData();

  const {
    photo,
    name,
    credentials,
    specialization,
    education,
    experience,
    boardCertification,
    areasOfInterest,
    hospitalAffiliations,
    languagesSpoken,
    professionalMemberships,
    services,
    specializations,
    contactInformation,
    officeHours,
    insuranceAccepted,
    publications,
    appointmentScheduling,
    telemedicineAvailability,
    rattings,
    visit,
    aboutMe,
    reviews,
  } = doctorInfo;

  // #f3f3f3f3
  // #ffffffff

  return (
    <StyledDoctorProfile>
      <Banner title="Home / Doctor Profile" header="Doctor Profile" />
      <aside>
        <DoctorImgContainer>
          <img src={photo} alt="" />
          <span>
            <h3>{name}</h3>
            <p>
              {credentials}-{specialization}
            </p>
            <div>{rattings}</div>
            <Location>
              <LocationIcon />
              <p>
                {contactInformation.officeAddress} -{""}
                <Link to="">Get Directions</Link>
              </p>
            </Location>
          </span>
        </DoctorImgContainer>
      </aside>
      <DoctorInfo></DoctorInfo>
    </StyledDoctorProfile>
  );
}

export default DoctorProfile;
