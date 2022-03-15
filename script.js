const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
  {
    name: 'rock',
    sign : '🗿',
    beats: 'scissors'
  },
  {
    name: 'paper',
    sign : '📄',
    beats: 'rock'
  },
  {
    name: 'scissors',
    sign: '✂ ',
    beats : 'paper'
  }
]

function randomSelection()
 {
     const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
     return SELECTIONS[randomIndex]
 }

 
 
selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function winner(yourSelection,comSelection)
{
  return yourSelection.beats===comSelection.beats;
}

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner= winner(selection)
    const comWinner= winner(computerSelection)
    /*console.log(computerSelection)*/
  }
  

 function addSelectionResult(selection,winner)
 {
   const div = document.createElement('div')
   div.innerText = selection.sign
   div.classList.add("result-selection")
   if (winner ) div.class.add("winner")
   finalColumn.after(div)

 }