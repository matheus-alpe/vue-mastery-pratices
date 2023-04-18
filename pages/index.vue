<script lang="ts" setup>
interface Response {
  data: Coin[]
}

const { data } = await useFetch<Response>('/api/tickers/?limit=10')
</script>

<template>
  <main>
    <h1>Index Page</h1>

    <ClientOnly>
      <table
        border="1 px solid"
        v-if="data"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tr
          v-for="currency in data.data"
          :key="currency.id"
        >
          <td>{{ currency.name }}</td>
          <td>{{ currency.symbol }}</td>
          <td>{{ currency.price_usd }}</td>
          <td>
            <NuxtLink :to="'/currency/' + currency.id">{{ currency.id }}</NuxtLink>
          </td>
        </tr>
      </table>

      <template #placeholder> Loading... </template>
    </ClientOnly>
  </main>
</template>
