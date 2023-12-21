type Props = {}

const About = (props: Props) => {
  return (
    <div className="col-12 col-md-3 m-2">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" 
              data-bs-toggle="collapse" data-bs-target="#collapseOne" 
              aria-expanded="true" aria-controls="collapseOne">
              Glad to have you.
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" 
          aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Welcome to our <strong>Library Application!</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About