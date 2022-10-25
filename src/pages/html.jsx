import React from "react"
import "../css/pages.css";
function Html() {
  return (
    <div className="main-container">
      <div className="video-gallery-container">
        <h2 className="title"> HTML and CSS crash course</h2>
        <div className="video-gallery">
          <div className="featured-video">
            <div className=" header video-title"> Introduction</div>

            <div className="responsive-iframe">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/hu-q2zYwEYs?rel=0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
          </div>
          <div class="all-videos-container">
            <div class="header">All Videos</div>
            <div class="all-videos">
              <div class="video active">
                <div class="thumbnail" data-id="hu-q2zYwEYs" data-title="Introduction">Introduction</div>
              </div>

              <div class="video ">
                <div class="thumbnail" data-id="mbeT8mpmtHA" data-title="HTML Basics">HTML Basics</div>
              </div>

              <div class="video">
                <div class="thumbnail" data-id="YwbIeMlxZAU" data-title="HTML Forms">HTML Forms</div>
              </div>
              <div class="video">
                <div class="thumbnail" data-id="D3iEE29ZXRM" data-title="CSS Basics">CSS Basics</div>
              </div>
              <div class="video">
                <div class="thumbnail" data-id="FHZn6706e3Q" data-title="CSS Classes & Selectors">CSS
                  Classes & Selectors</div>
              </div>
              <div class="video">
                <div class="thumbnail" data-id="kGW8Al_cga4" data-title="HTML 5 Semantics">HTML 5 Semantics
                </div>
              </div>
              <div class="video">
                <div class="thumbnail" data-id="25R1Jl5P7Mw" data-title="Chrome Dev Tools">Chrome Dev Tools
                </div>
              </div>
              <div class="video">
                <div class="thumbnail" data-id="XQaHAAXIVg8" data-title="CSS Layout & Position">CSS Layout &
                  Position</div>
              </div>
              <div class="video">
                <div class="thumbnail" data-id="FMu2cKWD90g" data-title="Pseudo Classes & Elements">Pseudo
                  Classes & Elements</div>
              </div>
              <div class="video">
                <div class="thumbnail" data-id="Xig7NsIE6DI" data-title=" Intro to Media Queries"> Intro to
                  Media Queries</div>
              </div>

            </div>


          </div>
        </div>

      </div>


    </div>
  );
};

export default Html;
