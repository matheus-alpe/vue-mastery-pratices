<script>
import api from '@/services/api'

export default {
  name: 'SampleForm',

  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],

      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      },

      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ]
    }
  },

  methods: {
    sendForm() {
      api.post('/events', this.event).then(console.log).catch(console.error)
    }
  }
}
</script>

<template>
  <div>
    <code class="data">
      <pre>{{ event }}</pre>
    </code>

    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect
        v-model="event.category"
        :options="categories"
        label="Select a category"
      />

      <h3>Name & describe your event</h3>

      <BaseInput
        v-model="event.title"
        label="Title"
        type="text"
      />

      <BaseInput
        v-model="event.description"
        label="Description"
        type="text"
      />

      <h3>Where is your event?</h3>

      <BaseInput
        v-model="event.location"
        label="Location"
        type="text"
      />

      <h3>Are pets allowed?</h3>
      <BaseRadioGroup
        v-model="event.pets"
        :options="petOptions"
        name="pets"
      />

      <h3>Extras</h3>

      <BaseCheckbox
        v-model="event.extras.catering"
        label="Catering"
      />

      <BaseCheckbox
        v-model="event.extras.music"
        label="Live music"
      />

      <button
        class="button -fill-gradient"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<style>
code.data {
  position: fixed;
  right: 2%;
  top: 10%;
  width: 280px;
  overflow: hidden;
}
</style>
