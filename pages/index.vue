<template>
  <div class="invitation-container">
    <header>
      <h1 class="fade-slide-in">🎓 St. Joseph’s High School, Kulathoor 🎓</h1>
      <p class="header-subtitle fade-in"><b>Grand Inauguration of the New School Building</b></p>
    </header>

    <section class="guest-name-section bounce-in">
      <h2>{{ sitation }} {{ guestName }},</h2>
    </section>

    <section class="invitation">
      <h2 class="zoom-in">🌟 INVITATION 🌟</h2>
      <div class="image-container zoom-in">
        <img src="/assets/background.jpeg" alt="School Building" class="school-image" />
      </div>
      <p class="intro slide-in-left">A Landmark in Education & Community Growth</p>
      <p class="fade-in">It is with great joy and gratitude that we invite you to the inauguration of the newly
        constructed building of St. Joseph’s High School, Kulathoor.</p>
      <p class="fade-in">For five decades, our institution has been a beacon of education, fostering young minds and
        contributing to the community's growth. Under the guidance of Little Flower Church, Kulathoor, our school has
        continually strived for academic excellence and cultural enrichment.</p>
      <p class="fade-in">This new infrastructure marks a significant milestone in our journey, strengthening our
        commitment to holistic education.</p>

      <div class="guest-section slide-in-right">
        <h3>🎤 Chief Guest</h3>
        <p>
          <strong>Mr. Anto Antony</strong>,
          Member of Parliament
        </p>

        <h3>🎖️ Guests of Honour</h3>
        <ul>
          <li><strong>His Grace Mar Thomas Tharayil</strong></li>
          <li><strong>Adv. Pramod Narayanan</strong>, MLA</li>
          <li><strong>Mr. Raju Abraham</strong>, Ex-MLA</li>
        </ul>
      </div>

      <div class="event-location-container">
        <div class="event-details fade-in">
          <h3>📅 Blessing Ceremony</h3>
          <p><strong>Date:</strong> 27th February 2025</p>
          <p><strong>Time:</strong> 08:00 AM</p>
          <p><strong>Celebrant:</strong> His Grace Mar Joseph Perumthottam</p>
          <p><strong>Venue:</strong> St. Joseph's High School, Kulathoor</p>
        </div>

        <div class="event-details fade-in">
          <h3>📅 Inauguration</h3>
          <p><strong>Date:</strong> 27th February 2025</p>
          <p><strong>Time:</strong> 02:45 PM</p>
          <p><strong>Venue:</strong> Parish Hall, Little Flower Church, Kulathoor</p>
        </div>

        <div class="qr-container zoom-in" @click="locateUs()">
          <h3>📍 TAP OR SCAN TO REACH US</h3>
          <img src="/assets/location.png" alt="Location QR Code" class="qr-image" />
        </div>
      </div>

      <p class="closing-message slide-in-up">Join us in this moment of celebration! Your presence and blessings will be
        a great encouragement to us as we continue our mission of shaping young minds. We also express our heartfelt
        gratitude for your invaluable support in making this new building a reality.</p>

      <p class="fade-in">Looking forward to welcoming you to this special occasion!</p>

      <p class="signature fade-in">With warm regards,<br />
        <strong>Fr. Jacob Naduvilekkalam</strong><br />
        Manager, St. Joseph’s High School, Kulathoor
      </p>

      <h3 class="vision-header bounce-in">🌟 A Vision for the Future 🌟</h3>
      <p class="fade-in">Our school remains committed to fostering academic excellence, moral integrity, and holistic
        development. With modern facilities, enhanced learning environments, and a spirit of service, we aim to continue
        empowering students to excel in all aspects of life.</p>
      <p class="motto pulse">🌿 Education Rooted in Values, Growing Towards Excellence</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'InvitationPage',
    data() {
      return {
        guestName: 'Guest Name',
        sitation: 'Dear'
      }
    },
    mounted() {
      const urlParams = new URLSearchParams(window.location.search);
      this.guestName = urlParams.get('n') || 'Guest Name';
      this.sitation = urlParams.get('s') || 'Dear';
    },
    methods: {
      locateUs() {
        window.location.href = 'https://maps.app.goo.gl/AJTwJcBQKtDZf8UA7';
      }
    }
  }
</script>

<style scoped>

  /* New Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 1.5s ease-in-out;
  }

  .slide-in-left {
    animation: slideInLeft 1.5s ease-out;
  }

  .slide-in-right {
    animation: slideInRight 1.5s ease-out;
  }

  .slide-in-up {
    animation: slideInUp 1.5s ease-out;
  }

  .pulse {
    animation: pulse 2s infinite;
  }


  .invitation-container {
    font-family: 'Inter', sans-serif;
    line-height: 1.8;
    color: #1a1a2e;
    background: linear-gradient(135deg, #f8f9fa, #dfe9f3);
    padding: 2rem;
    max-width: 1200px;
    margin: auto;
    border-radius: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: fadeIn 1.5s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  header {
    text-align: center;
    margin-bottom: 2rem;
  }

  header h1 {
    font-size: 1.8rem;
    color: #1e3a8a;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  }

  .header-subtitle {
    font-size: 0.9rem;
    color: #3b3b58;
  }

  .guest-name-section {
    text-align: center;
    margin-bottom: 2rem;
  }

  .guest-name-placeholder {
    font-size: 1.2rem;
    font-weight: bold;
    color: #1e3a8a;
    padding: 0.5rem;
    border: 2px dashed #1e3a8a;
    border-radius: 10px;
  }

  .invitation h2 {
    text-align: center;
    color: #e63946;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  }

  .invitation h3 {
    margin-top: 2rem;
    color: #1e3a8a;
    font-size: 1.2rem;
  }

  .intro {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    margin: 1rem 0;
    color: #3b3b58;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    padding: 0.5rem 0;
  }

  .guest-section,
  .event-details {
    margin: 1.5rem 0;
    padding: 1rem;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .event-location-container {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .event-location-container {
      flex-direction: row;
      justify-content: space-around;
    }
  }

  .closing-message {
    margin-top: 2rem;
    font-style: italic;
    text-align: center;
  }

  .signature {
    margin-top: 2rem;
    text-align: right;
    font-size: 1rem;
  }

  .motto {
    margin-top: 2rem;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    color: #1e3a8a;
  }

  .vision-header {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.2rem;
  }

  .image-container {
    text-align: center;
    margin-top: 2rem;
  }

  .qr-container {
    text-align: center;
    cursor: pointer;

    h3 {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
  }

  .school-image,
  .qr-image {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 1024px) {
    .qr-image {
      max-width: 200px;
    }
  }
</style>
