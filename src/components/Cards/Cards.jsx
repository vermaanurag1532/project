import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./cards.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Cards() {
  return (
    <div className="cards">
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard className="card">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/041.webp"
              alt="..."
              position="top"
              className="img"
            />
            <MDBCardBody className="body">
              <MDBCardTitle>Lorem, ipsum.</MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt atque dolores maiores perferendis numquam dolorem
                repudiandae inventore facere
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="card">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/041.webp"
              alt="..."
              position="top"
              className="img"
            />
            <MDBCardBody className="body">
              <MDBCardTitle>Lorem, ipsum.</MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt atque dolores maiores perferendis numquam dolorem
                repudiandae inventore facere
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="card">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/041.webp"
              alt="..."
              position="top"
              className="img"
            />
            <MDBCardBody className="body">
              <MDBCardTitle>Lorem, ipsum.</MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt atque dolores maiores perferendis numquam dolorem
                repudiandae inventore facere
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="card">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/042.webp"
              alt="..."
              position="top"
              className="img"
            />
            <MDBCardBody className="body">
              <MDBCardTitle>Lorem, ipsum.</MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt atque dolores maiores perferendis numquam dolorem
                repudiandae inventore facere
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="card">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/043.webp"
              alt="..."
              position="top"
              className="img"
            />
            <MDBCardBody className="body">
              <MDBCardTitle>Lorem, ipsum.</MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt atque dolores maiores perferendis numquam dolorem
                repudiandae inventore facere
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="card">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              alt="..."
              position="top"
              className="img"
            />
            <MDBCardBody className="body">
              <MDBCardTitle>Lorem, ipsum.</MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt atque dolores maiores perferendis numquam dolorem
                repudiandae inventore facere
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
