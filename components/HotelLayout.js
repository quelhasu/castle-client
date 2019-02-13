import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Map, Marker, Popup, TileLayer } from "react-leaflet-universal";

const mediaStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  height: "auto",
  objectFit: "cover"
};

const mediaContainerStyle = {
  width: "100%",
};

const cardStyle = {
  // maxWidth: "50%",
  // margin: "auto"
  maxWidth: '30%',
  position: 'absolute',
  margin: 'auto',
  right: '20px',
  top: '90px'
};

const mapContainerStyle = {
  // height: "500px",
};

const HotelLayout = props => (
  // <div>
  //    <h1>{props.hotel.name}</h1>
  //       <p>{props.hotel.from_price}</p>
  //       <a href={props.hotel.link}>URL</a>
  // </div>
  <div>
    <style jsx global>{`
      .bodyStyle{
        padding: 0;
      }
    `}</style>
    <Card style={cardStyle}>
      <div style={mediaContainerStyle}>
        <CardImg style={mediaStyle} src={props.hotel.media} alt="Card image cap" />
      </div>

      <CardBody>
        <CardTitle>
          <i className="fas fa-hotel" /> {props.hotel.name}
        </CardTitle>
        <CardTitle>
          <i className="fas fa-utensils" /> {props.hotel.restaurant.name}
        </CardTitle>
        {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
        {/* <Button>Button</Button> */}
          
      </CardBody>
    </Card>
    <Map center={[props.hotel.location.center.Lat, props.hotel.location.center.Lng]} zoom={10}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[props.hotel.location.center.Lat, props.hotel.location.center.Lng]}>
              <Popup>
                {props.hotel.name}
              </Popup>
            </Marker>
          </Map>
  </div>
);

export default HotelLayout;
