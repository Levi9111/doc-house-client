import { useQuery } from "@tanstack/react-query";
import { fetchDoctors } from "../../../../FetchData/fetchData";
import Spinner from "../../../../Components/Spinner";
import LocationIcon from "../../../../assets/icons/LocationIcon";
import CalenderIcon from "../../../../assets/icons/CalenderIcon";
import DollerIcon from "../../../../assets/icons/DollerIcon";
import { Link } from "react-router-dom";
import { BtnOutlined } from "../../../../Components/Button";
import {
  StyledHomeDoctors,
  DoctorsTitle,
  Doctors,
  Doctor,
} from "../HomeStyles";
import ReactStarsIcon from "../../../../Components/ReactStars";

function HomeDoctors() {
  const {
    isLoading,
    data: doctors,
    error,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: fetchDoctors,
  });

  if (isLoading) return <Spinner />;
  if (error) return <StyledHomeDoctors>{error}</StyledHomeDoctors>;
  return (
    <StyledHomeDoctors>
      <DoctorsTitle>
        <h2>Our Expert Doctors</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </DoctorsTitle>
      <Doctors>
        {doctors.map((doctor) => (
          <DoctorInfo key={doctor._id} doctor={doctor}></DoctorInfo>
        ))}
      </Doctors>
    </StyledHomeDoctors>
  );
}

function DoctorInfo({ doctor }) {
  const { reviews } = doctor;
  return (
    <Doctor>
      <img src={doctor.photo} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>
        {doctor.credentials}-{doctor.specialization}
      </p>
      <aside>
        <ReactStarsIcon reviews={reviews} />
      </aside>
      <span>
        <LocationIcon />
        <p>{doctor.contactInformation.officeAddress}</p>
        <CalenderIcon />
        <p>Availabler on {doctor.officeHours} </p>
        <DollerIcon />
        <p>${doctor.visit}</p>
      </span>
      <Link to={`/${doctor._id}`}>
        <BtnOutlined type="wide">View profile</BtnOutlined>
      </Link>
    </Doctor>
  );
}

export default HomeDoctors;
