// import contactList from "./Contacts";
import Contact from "./Contact";
import JsonData from "../data/Contacts.json";
function Main() {
  return (
    <div>
      {JsonData.results.map((contactData, index) => {
        return <Contact contactData={contactData} key={index} />;
      })}
    </div>
  );
}

export default Main;

// {contactList.map((contactData, index) => {
//   //iterate through each city object
//   // taking each object out of the array
//   // and passing it down as props into City
//   return <Contact contactData={contactData} key={index} />;
// })}
