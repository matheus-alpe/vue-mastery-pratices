<script lang="ts" setup>
const route = useRoute()

const { data } = await useFetch<Coin[]>('/api/ticker/?id=' + route.params.id)
const coin = data.value && data.value[0]
</script>

<template>
  <ClientOnly>
    <div v-if="coin && coin.name">
      <h2>{{ coin.name }} Detail page</h2>
      <table border="1 px solid">
        <thead>
          <th>Symbol</th>
          <th>Rank</th>
          <th>Price - US $</th>
          <th>Market Cap - US $</th>
        </thead>
        <tr>
          <td>{{ coin.symbol }}</td>
          <td>{{ coin.rank }}</td>
          <td>{{ coin.price_usd }}</td>
          <td>{{ coin.market_cap_usd }}</td>
        </tr>
      </table>
    </div>

    <template #placeholder> Loading... </template>
  </ClientOnly>
</template>
