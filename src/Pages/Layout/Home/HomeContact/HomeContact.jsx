import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import LocationIcon from "../../../../assets/icons/LocationIcon";
import PhoneIcon from "../../../../assets/icons/PhoneIcon";
import calender from "../../../../assets/icons/calender.svg";

const StyledHomeContact = styled.div`
  padding: var(--controlled-padding);
`;
const HomeContactContainer = styled.div`
  width: var(--controlled-width);
  padding: 12rem 10rem;
  margin: auto;
  background: var(--bg-primary);
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 2.4rem;
  color: var(--text-white);
`;
const ContactText = styled.div`
  h3 {
    font-size: var(--primary-header-font);
    margin-bottom: 2rem;
  }

  p {
    font-weight: 300;
  }

  span {
    margin-top: 3.2rem;
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-gap: 2rem;
  }
`;
const StyledForm = styled.aside`
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.4rem;
  }

  aside {
    background: var(--text-white-opac);
    border-radius: var(--border-radius);
    color: var(--text-white);
  }
  input,
  select,
  option {
    width: calc(100% - 2rem);
    background-color: transparent;
    border-radius: var(--border-radius);
    color: var(--text-white);
  }

  input,
  select,
  option {
    border: 0;
    padding: 2rem;
    outline: none;

    &::placeholder {
      color: var(--text-secodary-white);
      font-size: var(--font-base);
      font-weight: 400;
      line-height: 2.6rem;
    }
  }

  option {
    color: var(--text-gray-primary);
  }

  input[type="date"] {
    &::-webkit-calendar-picker-indicator {
      background-image: url(${calender});
      background-position: center;
      background-size: 20px 20px;
      background-repeat: no-repeat;
      color: rgba(204, 204, 204, 0);
    }
  }

  button {
    grid-column: 1/-1;
    padding: 1.8rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    border: 0;
    background-color: var(--bg-button);
    font-size: var(--font-button);
    font-weight: 700;
    color: var(--text-white);
  }
`;
const Name = styled.aside``;
const Email = styled.aside``;
const Number = styled.aside``;
const DoctorName = styled.aside``;
const Date = styled.aside``;
const Time = styled.aside``;

function HomeContact() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <StyledHomeContact>
      <HomeContactContainer>
        <ContactText>
          <h3>Contact Us</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <span>
            <PhoneIcon />
            <p>+88 01750 14 14 14</p>
            <LocationIcon type="white" />
            <p>Dhanmondi, Dhaka, Bangladesh</p>
          </span>
        </ContactText>
        <StyledForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Name>
              <input
                type="text"
                name="name"
                placeholder="name"
                {...register("name")}
              />
            </Name>
            <Email>
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...register("email")}
              />
            </Email>
            <Number>
              <input
                type="number"
                name="number"
                placeholder="number"
                {...register("number")}
              />
            </Number>
            <DoctorName>
              <Controller
                name="doctorName"
                placeholder="Doctor Name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select {...field}>
                    <option value="" disabled>
                      Doctor Name
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </select>
                )}
                {...register("name")}
              />
            </DoctorName>
            <Date>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <input
                    type="date"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="Select a date"
                    {...field}
                  />
                )}
              />
            </Date>
            <Time>
              <Controller
                name="time"
                placeholder="time"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select {...field}>
                    <option value="" disabled>
                      Select a Time
                    </option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                  </select>
                )}
                {...register("name")}
              />
            </Time>
            <button type="submit">Book Now</button>
          </form>
        </StyledForm>
      </HomeContactContainer>
    </StyledHomeContact>
  );
}

export default HomeContact;
