import {Link} from "react-router-dom";
import myImg from './shai.jpg';
import {useEffect, useState} from "react";

export function Home() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener('online', function(e) {
      setOnline(true)
    });

    window.addEventListener('offline', function(e) {
      setOnline(false)
    });
  }, []);

  return (
      <section id="sec" className="py-5 text-center container">
        { online ? <h2>You are on line</h2> : <h2>you are offline</h2> }
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Welcome to My Blog!</h1>
            <img src={myImg} alt="" style={{ maxWidth: "100%", height: "auto" }}/>
            <p className="lead text-body-secondary">
              Hi! My name is Shai and this is my blog, happy to see you here!
              feel free to read along :)
            </p>
            <p>
              <Link to="/posts" className="btn btn-primary my-2">Go to
                posts</Link>
            </p>
          </div>
        </div>
      </section>
  );
}