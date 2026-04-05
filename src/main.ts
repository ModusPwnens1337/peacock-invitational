import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const candidateDates = [
  'Saturday, June 6, 2026',
  'Saturday, June 13, 2026',
  'Saturday, June 20, 2026',
  'Saturday, June 27, 2026',
];

const formspreeEndpoint = 'https://formspree.io/f/your-form_id';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root not found.');
}

const dateCards = candidateDates
  .map(
    (date, index) => `
      <label class="date-chip" for="date-card-${index}">
        <input class="date-chip-input" type="checkbox" id="date-card-${index}" value="${date}" name="availableDatesPreview" />
        <span class="date-chip-day">${date.split(',')[0]}</span>
        <span class="date-chip-date">${date.split(',').slice(1).join(',').trim()}</span>
      </label>
    `,
  )
  .join('');

const formDateOptions = candidateDates
  .map(
    (date, index) => `
      <div class="col-md-6">
        <label class="form-date-option" for="form-date-${index}">
          <input class="form-check-input available-date" type="checkbox" id="form-date-${index}" name="availableDates" value="${date}" />
          <span>${date}</span>
        </label>
      </div>
    `,
  )
  .join('');

const topChoiceOptions = [
  '<option value="">Select your top choice</option>',
  ...candidateDates.map((date) => `<option value="${date}">${date}</option>`),
  '<option value="Interested, but none currently work">Interested, but none currently work</option>',
].join('');

app.innerHTML = `
  <header class="site-header fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="#top" aria-label="The Peacock Invitational home">
          <img src="/logo.png" alt="The Peacock Invitational logo" class="navbar-logo" />
          <span>
            <strong>The Peacock Invitational</strong>
            <small>Honoring a Life Well Played</small>
          </span>
        </a>

        <button
          class="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#siteNav"
          aria-controls="siteNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="siteNav">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#details">Details</a></li>
            <li class="nav-item"><a class="nav-link" href="#dates">Dates</a></li>
            <li class="nav-item"><a class="nav-link" href="#register">Register</a></li>
            <li class="nav-item"><a class="btn btn-flag ms-lg-2" href="#register">Pre-Register</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main id="top">
    <section class="hero-section">
      <div class="hero-backdrop"></div>
      <div class="container position-relative">
        <div class="row align-items-center gy-5">
          <div class="col-lg-7">
            <p class="eyebrow">In memory of Shane Peacock</p>
            <h1 class="hero-title">The Peacock Invitational</h1>
            <p class="hero-tagline">Honoring a Life Well Played</p>
            <p class="hero-copy">
              A memorial golf tournament built around friendship, remembrance, and a meaningful day on the course.
              Share your availability so we can choose the best date and begin shaping the event together.
            </p>
            <div class="hero-actions">
              <a href="#register" class="btn btn-flag btn-lg">Pre-Register</a>
              <a href="#dates" class="btn btn-outline-light btn-lg">View Date Options</a>
            </div>
            <div class="hero-meta row g-3 mt-4">
              <div class="col-sm-4">
                <div class="meta-card">
                  <span>Format</span>
                  <strong>Memorial outing</strong>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="meta-card">
                  <span>Status</span>
                  <strong>Date pending</strong>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="meta-card">
                  <span>Focus</span>
                  <strong>Attendance + timing</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="hero-logo-card">
              <img src="/hero-logo.png" alt="The Peacock Invitational peacock and flag logo" class="hero-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="content-section section-deep">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-7">
            <p class="section-kicker">About the tournament</p>
            <h2 class="section-title">A memorial gathering rooted in friendship and community</h2>
            <p class="section-copy">
              The Peacock Invitational is a place to honor Shane Peacock with a day that feels personal, polished, and welcoming.
              This early site is designed to help gather the right group and land on the strongest tournament date before final details are announced.
            </p>
            <p class="section-copy muted-copy mb-0">
              Once responses are in, the final course, format, and event schedule can be confirmed with confidence.
            </p>
          </div>
          <div class="col-lg-5">
            <div class="memorial-panel">
              <span class="panel-line"></span>
              <p class="memorial-quote">A day on the course. A lasting tribute. A reason to gather and remember well.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="details" class="content-section section-night">
      <div class="container">
        <div class="section-heading text-center">
          <p class="section-kicker">Event snapshot</p>
          <h2 class="section-title">Clear details without overcomplicating the plan</h2>
        </div>
        <div class="row g-4 mt-1">
          <div class="col-md-6 col-xl-3">
            <article class="info-card h-100">
              <span class="info-icon">📍</span>
              <h3>Location</h3>
              <p>Course to be announced after the final date is selected.</p>
            </article>
          </div>
          <div class="col-md-6 col-xl-3">
            <article class="info-card h-100">
              <span class="info-icon">📅</span>
              <h3>Timing</h3>
              <p>Late spring or early summer, based on the strongest attendance window.</p>
            </article>
          </div>
          <div class="col-md-6 col-xl-3">
            <article class="info-card h-100">
              <span class="info-icon">⛳</span>
              <h3>Format</h3>
              <p>Memorial golf outing with final tournament structure to follow.</p>
            </article>
          </div>
          <div class="col-md-6 col-xl-3">
            <article class="info-card h-100">
              <span class="info-icon">📢</span>
              <h3>Current phase</h3>
              <p>Pre-registration is open to estimate turnout and choose the best date.</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="dates" class="content-section section-deep">
      <div class="container">
        <div class="section-heading text-center narrow">
          <p class="section-kicker">Date preference</p>
          <h2 class="section-title">Select all dates that could work for you</h2>
          <p class="section-copy">The final tournament date will be chosen from the options with the strongest support.</p>
        </div>
        <div class="date-chip-grid">
          ${dateCards}
        </div>
      </div>
    </section>

    <section id="register" class="content-section section-form">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-9 col-lg-10">
            <div class="form-frame">
              <div class="row g-0 align-items-stretch">
                <div class="col-lg-5 form-side-panel">
                  <p class="section-kicker">Pre-registration</p>
                  <h2 class="section-title mb-3">Help us choose the best day to gather</h2>
                  <p class="section-copy mb-4">
                    This short form helps estimate attendance, capture preferred dates, and build the first outreach list for the event.
                  </p>
                  <ul class="check-list">
                    <li>Fast, phone-friendly form</li>
                    <li>Date preference and attendance estimate</li>
                    <li>Simple follow-up once details are finalized</li>
                  </ul>
                </div>
                <div class="col-lg-7">
                  <div class="form-panel">
                    <div id="alert-region" aria-live="polite"></div>
                    <form id="registration-form" novalidate>
                      <div class="row g-3">
                        <div class="col-12">
                          <label for="fullName" class="form-label">Full name <span class="required">*</span></label>
                          <input id="fullName" name="fullName" type="text" class="form-control" required />
                          <div class="invalid-feedback">Please enter your name.</div>
                        </div>

                        <div class="col-md-6">
                          <label for="email" class="form-label">Email <span class="required">*</span></label>
                          <input id="email" name="email" type="email" class="form-control" required />
                          <div class="invalid-feedback">Please enter a valid email.</div>
                        </div>

                        <div class="col-md-6">
                          <label for="phone" class="form-label">Phone <span class="optional">Optional</span></label>
                          <input id="phone" name="phone" type="tel" class="form-control" />
                        </div>

                        <div class="col-12">
                          <fieldset>
                            <legend class="form-label mb-2">Attendance intent <span class="required">*</span></legend>
                            <div class="stacked-options">
                              <label class="choice-row"><input class="form-check-input" type="radio" name="attendanceIntent" value="Yes, I expect to attend" required /> <span>Yes, I expect to attend</span></label>
                              <label class="choice-row"><input class="form-check-input" type="radio" name="attendanceIntent" value="Maybe" required /> <span>Maybe</span></label>
                              <label class="choice-row"><input class="form-check-input" type="radio" name="attendanceIntent" value="Keep me informed" required /> <span>Keep me informed</span></label>
                            </div>
                          </fieldset>
                        </div>

                        <div class="col-md-6">
                          <label for="attendeeCount" class="form-label">Estimated group size <span class="required">*</span></label>
                          <input id="attendeeCount" name="attendeeCount" type="number" min="1" max="12" value="1" class="form-control" required />
                          <div class="invalid-feedback">Please enter a group size.</div>
                        </div>

                        <div class="col-md-6">
                          <label for="topChoiceDate" class="form-label">Top choice date <span class="required">*</span></label>
                          <select id="topChoiceDate" name="topChoiceDate" class="form-select" required>
                            ${topChoiceOptions}
                          </select>
                          <div class="invalid-feedback">Please choose your top date.</div>
                        </div>

                        <div class="col-12">
                          <fieldset>
                            <legend class="form-label mb-2">Dates that work for you <span class="required">*</span></legend>
                            <div class="row g-2">${formDateOptions}
                              <div class="col-12">
                                <label class="form-date-option alt" for="form-date-none">
                                  <input class="form-check-input available-date" type="checkbox" id="form-date-none" name="availableDates" value="Interested, but none currently work" />
                                  <span>Interested, but none currently work</span>
                                </label>
                              </div>
                            </div>
                            <div id="date-error" class="validation-note d-none">Please select at least one option.</div>
                          </fieldset>
                        </div>

                        <div class="col-12">
                          <label class="form-date-option alt" for="volunteerInterest">
                            <input class="form-check-input" type="checkbox" id="volunteerInterest" name="volunteerInterest" value="Yes" />
                            <span>I would be open to helping, volunteering, or hearing about sponsorship opportunities.</span>
                          </label>
                        </div>

                        <div class="col-12">
                          <label for="notes" class="form-label">Notes <span class="optional">Optional</span></label>
                          <textarea id="notes" name="notes" rows="4" class="form-control" placeholder="Anything helpful for planning, team requests, or availability notes."></textarea>
                        </div>

                        <div class="col-12">
                          <p class="privacy-note">Your information will only be used for tournament planning and updates.</p>
                          <button id="submitButton" type="submit" class="btn btn-flag btn-lg w-100">Submit Pre-Registration</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container d-flex flex-column flex-lg-row justify-content-between gap-2">
      <p class="mb-0">The Peacock Invitational · Honoring a Life Well Played</p>
      <p class="mb-0">Update the Formspree endpoint in <code>src/main.ts</code> before launch.</p>
    </div>
  </footer>
`;

const form = document.querySelector<HTMLFormElement>('#registration-form');
const submitButton = document.querySelector<HTMLButtonElement>('#submitButton');
const alertRegion = document.querySelector<HTMLDivElement>('#alert-region');
const dateError = document.querySelector<HTMLDivElement>('#date-error');
const dateInputs = Array.from(document.querySelectorAll<HTMLInputElement>('.available-date'));
const previewInputs = Array.from(document.querySelectorAll<HTMLInputElement>('.date-chip-input'));

const syncPreviewCards = () => {
  previewInputs.forEach((input, index) => {
    const card = input.closest('.date-chip');
    const target = document.querySelector<HTMLInputElement>(`#form-date-${index}`);
    if (card && target) {
      card.classList.toggle('active', target.checked);
      input.checked = target.checked;
    }
  });
};

previewInputs.forEach((previewInput, index) => {
  previewInput.addEventListener('change', () => {
    const target = document.querySelector<HTMLInputElement>(`#form-date-${index}`);
    if (target) {
      target.checked = previewInput.checked;
      target.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
});

if (!form || !submitButton || !alertRegion || !dateError) {
  throw new Error('Form elements not found.');
}

const showAlert = (message: string, type: 'success' | 'danger') => {
  alertRegion.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
};

const validateDates = () => {
  const hasDate = dateInputs.some((input) => input.checked);
  dateError.classList.toggle('d-none', hasDate);
  syncPreviewCards();
  return hasDate;
};

dateInputs.forEach((input) => input.addEventListener('change', validateDates));

validateDates();

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  alertRegion.innerHTML = '';

  const formValid = form.checkValidity();
  const datesValid = validateDates();
  form.classList.add('was-validated');

  if (!formValid || !datesValid) {
    showAlert('Please complete the required fields before submitting.', 'danger');
    return;
  }

  const formData = new FormData(form);
  const selectedDates = dateInputs.filter((input) => input.checked).map((input) => input.value);

  formData.delete('availableDates');
  selectedDates.forEach((date) => formData.append('availableDates[]', date));
  formData.append('eventName', 'The Peacock Invitational');
  formData.append('honoree', 'Shane Peacock');

  submitButton.disabled = true;
  submitButton.textContent = 'Submitting...';

  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Submission failed.');
    }

    form.reset();
    form.classList.remove('was-validated');
    validateDates();
    showAlert(
      'Thank you for your response. Your availability will help us choose the best date, and we will follow up with final details soon.',
      'success',
    );
    window.location.hash = 'register';
  } catch {
    showAlert(
      'The form could not be submitted yet. Replace the Formspree endpoint in src/main.ts with your real form URL before launch.',
      'danger',
    );
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Submit Pre-Registration';
  }
});
