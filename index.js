let form = document.getElementById('form')
let dateInput = document.getElementById('date')
let yearResult = document.getElementById('yearResult')
let monthResult = document.getElementById('monthResult')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  let currentDate = new Date()
  let currentYear = currentDate.getFullYear()
  let currentMonth = currentDate.getMonth() + 1
  let selectedDate = new Date(date.value)
  let selectedYear = selectedDate.getFullYear()
  let selectedMonth = selectedDate.getMonth() + 1
  let ageByYear = currentYear - selectedYear
  let ageByMonth = currentMonth - selectedMonth

  if (selectedMonth > currentMonth) {
    ageByMonth = selectedMonth + currentMonth
    ageByYear -= 1
  }

  yearResult.innerText = ageByYear
  monthResult.innerText = ageByMonth
})
