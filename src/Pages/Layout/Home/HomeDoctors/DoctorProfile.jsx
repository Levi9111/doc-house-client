import styled from "styled-components";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { createContext } from "react";
import TabPanel1 from "./TablePanel1";
import Banner from "../../../../Components/Banner";
import LocationIcon from "../../../../assets/icons/LocationIcon";
import ReactStarsIcon from "../../../../Components/ReactStars";

const StyledDoctorProfile = styled.div`
  background-color: #f3f3f3;
  > aside {
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
    /* margin: 1rem 0; */
    display: flex;
    align-items: center;

    p {
      margin-left: 1.5rem;
    }
  }
`;
const DoctorInfo = styled.div`
  margin-top: 5rem;
  background-color: #fff;
  padding: 3.5rem;
  border-radius: var(--border-radius);

  .react-tabs {
  }

  .react-tabs__tab-list {
    border: 0;
    margin: 0;
    margin-bottom: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    border-radius: 1rem 1rem 0 0;
    overflow: hidden;
    border-bottom: 1px solid var(--text-gray-primary);
  }

  .react-tabs__tab {
    border: 0;
    position: static;
    padding: 1.8rem 0;
    font-size: 2rem;
    font-weight: 700;
  }

  .react-tabs__tab--selected {
    background-color: var(--bg-button);
    color: var(--text-white);
    width: 100%;
    text-align: center;
    border-radius: 0;
  }

  .react-tabs__tab-panel {
    h3 {
      font-size: var(--font-button);
      color: var(--text-dark);
      font-weight: 700;
      margin-bottom: 1rem;
    }

    a {
      font-size: var(--font-base);
      color: var(--text-secondary-dark);
      font-weight: 400;
    }

    > aside {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 1.2rem;

      span {
        div {
          margin-left: 1rem;
          h4 {
            margin-bottom: 1.6rem;
            font-size: var(--font-button);
            color: var(--text-dark);
          }
          ul {
            margin-left: 2rem;
          }
          &:not(:first-child) {
            h4 {
              margin-top: 2rem;
            }
          }
          &:not(:last-child) {
            ul {
              li {
                &:first-child {
                  color: var(--text-dark);
                  font-weight: 500;
                  font-size: var(--font-button);
                  margin-top: 1rem;
                }

                &:not(:first-child) {
                  list-style: none;
                  margin-top: 0.8rem;
                }
              }
            }
          }
        }
      }
    }
  }

  .react-tabs__tab-panel--selected {
  }
`;
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

export const doctorInfoContext = createContext();

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

  const infoContext = {
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
  };

  return (
    <doctorInfoContext.Provider value={infoContext}>
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
              <div>
                <ReactStarsIcon reviews={reviews} />
                <p>({reviews.length})</p>
              </div>
              <Location>
                <LocationIcon />
                <p>
                  {contactInformation.officeAddress} -{""}
                  <Link to="">Get Directions</Link>
                </p>
              </Location>
            </span>
          </DoctorImgContainer>
          <DoctorInfo>
            <Tabs>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Location</Tab>
                <Tab>Reviews</Tab>
                <Tab>Business Hour</Tab>
              </TabList>

              <TabPanel>
                <TabPanel1 />
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </DoctorInfo>
        </aside>
      </StyledDoctorProfile>
    </doctorInfoContext.Provider>
  );
}

export default DoctorProfile;
