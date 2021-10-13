import React, { useState } from "react"
import { Container, Modal } from "react-bootstrap"
import Avatar from "../../assets/images/avatar.svg"
import Avatarlead from "../../assets/images/avatar-lead.svg"
import "./style.css"
const PastTeam = () => {
  const [show2019, setShow2019] = useState(false)
  const handleClose2019 = () => setShow2019(false)
  const handleShow2019 = () => setShow2019(true)
  const [show2020, setShow2020] = useState(false)
  const handleClose2020 = () => setShow2020(false)
  const handleShow2020 = () => setShow2020(true)
  const [show2021, setShow2021] = useState(false)
  const handleClose2021 = () => setShow2021(false)
  const handleShow2021 = () => setShow2021(true)
  const team2019 = [
    "Rohit Sharma",
    "Abhishek Sharma",
    "Narayan Kumar",
    "Mannu sharma",
    "Shannoy sarkar",
    "Saket mishra",
    "Sumit Kumar",
    "Saransh Jha",
    "sankalp karn",
    "Pushkar Sharma",
  ]
  const team2020soft = [
    "Sritabh Priyadarshi",
    "Anito Anto",
    "Advaith S",
    "Salman Dileepkhan",
    "Muhammed Siyad P",
    "Govind M J",
    "Adrin Santhosh",
  ]
  const team2020Spon = [
    "Aiswarya A Pisharody",
    " Aruna PV",
    " Muhammed Lafin Shan",
    " Meera Sunil",
    " Nuzha",
    " Oliviya Mariya Vincent",
    " Parvathy Nair",
    " Rashmi Sambukumar",
    " Romal Josbin",
    " Shamil Hawas",
    " Shivangi Sudheer Kumar",
    " Sreehari MM",
    " Sufian Ali Aiyubi",
    "Sumit Kumar Singh",
    " Vivek Pandey",
    " Aman Kashyap",
    " Aadhle Mohammed Harris",
    " Aftab S",
  ]
  const team2020ele = [
    " Architha N S",
    " Souparnika K S",
    " Sidharth Haridas",
    " Adrin Santhosh",
    " Ashutosh Kumar",
    " Advaith S",
    " Gouri Shankar",
    " Muhammed Siyad P",
  ]
  const team2020Mech = [
    "Anamika B",
    "Anit Sees P",
    "Anandhu Suresh",
    "Mohammad Saqib Nawaz",
    "Aftab S",
    "Devat krishna sreenivasan",
    "Sreehari MM",
    "Akshay Joseph Jimmy",
    "Razwi MK",
  ]
  const team2020science = [
    "Midhun Das P",
    "Hridya Harikumar",
    "Agnas Joseph",
    "Bibin N Biji",
    "Ritik Raj",
    "Riya Rose James",
    "Parvathy Nair ",
    "Aruna P V ",
    "Sreehari P ",
  ]
  const team2021Mech = [
    "Saqib",
    "Anith Sees",
    "Anamika",
    "Razwi MK",
    "Aftab S",
    "Sreehari MM",
    "Adarsh KR",
    "Vivek Anil Kumar",
    "Akshay Joseph Jimmy",
    "Devat Krishna",
    "Naveen Joy",
    "Harsha Hemachandran",
    "Abhijith Vijayan",
    "Jayadevan",
    "Kiran Dev M",
    "Juliet Sebastian",
  ]
  const team2021ele = [
    "Architha N S",
    "Souparnika K S",
    "Sidharth Haridas",
    "Adrin Santosh ",
    "Ashutosh Kumar ",
    "Advaith S ",
    "Gouri Shankar ",
    "Muhammed Siyad P",
    "VISHNU K K",
    "HariKumar K R",
    "Bhavani Krishna J S",
    "Rahul Raju",
    "Anito Anto ",
    "Jauhar k ",
    "Hridya Harikumar",
  ]
  const team2021science = [
    "Riya Rose James",
    "Parvathy Nair",
    "Sreehari P",
    "Harikumar KR",
    "Bibin N Biji",
    "Krishna Priya",
    "E Anjali",
  ]
  const team2021soft = [
    "Sritabh Priyadarshi",
    "Anito Anto",
    "Advaith S",
    "Timothy Alex John",
    "Manu Jasan",
    "Irshad",
    "Salman Dileepkhan",
    "Muhammed Siyad P",
    "Govind M J",
    "Adrin Santhosh",
  ]
  const team2021Spon = [
    "Aadhle Mohammed Harris",
    "Aruna",
    "Shivangi",
    "Olivia",
    "Nuzha",
    "Parvathy",
    "Ashutosh",
    "Meera",
    "Sreehari",
    "Sufiyan",
    "Vishnu",
    "Manu Jasan",
    "Shamil Hawas PT",
    "Sidharth haridas",
    "Rashmi Sambukumar",
    "Dilshad P",
  ]
  return (
    <div>
      <Container className="mt-5 mb-5">
        <div>
          <div className="pastteam-container">
            <button className="pastteam-component" onClick={handleShow2019}>
              <div className="display-2">2019</div>
            </button>
            <button className="pastteam-component" onClick={handleShow2020}>
              <div className="display-2">2020</div>
            </button>
            <button className="pastteam-component" onClick={handleShow2021}>
              <div className="display-2">2021</div>
            </button>
          </div>
        </div>
      </Container>
      <Modal
        show={show2019}
        onHide={handleClose2019}
        className="pastteam-modal"
        scrollable="true"
        size="lg"
      >
        <Modal.Header>
          <Modal.Title>2019 Team </Modal.Title>
          <button
            type="button"
            className="btn-close"
            ari-lablel="Close"
            onClick={handleClose2019}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <p className="pastteam-heading h3">Team Members</p>
          <div className="pastteam-list">
            {team2019.map(name => (
              <div className="pastteam-person">
                <img src={Avatar} alt="team avatar" />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={show2020}
        onHide={handleClose2020}
        className="pastteam-modal"
        scrollable="true"
        size="lg"
      >
        <Modal.Header>
          <Modal.Title>2020 Team </Modal.Title>
          <button
            type="button"
            className="btn-close"
            ari-lablel="Close"
            onClick={handleClose2020}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <div className="pastteam-list">
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Sankalp karn <br />
                (Lead)
              </p>
            </div>
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Saransh Jha <br />
                (Manager)
              </p>
            </div>
          </div>
          <p className="pastteam-heading h3">Electronics</p>
          <div className="pastteam-list">
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Rafi Rasheed T C <br />
                (lead)
              </p>
            </div>
            {team2020ele.map(name => (
              <div className="pastteam-person">
                <img src={Avatar} alt="team avatar" />
                <p>{name}</p>
              </div>
            ))}
          </div>
          <p className="pastteam-heading h3">Science</p>
          <div className="pastteam-list">
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Vasant Joseph <br />
                (lead)
              </p>
            </div>
            {team2020science.map(name => (
              <div className="pastteam-person">
                <img src={Avatar} alt="team avatar" />
                <p>{name}</p>
              </div>
            ))}
          </div>
          <p className="pastteam-heading h3">Mechanical</p>
          <div className="pastteam-list">
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Nayan Jomi <br />
                (lead)
              </p>
            </div>
            {team2020Mech.map(name => (
              <div className="pastteam-person">
                <img src={Avatar} alt="team avatar" />
                <p>{name}</p>
              </div>
            ))}
          </div>
          <p className="pastteam-heading h3">Software</p>
          <div className="pastteam-list">
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Utkrisht pathak <br />
                (lead)
              </p>
            </div>
            {team2020soft.map(name => (
              <div className="pastteam-person">
                <img src={Avatar} alt="team avatar" />
                <p>{name}</p>
              </div>
            ))}
          </div>
          <p className="pastteam-heading h3">Sponsorship,Outreach & Media</p>
          <div className="pastteam-list">
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                Aiswarya TP <br />
                (lead)
              </p>
            </div>
            {team2020Spon.map(name => (
              <div className="pastteam-person">
                <img src={Avatar} alt="team avatar" />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={show2021}
        onHide={handleClose2021}
        className="pastteam-modal"
        scrollable="true"
        size="lg"
      >
        <Modal.Header>
          <Modal.Title>2021 Team </Modal.Title>
          <button
            type="button"
            className="btn-close"
            ari-lablel="Close"
            onClick={handleClose2021}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <div className="pastteam-list">
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Saransh Jha <br />
                (Lead)
              </p>
            </div>
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Aftab S <br />
                (Manager)
              </p>
            </div>
          </div>

          <p className="pastteam-heading h3">Electronics</p>
          <div className="pastteam-list">
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Rafi Rasheed <br />
                (lead)
              </p>
            </div>
            {team2021ele.map(name => (
              <div className="pastteam-person">
                <img src={Avatar} alt="team avatar" />
                <p>{name}</p>
              </div>
            ))}
          </div>
          <p className="pastteam-heading h3">Science</p>
          <div className="pastteam-list">
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Aruna P V <br />
                (lead)
              </p>
            </div>
            {team2021science.map(name => (
              <div className="pastteam-person">
                <img src={Avatar} alt="team avatar" />
                <p>{name}</p>
              </div>
            ))}
          </div>
          <p className="pastteam-heading h3">Mechanical</p>
          <div className="pastteam-list">
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Nayan Jomi <br />
                (lead)
              </p>
            </div>
            {team2021Mech.map(name => (
              <div className="pastteam-person">
                <img src={Avatar} alt="team avatar" />
                <p>{name}</p>
              </div>
            ))}
          </div>
          <p className="pastteam-heading h3">Software</p>
          <div className="pastteam-list">
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Utkrisht pathak <br />
                (lead)
              </p>
            </div>
            {team2021soft.map(name => (
              <div className="pastteam-person">
                <img src={Avatar} alt="team avatar" />
                <p>{name}</p>
              </div>
            ))}
          </div>
          <p className="pastteam-heading h3">Sponsorship,Outreach & Media</p>
          <div className="pastteam-list">
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Romal Jsobin <br />
                (SP lead)
              </p>
            </div>
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Lafin Shan <br />
                (OR lead)
              </p>
            </div>
            <div className="pastteam-person">
              <img src={Avatarlead} alt="team avatar" />
              <p>
                {" "}
                Aiswarya TP <br />
                (ME lead)
              </p>
            </div>
            {team2021Spon.map(name => (
              <div className="pastteam-person">
                <img src={Avatar} alt="team avatar" />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default PastTeam
