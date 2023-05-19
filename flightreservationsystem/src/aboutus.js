import '../node_modules/bootstrap/dist/css/bootstrap.css';
import airhostess from './images/airhostess.jpg'
import nc1 from './images/nc1.png';
import nc4 from './images/nc4.png';
import about1 from './images/about1.jpg'
import InsideTheWorldsBiggestPassengerPlane from './images/InsideTheWorldsBiggestPassengerPlane.mp4'

function Aboutus(){
    return(<div>
        <section className="">
          <div
            className="row py-4"
            style={{ backgroundColor: "rgb(246, 246, 246)" }}
          >
            <div className="col-lg-12 align-items-center d-flex justify-content-center">
              <h2>About Us</h2>
            </div>
          </div>
        </section>
  
        <section className="">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-lg-12 align-items-center d-flex justify-content-center"
                style={{ marginTop: "20px" }}
              >
                <h2>About Our Organisation</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 align-items-center d-flex justify-content-center">
                <h5>Our goals and values</h5>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="col-lg-6 align-items-center d-flex justify-content-center">
              <img
                src={airhostess}
                width="850" style={{borderRadius:'20px'}}
                height="650"
              />
            </div>
  
            <div className="col-lg-6" style={{ paddingTop: "150px" }}>
              <p style={{ fontSize: "25px", marginLeft: "10px" }}>
                Our focus is on your overall well being and helping you avail
                <br />
                luxurious flights at minimal costs. We provide state-of-the-art{" "}
                <br />
                facilities in all our airways.
              </p>
              <br />
              <br />
              <div className="row">
                <div className="col-lg-1">
                  <img
                    src={nc1}
                    height="80px"
                    width="70px"
                  />
                </div>
                <div className="col-lg-6">
                  {" "}
                  <b style={{ fontSize: "25px" }}>Our Missions</b>
                  <br />
                  <p style={{ fontSize: "20px" }}>
                    To make our flights easy, comfortable and reliable for you
                  </p>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col-lg-1">
                  <img
                    src={nc4}
                    height="65px"
                    width="70px" 
                  />
                </div>
                <div className="col-lg-6">
                  {" "}
                  <b style={{ fontSize: "25px" }}>Professionals in our Airways</b>
                  <br />
                  <p style={{ fontSize: "20px" }}>
                    Has provided a high class facility for every journey
                  </p>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </section>
  
        <br />
        <br />
  
        <section className="">
          <div className="row" style={{ paddingBottom: "20px" }}>
            <div className="col-lg-6 align-items-center d-flex justify-content-center ">
              <h1 style={{textAlign:'center'}}>Come fly with us and<br/> you could win the<br/> TRIP OF A LIFETIME</h1>
            </div>
  
            <div className="col-lg-6 align-items-center d-flex justify-content-center ">
              <img
                src={about1}
                width="1200px"
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </section>
        <br></br>

        <section className="">
            <div className="row">
              <div className="col-lg-6 align-items-center d-flex justify-content-center">
                <div className="white border-0" style={{ width: "35rem" }}>
                  <h2>
                    <strong style={{ fontSize: "35px", marginLeft: "0px" }}>
                      Your comfort is our priority
                    </strong>
                  </h2>
    
                  <div className="card-body white border-0">
                    <p style={{ fontSize: "22px" }}>
                      We are providing you the most comfortable flights ever.You
                      will feel home when you board in the flight. Staff will treat
                      you as their home members
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
  );
}
export default Aboutus;