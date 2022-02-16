import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const projectGrid = document.querySelector('.my-projects__grid--js');

fetch('https://api.github.com/users/tomekgasowski/repos')
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp) {
        const {name, description, html_url, homepage} = repo;
        if (description) {
            console.log(`${name}, ${description}, ${html_url}, ${homepage}`);
            projectGrid.innerHTML += `<div class="project__container">
            <div class="project__top-border">
              <div class="project__dot"></div>
              <div class="project__dot"></div>
              <div class="project__dot"></div>
            </div>

            <article class="project">
              <img
                src="/dist/img/github.svg"
                alt="github icon"
                class="project__icon"
              />
              <div class="project__grid">
                <p class="left-column">project:</p>
                <p class="project__name project__name--js right-column">
                  ${name}
                </p>

                <p class="left-column">description:</p>
                <p
                  class="right-column project__description project__description--js"
                >
                ${description}
                </p>
                <p class="left-column">demo:</p>
                <p class="right-column">
                  &lt <a href="${homepage}" class="project__link">see here</a> &gt
                </p>

                <p class="left-column">github:</p>
                <p class="right-column">
                  &lt <a href="${html_url}" class="project__link">source code</a> &gt
                </p>
              </div>
            </article>
          </div>`;
        }
    }
})
.catch(error => {
    console.log("error");
})
