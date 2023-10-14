export default defineEventHandler(async (event) => {

  // Обработка параметров запроса
  // const {name} = getQuery(event)

  // Обработка данных
  // const {age} = await readBody(event)

  // Вызов API с закрытым ключем
  const {data}= await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_LcuYG7neVz6pz9H9YbTDe6eXa1tV4g9zNOWpycWM')

  return data
})