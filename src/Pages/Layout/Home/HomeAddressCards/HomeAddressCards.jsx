import clock from "../../../../assets/icons/clock.svg";
import location from "../../../../assets/icons/location.svg";
import phone from "../../../../assets/icons/phone.svg";
import { AddressCards, StyledHomeAddressCards, Card } from "../HomeStyles.js";

const cardsData = [
  {
    sl: "1",
    icon: clock,
    title: "Opening Hours",
    text: "Open 9.00 am to 5.00pm Everyday",
    color: "var(--bg-button)",
  },
  {
    sl: "2",
    icon: location,
    title: "Our Locations",
    text: "Dhanmondi 17, Dhaka -1200, Bangladesh",
    color: "var(--bg-primary)",
  },
  {
    sl: "3",
    icon: phone,
    title: "Contact Us",
    text: "+88 01750 00 00 00/ +88 01750 00 00 00",
    color: "var(--bg-button)",
  },
];

function HomeAddressCards() {
  return (
    <StyledHomeAddressCards>
      <AddressCards>
        {cardsData.map((data) => (
          <Card key={data.sl} bgColor={data.color}>
            <img src={data.icon} alt="" />
            <aside>
              <h3>{data.title}</h3>
              {data.text.includes("/") ? (
                data.text.split("/").map((text) => <p key={text}>{text}</p>)
              ) : (
                <p>{data.text}</p>
              )}
            </aside>
          </Card>
        ))}
      </AddressCards>
    </StyledHomeAddressCards>
  );
}

export default HomeAddressCards;
