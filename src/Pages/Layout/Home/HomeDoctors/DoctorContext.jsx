import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { useParams } from "react-router-dom";
import { fetchDoctors } from "../../../../FetchData/fetchData";
import Spinner from "../../../../Components/Spinner";

export const doctorInfoContext = createContext();

function DoctorContext({ children }) {
  const { id } = useParams();

  const {
    isLoading,
    data: doctorsInfo,
    error,
  } = useQuery({
    queryKey: ["doctorsInfo"],
    queryFn: fetchDoctors,
  });

  if (isLoading) return <Spinner />;

  const doctorInfo = doctorsInfo.find((doctor) => doctor._id === id);

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
      {children}
    </doctorInfoContext.Provider>
  );
}

export default DoctorContext;
