import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { fetchSingleDoctor } from "../../../../FetchData/fetchData";

export const doctorInfoContext = createContext();

function DoctorContext({ children }) {
  const doctorInfo = useLoaderData();
  const { id } = useParams();

  // TODO: replace useLoaderData with react query

  //   const {
  //     isLoading,
  //     data: singleDoctorInfo,
  //     error,
  //   } = useQuery({
  //     queryKey: ["singleDoctor", { id }],
  //     queryFn: fetchSingleDoctor,
  //   });

  //   console.log(singleDoctorInfo);

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
