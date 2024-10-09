import Form from '../components/Form';
import '../App.css';

export default function Contact() {
    return (
    <div className="container text-center pageContainer">
      <div className="row">
        <div className="col-8">
          <h1>Contact Me</h1>
          <Form />;
        </div>
        <div className="col-4">
          <h3>If you would like to contact me, please, fill in this form</h3>
          <h3>I will contact you as soon as possible!</h3>
        </div>
      </div>
    </div> 
  );
}