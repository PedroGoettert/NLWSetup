const form = document.querySelector('#form-habits')
const btn = document.querySelector('header button')
const nlwSetup = new NLWSetup(form)

btn.addEventListener('click', add)

form.addEventListener('change', () => {  //Função para salvar os dados.
  localStorage.setItem('NLWSetup@Habits', JSON.stringify(nlwSetup.data))
})

function add() {
  let today = new Date().toLocaleDateString().slice(0, -5)
  let dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Dia já Incluso')
    return
  }

  nlwSetup.addDay(today)
  setTimeout(() => {
    alert('Adicionado com Sucesso')
  }, 10);
}


const data = JSON.parse(localStorage.getItem('NLWSetup@Habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()

