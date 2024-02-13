const About = () => {
  const publications = [
    { title: 'The Evolution of Libraries', content: 'Exploring the transformation of libraries from physical to digital spaces.' },
    { title: 'Digital Age and Libraries', content: 'How the digital age has influenced the way we access and perceive information.' },
    { title: 'Archiving the Web', content: 'Challenges and strategies in preserving the ever-changing web content for future generations.' },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">About Our Publication Application</h1>


      <div className="mb-4">
        <h2>About the Application</h2>
        <p>Our Library Application aims to revolutionize how you interact with digital and physical books. It offers an extensive catalog, user-friendly management features, and insights into your reading habits.</p>
      </div>


      <div className="mb-4">
        <h2>Our Team</h2>
        <p>Comprised of passionate developers, designers, and librarians, our team is dedicated to providing the best experience for our users. We believe in the power of knowledge and strive to make it accessible to everyone.</p>
      </div>


      <div className="mb-4">
        <h2>Sample Publications</h2>
        <div className="row">
          {publications.map((publication, index) => (
            <div key={index} className="col-sm-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{publication.title}</h5>
                  <p className="card-text">{publication.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Frequently Asked Questions</h2>
        <p>Here, you can find answers to common questions about using the application, membership, and more. This section is updated regularly to reflect user inquiries and feedback.</p>
      </div>
    </div>
  );
};

export default About;
