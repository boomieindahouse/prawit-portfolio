/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { portfolios } from '../Constants/Constants';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Portfolio/Portfolio.css';

const images = import.meta.glob('../../assets/projects/**');

function Portfolio() {
  return (
    <section className="portfolio-container">
      <div className="row">
        {portfolios.map((project) => {
          const [imgSrcs, setImgSrcs] = useState([]);

          useEffect(() => {
            const loadImages = async () => {
              const loadedImages = await Promise.all(
                project.pics.map(async (pic) => {
                  const imagePath = images[`../../assets/projects/${project.id}/${pic}`];
                  if (imagePath) {
                    const mod = await imagePath();
                    return mod.default;
                  }
                  return null;
                })
              );
              setImgSrcs(loadedImages);
            };

            loadImages();
          }, [project.id, project.pics]);

          return (
            <div key={project.id} className="col-md-4 col-12 mb-4">
              <div className="custom-card shadow-sm">
                <Carousel>
                  {imgSrcs.map((src, index) => (
                    <Carousel.Item key={index}>
                      {src ? (
                        <img
                          src={src}
                          className="d-block w-100"
                          alt={`${project.name} screenshot ${index + 1}`}
                        />
                      ) : (
                        <div>Loading...</div>
                      )}
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="custom-card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.desc}</p>
                  <p><strong>Technologies:</strong> {project.dev.join(', ')}</p>
                </div>
                <div className="button-container"> {/* สร้าง div แยกสำหรับปุ่ม */}
                  <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
