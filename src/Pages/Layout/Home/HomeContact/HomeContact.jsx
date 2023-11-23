import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import LocationIcon from "../../../../assets/icons/LocationIcon";
import PhoneIcon from "../../../../assets/icons/PhoneIcon";

import {
  StyledHomeContact,
  HomeContactContainer,
  ContactText,
  StyledForm,
} from "../HomeStyles";

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
