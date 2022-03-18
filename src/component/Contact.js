function Contact(props) {
  const { name, picture, phone, cell } = props.contactData;
  return (
    <div className="section">
      <div className="box">
        <img src={picture.medium} />
        <div className="info">
          <h4>
            {name.first} {name.last}
          </h4>
          <p>Home:{phone}</p>
          <p>Cellphone:{cell}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
