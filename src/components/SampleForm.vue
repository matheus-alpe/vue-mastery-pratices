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

      <fieldset>
        <legend>Name & describe your event</legend>

        <BaseInput
          v-model="event.title"
          label="Title"
          type="text"
          error="This input has an error!"
        />

        <BaseInput
          v-model="event.description"
          label="Description"
          type="text"
        />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput
          v-model="event.location"
          label="Location"
          type="text"
        />
      </fieldset>

      <fieldset>
        <legend>Pets</legend>
        <p>Are pets allowed?</p>

        <BaseRadioGroup
          v-model="event.pets"
          :options="petOptions"
          name="pets"
        />
      </fieldset>

      <fieldset>
        <legend>Extras</legend>

        <BaseCheckbox
          v-model="event.extras.catering"
          label="Catering"
        />
        <BaseCheckbox
          v-model="event.extras.music"
          label="Live music"
        />
      </fieldset>

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

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
