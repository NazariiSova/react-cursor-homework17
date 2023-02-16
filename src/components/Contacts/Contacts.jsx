import "./Contacts.css";

const Contacts = ({
  firstName,
  lastName,
  phone,
  gender,
}) => {
return (
<div className="container-cards">
  <div className="card-first-name">{firstName}</div>
  <div className="card-last-name">{lastName}</div>
  <div className="card-phone">{phone}</div>
  <div className="card-gender">{gender}</div>
</div>
)
};
export default Contacts;
