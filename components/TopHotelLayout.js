import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Line } from 'react-chartjs-2';
import Link from "next/link";


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
  width: "100%",
  // margin: "auto"
  // maxWidth: '30%',
  // position: 'absolute',
  // margin: 'auto',
  // right: '10px',
  // top: '90px'
};

const options = {
  scaleShowGridLines: false,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 2,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  scales: {
    xAxes: [{
      gridLines: {
          color: "rgba(0, 0, 0, 0)",
      },
      ticks: {
        stepSize: 50
      }
  }],
    yAxes: [{
        ticks: {
            beginAtZero: true
        },
    }]
}
}

class TopHotelLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // dataOne: chartDataOne(props),
      // dataSecond: chartDataSecond(props)
  }
  }
  

  render() {
    // var location = `${this.props.hotel.location.address.localityAddress} ${this.props.hotel.location.address.postalCode.match(/\d*/)[0]}`
    return (
      <div>
        <style jsx>{`
      a {
        text-decoration: none;
        color: #28a745;
      }
      a.secondary{
        color:#000;
      }
      a:hover{
        color:white !important;
      }
    `}</style>
        <Card style={cardStyle}>
          <div style={mediaContainerStyle}>
            <CardImg style={mediaStyle} src={this.props.hotel.media} alt="Card image cap" />
          </div>

          <CardBody>
            <CardTitle>
              <i className="fas fa-hotel"/> {this.props.hotel.name}
              </CardTitle>
              <CardTitle>
              <i className="fas fa-utensils" /> {this.props.hotel.restaurant.name}
            </CardTitle>
            <CardTitle>
              <img height="17" src="https://www.theoriagallery.it/wp-content/uploads/2015/04/stellamichelinlogo.png"/> {' '}
              {this.props.hotel.restaurant.michelin_rating} MICHELIN {' '}
              { this.props.hotel.restaurant.michelin_rating <= 1 ? (
                <span>star</span>
              ) : (
                <span>stars</span>
              )}
            </CardTitle>
            <CardText>
              <b>From</b>: {this.props.hotel.from_price} €
            </CardText>
            <Button size="sm" outline color="success">
              <a href={`${this.props.hotel.link}`}>Book</a>
            </Button>{' '}
            <Button size="sm" outline color="secondary">
              <a className="secondary" as={`/h/france/${this.props.hotel.id}`} href={`/h/france/${this.props.hotel.id}`} >More...</a>
            </Button>{' '}
            <br/><br/>
          
            <CardText>
            <small className="text-muted">
              {/* <i className="fas fa-map-marker-alt"/> {location} */}
            </small>
          </CardText>
          </CardBody>

        </Card>
      </div>
    )
  }
}

function chartDataOne(props) {
  var map = Object.keys(props.hotel.disponibilites.first.body).map(function(key) {
    return props.hotel.disponibilites.first.body[key];
  });
  return {  
    labels: map.map(el => { return el.match(/\b\d+\b/)[0]}),
    datasets: [
      {
        label: props.hotel.disponibilites.first.name,
        data: map.map(el => { return el.includes('null') ? 0 :   el.match(/\s\d+[^€]+\b/)[0] }),
        backgroundColor: ['rgba(239, 202, 72, 0.5)',],
      }
    ]
  }
}

function chartDataSecond(props) {
  var map2 = Object.keys(props.hotel.disponibilites.second.body).map(function(key) {
    return props.hotel.disponibilites.second.body[key];
  });
  
  return {  
    labels: map2.map(el => {return el.match(/\b\d+\b/)[0]}),
    datasets: [
      {
        label: props.hotel.disponibilites.second.name,
        backgroundColor: ['rgba(69, 182, 159, 0.5)',],
        data: map2.map(el => { return el.includes('null') ? 0 : el.match(/\s\d+[^€]+\b/)[0]}),
      }
    ]
  }
}

export default TopHotelLayout;
