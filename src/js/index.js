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
      const { name, description, html_url, homepage } = repo;
      if (description) {
        console.log(`${name}, ${description}, ${html_url}, ${homepage}`);
        projectGrid.innerHTML += `<div class="project__container">
            <div class="project__top-border">
              <div class="project__dot"></div>
              <div class="project__dot"></div>
              <div class="project__dot"></div>
            </div>

            <article class="project">
            <svg class="project__icon" width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9906 0.787476C5.19453 0.785133 0.5 5.47732 0.5 11.2687C0.5 15.8484 3.43672 19.7414 7.52656 21.1711C8.07734 21.3094 7.99297 20.9179 7.99297 20.6508V18.8344C4.8125 19.207 4.68359 17.1023 4.47031 16.7508C4.03906 16.0148 3.01953 15.8273 3.32422 15.4758C4.04844 15.1031 4.78672 15.5695 5.64219 16.8328C6.26094 17.7492 7.46797 17.5945 8.07969 17.4422C8.21328 16.8914 8.49922 16.3992 8.89297 16.0172C5.59766 15.4265 4.22422 13.4156 4.22422 11.025C4.22422 9.86482 4.60625 8.79841 5.35625 7.93826C4.87812 6.52029 5.40078 5.30623 5.47109 5.12576C6.83281 5.00388 8.24844 6.10076 8.35859 6.18748C9.13203 5.97888 10.0156 5.86873 11.0047 5.86873C11.9984 5.86873 12.8844 5.98357 13.6648 6.19451C13.9297 5.99295 15.2422 5.05076 16.5078 5.1656C16.5758 5.34607 17.0867 6.53201 16.6367 7.93123C17.3961 8.79373 17.7828 9.86951 17.7828 11.032C17.7828 13.4273 16.4 15.4406 13.0953 16.0219C13.3784 16.3002 13.6031 16.6322 13.7564 16.9984C13.9098 17.3646 13.9886 17.7577 13.9883 18.1547V20.7914C14.007 21.0023 13.9883 21.2109 14.3398 21.2109C18.4906 19.8117 21.4789 15.8906 21.4789 11.2711C21.4789 5.47732 16.782 0.787476 10.9906 0.787476Z" fill="white"/>
            </svg>
            
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
                  &lt<a 
                  target="_blank" 
                  href="${homepage}" 
                  rel="noopener noreferrer"
                  class="project__link">see here</a>&gt
                </p>

                <p class="left-column">github:</p>
                <p class="right-column">
                  &lt<a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="${html_url}" 
                  class="project__link">source code</a>&gt
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
