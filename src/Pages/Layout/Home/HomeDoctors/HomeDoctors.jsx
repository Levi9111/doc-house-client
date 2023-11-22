import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import { fetchDoctors } from "../../../../FetchData/fetchData";
import Spinner from "../../../../Components/Spinner";
import LocationIcon from "../../../../assets/icons/LocationIcon";
import CalenderIcon from "../../../../assets/icons/CalenderIcon";
import DollerIcon from "../../../../assets/icons/DollerIcon";
import { Link } from "react-router-dom";
import { BtnOutlined } from "../../../../Components/Button";

const iconStyles = {
  size: 50,
  value: 4.5,
  edit: false,
  a11y: true,
  isHalf: true,
  activeColor: "#F2871D",
};

const StyledHomeDoctors = styled.div`
  width: var(--controlled-width);
  margin: auto;
`;
const DoctorsTitle = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  h2 {
    font-size: var(--primary-header-font);
    margin-bottom: 2rem;
  }
  p {
    font-size: var(--font-base);
    color: var(--text-dark-secondary);
  }
`;
const Doctors = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;
const Doctor = styled.div`
  padding: 2rem;
  border: 1px solid var(--text-gray-primary);
  border-radius: var(--border-radius);
  span {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-row-gap: 1rem;
    grid-column-gap: 2rem;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: var(--font-button);
  }

  p {
    color: var(--text-gray-primary);
    font-weight: 300;
  }
`;

function HomeDoctors() {
  const {
    isLoading,
    data: doctors,
    error,
  } = useQuery({
    queryKey: "doctors",
    queryFn: fetchDoctors,
  });

  console.log(doctors);

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
          <Doctor key={doctor._id}>
            <img src={doctor.photo} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p>
              {doctor.credentials}-{doctor.specialization}
            </p>
            <ReactStars {...iconStyles} />
            <span>
              <LocationIcon />
              <p>{doctor.contactInformation.officeAddress}</p>
              <CalenderIcon />
              <p>Availabler on {doctor.officeHours} </p>
              <DollerIcon />
              <p>${doctor.visit}</p>
            </span>
            <Link to={`/${doctor._id}`}>
              <BtnOutlined>View profile</BtnOutlined>
            </Link>
          </Doctor>
        ))}
      </Doctors>
    </StyledHomeDoctors>
  );
}

export default HomeDoctors;
