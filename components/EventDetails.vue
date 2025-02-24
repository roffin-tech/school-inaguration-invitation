<template>
  <section class="event-details">
    <h2>Inauguration Details</h2>
    <div>
      <p><strong>Date:</strong> 15th March 2025</p>
      <p><strong>Time:</strong> 10:00 AM</p>
      <p><strong>Location:</strong> XYZ School, 123 Main Street, Your City</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventDetails',
}
</script>

<style scoped>
.event-details {
  background-color: white;
  padding: 3rem;
  margin-top: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.event-details h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #0056b3;
  text-align: center;
  margin-bottom: 1.5rem;
}

.event-details p {
  font-size: 1.125rem;
  line-height: 1.8;
}

.event-details p strong {
  font-weight: bold;
}
</style>
