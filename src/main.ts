import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const EVENT = {
  location: "Queen's Harbour Yacht & Country Club",
  eventDate: "Saturday, September 12th, 2026",
  arrivalTime: "9:00 AM",
  firstTeeTime: "9:54 AM",
  formspreeEndpoint: 'https://formspree.io/f/xzdknndl',
  googleMapsUrl: "https://www.google.com/maps/place/Queen's+Harbour+Yacht+%26+Country+Club/@30.3441996,-81.4533622,17z/data=!3m1!4b1!4m6!3m5!1s0x88e44c74dd17953b:0xce470f61e225a88e!8m2!3d30.344195!4d-81.4507873!16s%2Fg%2F1tdy9wtr?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",
}

const ARRIVAL_MESSAGE = `The first tee time will be at ${EVENT.firstTeeTime}, but please arrive by ${EVENT.arrivalTime} for instructions.`;

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root not found.');
}

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
            <li class="nav-item"><a class="nav-link" href="#register">Registration</a></li>
            <li class="nav-item"><button class="btn btn-pre-register-disabled ms-lg-2" type="button" disabled aria-disabled="true">Pre-Register</button></li>
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
              Registration is now open for The Peacock Invitational on ${EVENT.eventDate} at ${EVENT.location}.
              Join us for a memorial golf tournament built around remembrance, friendship, and a day on the course for Shane.
            </p>
            <div class="hero-actions">
              <a href="#register" class="btn btn-flag btn-lg">Register Now</a>
            </div>
            <div class="hero-meta row g-3 mt-4">
              <div class="col-sm-4">
                <div class="meta-card">
                  <span>Date</span>
                  <strong>Sept. 12, 2026</strong>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="meta-card">
                  <span>Status</span>
                  <strong>Registration open</strong>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="meta-card">
                  <span>Focus</span>
                  <strong>Golf + remembrance</strong>
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

    <section id="about" class="content-section section-night">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-7">
            <p class="section-kicker">About the tournament</p>
            <h2 class="section-title">A memorial gathering for Shane Peacock</h2>
            <p class="section-copy">
              The Peacock Invitational is a place to honor Shane Peacock with a day on the course. A place where many of us got to spend some of our most memorable moments with Shane.
              This day and tournament will represent our love and remembrance of Shane by getting together with friends to commemorate our loss of the big guy.
            </p>
            <p class="section-copy muted-copy mb-0">
              This year's tournament is scheduled for ${EVENT.eventDate}. Use the registration form below to reserve your spot or register your group.
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

    <section id="details" class="content-section section-deep">
      <div class="container">
        <div class="section-heading text-center">
          <p class="section-kicker">Event snapshot</p>
          <h2 class="section-title">Tournament details</h2>
        </div>
        <div class="row g-4 mt-1">
          <div class="col-md-6 col-xl-3">
            <article class="info-card h-100">
              <span class="info-icon">📍</span>
              <h3>Location</h3>
                <p class="mb-2">
                  <strong>${EVENT.location}</strong>
                </p>

                <p class="small mb-3">
                  1131 Queens Harbor Blvd<br>
                  Jacksonville, FL 32225
                </p>

                <a
                  href=${EVENT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-light event-action-btn"
                >
                  🗺️ View on Maps
                </a>
            </article>
          </div>
          <div class="col-md-6 col-xl-3">
            <article class="info-card h-100">
              <span class="info-icon">📅</span>
              <h3>Date & Time</h3>
              <p>${EVENT.eventDate}</p>
              <p class="small mb-3">
                ${ARRIVAL_MESSAGE}
              </p>
              <add-to-calendar-button
                name="Peacock Invitational Golf Tournament"
                startDate="2026-09-12"
                startTime="09:00"
                endTime="16:00"
                timeZone="America/New_York"
                location="Queen's Harbour Country Club"
                options="'Apple','Google','iCal','Microsoft365','Outlook.com'"
                description="Join us for the Peacock Invitational Golf Tournament!

Date: September 12, 2026

${ARRIVAL_MESSAGE}

More information:
https://peacockinvitational.com/"
                buttonStyle="round"
                buttonClass="event-action-btn"
                hideCheckmark
              ></add-to-calendar-button>
            </article>
          </div>
          <div class="col-md-6 col-xl-3">
            <article class="info-card h-100">
              <span class="info-icon">⛳</span>
              <h3>Format</h3>
              <p>The exact team scoring format and tournament rules will be announced prior to the event.</p>
            </article>
          </div>
          <div class="col-md-6 col-xl-3">
            <article class="info-card h-100">
              <span class="info-icon">📢</span>
              <h3>Current phase</h3>
              <p>Registration is open for individual players and groups.</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="register" class="content-section section-night">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-9 col-lg-10">
            <div class="instruction-box p-4 mb-4">
              <h5 class="mb-3">Instructions</h5>
              <ul class="mb-0">
                <li>
                  This form registers you for The Peacock Invitational on <strong>${EVENT.eventDate}</strong>.
                </li>
                <li>
                  If you plan to play with a specific group, one person can register the entire group by selecting playing partner and preferred foursome. 
                  If you just register for yourself, don't worry, we'll take care of group making.
                </li>
                <li>
                  <strong>Please include accurate names and email addresses</strong> for all attendees so we can send updates and confirm participation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-9 col-lg-10">
            <div class="form-frame">
              <div class="row g-0 align-items-stretch">
                <div class="col-lg-5 form-side-panel">
                  <p class="section-kicker">Registration</p>
                  <h2 class="section-title mb-3">Register for the tournament</h2>
                  <p class="section-copy mb-4">
                    Use this short form to register yourself or your group for The Peacock Invitational.
                  </p>

                  <div class="registration-price-card mb-4">
                    <h3 class="h5 mb-3 text-center">Entry Fee</h3>

                    <ul class="mb-0">
                      <li class="mb-2">
                        Entry is expected to be approximately <strong>$150 per golfer</strong>.
                      </li>
                      <li class="mb-2">
                        The final price will include greens fee, a box lunch at the turn, Peacock Invitational merch, and entry for prizes TBD.
                      </li>
                      <li class="mb-2">
                        Lunch includes your choice of a Caesar chicken wrap or hummus vegetable
                        wrap, plus an individual bag of chips, whole fruit, cookie, and bottled
                        water.
                      </li>
                      <li class="mb-2">
                        But don't worry about payment now, we'll take care of that later.
                      </li>
                    </ul>
                  </div>

                </div>
                <div class="col-lg-7">
                  <div class="form-panel">
                    <form id="registration-form" novalidate>
                      <div class="row g-3">
                        <input type="hidden" name="EVENT.eventDate" value="${EVENT.eventDate}" />
                        <input type="hidden" name="registrationType" value="Tournament registration" />

                        <div class="col-12">
                          <h5 class="form-section-heading">Primary Registrant</h5>
                        </div>

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

                        <div class="col-md-6">
                          <label for="handicap" class="form-label">Handicap <span class="optional">Optional</span></label>
                          <input
                            id="handicap"
                            name="handicap"
                            type="number"
                            min="0"
                            max="36"
                            step="0.1"
                            inputmode="decimal"
                            placeholder="e.g. 17.6"
                            class="form-control"
                          />
                          <div class="optional mt-1">If you don't have a handicap that's fine, this is for fun!</div>
                        </div>

                        <div class="col-12 mt-4">
                          <h5 class="form-section-heading">Playing Partner</h5>
                          <p class="optional mb-3">
                            If you already know who your playing partner will be, enter their information below. If not, you can leave these fields blank and update us later.
                          </p>
                        </div>

                        <div class="col-md-8">
                          <label for="partnerName" class="form-label">
                            Partner name <span class="optional">Optional</span>
                          </label>

                          <input
                            id="partnerName"
                            name="partnerName"
                            type="text"
                            class="form-control"
                          />
                        </div>

                        <div class="col-md-8">
                          <label for="partnerHandicap" class="form-label">Partner handicap <span class="optional">Optional</span></label>
                          <input
                            id="partnerHandicap"
                            name="partnerHandicap"
                            type="number"
                            min="0"
                            max="36"
                            step="0.1"
                            inputmode="decimal"
                            placeholder="e.g. 12.4"
                            class="form-control"
                          />
                        </div>

                        <div class="col-12 mt-4">
                          <h5 class="form-section-heading">Preferred Foursome</h5>
                          <p class="optional mb-3">
                            If you'd like your twosome paired with another twosome, list their names below. We'll do our best to keep requested foursomes together.
                          </p>

                          <label for="preferredFoursome" class="form-label">Preferred foursome <span class="optional">Optional</span></label>
                          <textarea
                            id="preferredFoursome"
                            name="preferredFoursome"
                            rows="3"
                            class="form-control"
                            placeholder="Example: We'd like to play with John Smith and Mike Jones."
                          ></textarea>
                        </div>

                        <div class="col-12">
                          <label for="notes" class="form-label">Notes <span class="optional">Optional</span></label>
                          <textarea id="notes" name="notes" rows="4" class="form-control" placeholder="Anything helpful for planning, team requests, or notes for the tournament."></textarea>
                        </div>

                        <div class="col-12">
                          <div id="alert-region" aria-live="polite" class="mb-3"></div>

                          <p class="privacy-note">* Your information will only be used for tournament planning and updates.</p>
                          <button id="submitButton" type="submit" class="btn btn-flag btn-lg w-100">Submit Registration</button>
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

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-9 col-lg-10">
            <div class="instruction-box p-4 mt-4">
              <h5 class="mb-3">Tournament Format</h5>
              <ul class="mb-0">
                <li>
                  The Peacock Invitational will be played as a 2-Person Scramble, making it a fun and relaxed format for golfers of all skill levels.
                </li>
                <li>
                  Here's how it works:
                  <ul class="mb-0">
                    <li>Teams consist of two golfers.</li>
                    <li>Both players tee off on every hole.</li>
                    <li>The team chooses the best shot.</li>
                    <li>Both players then play their next shot from that location.</li>
                    <li>This process continues until the ball is holed.</li>
                    <li>Only one team score is recorded for each hole.</li>
                  </ul>
                </li>
                <li>
                  Handicaps will be used to help keep the competition fair. Additional details on scoring and handicap calculations will be shared prior to the tournament.
                </li>
                <li>
                  The exact team scoring format and tournament rules will be announced prior to the event.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="pre-register" class="content-section section-deep preregistration-archive" aria-labelledby="pre-register-heading">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-9 col-lg-10">
            <div class="instruction-box p-4 mb-4">
              <h5 id="pre-register-heading" class="mb-3">Pre-registration section</h5>
              <p class="mb-0">
                This section is intentionally kept in the site for future yearly planning. The 2026 tournament date has been selected, so pre-registration is paused for now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container d-flex flex-column flex-lg-row justify-content-between gap-2">
      <p class="mb-0">The Peacock Invitational · Honoring a Life Well Played</p>
      <p class="mb-0">Created by Dylan Riley &lt;3 04/11/2026</p>
    </div>
  </footer>
`;

const form = document.querySelector<HTMLFormElement>('#registration-form');
const submitButton = document.querySelector<HTMLButtonElement>('#submitButton');
const alertRegion = document.querySelector<HTMLDivElement>('#alert-region');
const emailInput = document.querySelector<HTMLInputElement>('#email');

if (!form || !submitButton || !alertRegion) {
  throw new Error('Form elements not found.');
}

const setFieldError = (fieldId: string, message: string) => {
  const field = document.getElementById(fieldId) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
  if (!field) return;

  field.classList.add('is-invalid');

  const feedback = field.parentElement?.querySelector('.invalid-feedback');
  if (feedback) {
    feedback.textContent = message;
  }
};

const showAlert = (message: string, type: 'success' | 'danger') => {
  alertRegion.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  alertRegion.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  alertRegion.innerHTML = '';

  form.querySelectorAll('.is-invalid').forEach((el) => el.classList.remove('is-invalid'));

  if (emailInput) {
    emailInput.value = emailInput.value.trim();
  }

  form.classList.add('was-validated');

  if (!form.checkValidity()) {
    showAlert('Please complete the required fields before submitting.', 'danger');
    return;
  }

  const formData = new FormData(form);
  formData.append('eventName', 'The Peacock Invitational');
  formData.append('honoree', 'Shane Peacock');

  submitButton.disabled = true;
  submitButton.textContent = 'Submitting...';

  try {
    const response = await fetch(EVENT.formspreeEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    const result = await response.json().catch(() => null);
    console.log('Formspree response:', result);

    if (!response.ok) {
      if (result?.errors) {
        result.errors.forEach((error: { field?: string; message?: string }) => {
          if (error.field && error.message) {
            setFieldError(error.field, error.message);
          }
        });
      }

      const errorMessage =
        result?.errors?.map((error: { field?: string; message?: string }) => {
          if (error.field && error.message) {
            return `${error.field}: ${error.message}`;
          }
          return error.message;
        }).filter(Boolean).join(', ') ||
        result?.error ||
        `Submission failed with status ${response.status}.`;

      throw new Error(errorMessage);
    }

    form.reset();
    form.classList.remove('was-validated');

    showAlert(
      'Thank you for registering. We received your information and will follow up with tournament details soon.',
      'success',
    );

  } catch (error) {
    console.error('Form submission error:', error);
    showAlert(
      error instanceof Error ? error.message : 'The form could not be submitted. Please try again.',
      'danger',
    );
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Submit Registration';
  }
});
