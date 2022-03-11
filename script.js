const selectionButtons = document.querySelector('[data-selection]')

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e=>
    {
      const selectionName =   selectionButton.dataset.selection
      makeSElection(selectionName)
    }
    )
});

function makeSElection(selection)
{
    console.log(selection)
}