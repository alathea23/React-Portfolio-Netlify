export default function Contact() {
  return (
    <div>
      <section class="segment">
      <div class="segment-title" id="contact">
        <h2>
          Contact
        </h2>
      </div>
      <div class="segment-details about" id="contact">
          <form target="textarea.formsReturn" method="POST" id="myForm">
            <p>
              <label for="username">Name:</label>
              <input
                class="text-input"
                id="username"
                type="text"
                placeholder="First Last"
              />
            </p>
            <p>
              <label for="phone">Phone:</label>
              <input
                class="text-input"
                id="phone"
                type="number"
                placeholder="XXX-XXX-XXXX"
              />
            </p>
            <p>
              <label for="email">E-mail:</label>
              <input
                class="text-input"
                id="email"
                type="text"
                placeholder="me@example.com"
              />
            </p>
            <p>
              <label for="description">Message:</label>
              <textarea
                class="text-input"
                id="description"
                placeholder="Your Message"
              ></textarea>
            </p>
            <p>
              <button type="submit" id="button">
                Submit
              </button>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
