import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const StyledDoctorProfile = styled.div``;
const DoctorImgContainer = styled.div``;
const DoctorInfo = styled.div``;

function DoctorProfile() {
  const doctorInfo = useLoaderData();

  const {
    photo,
    name,
    credentials,
    specialization,
    experience,
    education,
    boardCertification,
    areasOfInterest,
    hospitalAffiliations,
    languagesSpoken,
    professionalMemberships,
    contactInformation,
    officeHours,
    insuranceAccepted,
    publications,
    appointmentScheduling,
    telemedicineAvailability,
    rattings,
    visit,
  } = doctorInfo;

  return (
    <StyledDoctorProfile>
      Doctor Info
      <DoctorImgContainer></DoctorImgContainer>
      <DoctorInfo></DoctorInfo>
    </StyledDoctorProfile>
  );
}

export default DoctorProfile;
