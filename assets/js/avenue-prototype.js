// var rowObject = [ 'Words', Quantity, Price, Size, Variant, variable]

var qty = 0
var vrb = true
var preConstruction = [
  'Pre Construction Prep',
  ['Protect Flooring With RAM board', qty, 600, null, null, false],
  ['Clean Suite - Move in ready condition', qty, 550, null, null, false],
  ['Cover Stairs - with RAM board', qty, 100, null, null, false],
  ['Cover Hallways/Carpet Stairs - Roberts Carpet Protection Film', qty, 190, null, null, false]
]

var demolition = [
  'Demolition',
  ['Classic Suite Demolition', qty, 1200, null, null, false],
  ['Semi-Premium Demolition', qty, 1400, null, null, false],
  ['Premium Suite Demolition', qty, 1800, null, null, false]
]

var livingRoom = [
  'Living Room/Dining Room',
  ['2.5 Inch Cordless Blinds', qty, 105, ['72x48"', '18x72"', '24x72"', '30x72"', '36x72"', '42x72"', '48x72"', '60x48"', '60x72"', '72x72"', '36x48"'], ['Esspresso', 'White'], false],
  ['Vertical Blinds', qty, 105, ['78x84"', '66x84"'], ['White'], false],
  ['Balcony Door', qty, [200, 115], null, null, vrb],
  ['Replace Ceiling Fan', qty, 140, null, null, false],
  ['Replace Crown Molding', qty, 14, null, null, false],
  ['Flooring', qty, [2.1, 'custom'], null, null, vrb],
  ['T-Mouldings required throughout unit', qty, 0, null, null, false],
  ['Replace Light Fixture', qty, 42, null, null, false],
  ['Replace Stairs', qty, 140, null, null, false],
  ['Replace Smoke Alarm or CO2 Alarm', qty, 84, null, null, false],
  ['Replace Baseboard', qty, 4.2, null, null, false],
  ['Replace Quarter Round', qty, 4.2, null, null, false],
  ['Replace Door Trim', qty, 4.2, null, null, false],
  ['Replace Receptacles', qty, 35, null, null, false],
  ['Replace Switches', qty, 35, null, null, false],
  ['Decore 2 Gang Switch', qty, 35, null, null, false],
  ['Decora 3 Gang Switch', qty, 35, null, null, false],
  ['Walls', qty, [35, 8.4], null, null, vrb],
  ['Replace Window Screens', qty, 28, null, null, false],
  ['Screw Down Flooring', qty, 0.8, null, null, false],
  ['Install Drywall - Tape, Sand, and Primer, Complete', qty, 5.5, null, null, false],
  ['Paint Doors', qty, 100, null, null, false],
  ['Paint Walls (SQFT)', qty, 3.5, null, null, false],
  ['Paint Crown Molding (LNFT)', qty, 4.2, null, null, false],
  ['Paint Baseboard or Trim', qty, 2.1, null, null, false],
  ['Paint Ceiling', qty, 1000, ['Entire Unit', 'Per Room'], null, false],
  ['Patch and Replace Stucco Ceiling', qty, [1000, 400], ['Entire Unit', 'Per Room'], null, vrb],
  ['Replace Door', qty, 200, ['16"', '32"', '30"', '28"', '24"'], ['Left Handed', 'Right Handed'], false],
  ['Build Down Bulkhead to Install Bi-Fold Door', qty, 450, null, null, false],
  ['Replace Bi-Fold Door', qty, 150, ['24"', '30"', '36"'], null, false],
  ['Replace Closet Rod/Rack', qty, 105, null, null, false],
  ['Replace Closet Shelves', qty, 75, null, null, false]
]

var kitchen = [
  'Kitchen',
  ['Angle Stop', qty, 75, null, null, vrb],
  ['Boiler Pan', qty, ['custom', 'custom'], null, null, vrb],
  ['Cabinets and Drawer Pulls', qty, [20, 'custom'], null, null, vrb],
  ['Replace Cabinet Door Hinges', qty, 350, null, null, false],
  ['Replace Cabinets and Drawers Small', qty, 1400, null, null, false],
  ['Replace Cabinets and Drawers Medium', qty, 1600, null, null, false],
  ['Replace Cabinets and Drawers Large', qty, 1800, null, null, false],
  ['Paint Cabinets and Drawers', qty, 980, null, null, false],
  ['Paint Crown Molding (LNFT)', qty, 4.2, null, null, false],
  ['Paint Baseboard (LNFT)', qty, 2.1, null, null, false],
  ['Paint Trim (LNFT)', qty, 2.1, null, null, false],
  ['Paint Walls (SQFT)', qty, 3.5, null, null, false],
  ['Paint Doors', qty, 100, null, null, false],
  ['Install Countertop', qty, 420, ['10\'', '8\'', '6\'', '4\''], null, false],
  ['Countertop Endcaps Needed', qty, 0, null, null, false],
  ['Miter Kitchen Countertop', qty, 220, null, null, false],
  ['Replace Faucet Only', qty, 70, null, null, false],
  ['Flooring', qty, [2.1, 'custom'], null, null, vrb],
  ['Replace Light Fixture', qty, 42, null, null, false],
  ['Replace GFCI', qty, 105, null, null, false],
  ['Replace Microwave', qty, 70, null, null, false],
  ['Replace Range Hood', qty, 210, null, null, false],
  ['Install Charcoal Filtered Range Hood', qty, 450, null, null, false],
  ['Replace Sink and Faucet', qty, 420, null, null, false],
  ['Replace Baseboard', qty, 4.2, null, null, false],
  ['Replace Door Trim', qty, 4.2, null, null, false],
  ['Walls', qty, [35, 8.4], null, null, vrb],
  ['Replace Ceiling', qty, 5, null, null, false],
  ['Kitchen Backsplash Install', qty, 22, null, null, false],
  ['Remove and Re-Install Existing Dishwasher', qty, 75, null, null, false],
  ['Refridgerator', qty, 105, ['White 59 7/8H x 24W x 28 5/8D (in.)', 'White 66 5/8H x 29 1/2W x 30 15/16D (in.)', 'White 61 3/4H x 28W x 31 5/8D (in.)', 'Stainless Steel 66 5/8H x 29 1/2W x 30 15/16D (in.)'], null, false],
  ['Stove', qty, 105, ['White 24W x 42 1/8H x 26 5/8D (in.)', 'White 30W x 46 1/2H x 29 7/8D (in.)', 'Stainless Steel 30W x 46 7/8H x 26 1/4D (in.)'], null, false],
  ['Dishwasher', qty, 640, ['White 32 1/2H x 17 19/32W x 22 13/32D (in.)', 'White 32 1/2H x 23 1/2W x 22 13/32D (in.)', 'Stainless Steel 32 1/2H x 23 1/2W x 22 13/32D (in.)'], null, false]
]

var bedrooms = [
  'Bedroom(s)',
  ['Replace Blinds', qty, 105, null, null, false],
  ['Build Down Bulkhead to Install Bi-Fold Door', qty, 450, null, null, false],
  ['Replace Door - Masonite Lincoln Park Bi-Fold', qty, 150, ['24"', '30"', '36"'], null, false],
  ['Replace Bypass Door - White VERANDA', qty, 200, ['72', '48'], null, false],
  ['Paint Doors', qty, 100, null, null, false],
  // ['Paint Bi-folding Door', qty, 105, null, null, false],
  ['Paint Baseboard or Trim', qty, 2.1, null, null, false],
  ['Paint Walls (SQFT)', qty, 3.5, null, null, false],
  ['Patch and Replace Stucco Ceiling', qty, 400, null, null, false],
  ['Replace Ceiling Fan', qty, 105, null, null, false],
  ['Replace Closet Rod/Rack', qty, 105, null, null, false],
  ['Replace Closet/Drawer Knobs', qty, 35, null, null, false],
  ['Replace Closet Shelves', qty, 75, null, null, false],
  ['Replace Crown Molding', qty, 14, null, null, false],
  ['Replace Doorstop/Hinges/Closer', qty, 28, null, null, false],
  ['Flooring', qty, ['custom', 2.1], null, null, vrb],
  ['Replace Light Fixtures', qty, 42, null, null, false],
  ['Replace Privacy Lockset', qty, 35, null, null, false],
  ['Smoke alarm/CO2 Alarm', qty, 84, null, null, false],
  ['Replace Baseboard (LNFT)', qty, 4.2, null, null, false],
  ['Replace Trim (LNFT)', qty, 4.2, null, null, false],
  ['Walls', qty, [8.4, 35], null, null, vrb],
  ['Replace Switches', qty, 25, null, null, false],
  ['Replace Receptacle', qty, 25, null, null, false],
  // ['Replace Wall Plates for Electrical', qty, 35, null, null, false],
  ['Repair Window Screens', qty, 28, null, null, false]
]

var bathrooms = [
  'Bathroom(s)',
  ['Tub to Shower Conversion - Tile and Acrylic Shower Base', qty, 2500, ['60"', '48"'], ['LH', 'RH'], false],
  ['Replace Door - Masonite Lincoln Park', qty, 200, ['32"', '30"', '28"', '24"'], ['LH', 'RH'], false],
  ['Replace Angle Stop', qty, 75, null, null, false],
  ['Replace Greenboard, Acrylic Shower Walls, Bathtub, and Shower Faucet', qty, 1400, null, ['LH', 'RH'], false],
  ['Replace Hardware - End Brackets/ Soap Holder/ Toilet Paper Holder(s)', qty, 105, null, null, false],
  ['Cabinets and Drawer Pulls - Per Handle', qty, 20, null, null, false],
  ['Replace Cabinet Door Hinges - Per Hinge', qty, 7.5, null, null, false],
  ['Prime and Paint Cabinets and Drawers', qty, 350, null, null, false],
  ['Paint Medicine Cabinet', qty, 140, null, null, false],
  ['Paint Baseboard or Trim', qty, 2.1, null, null, false],
  ['Paint Walls (SQFT)', qty, 3.5, null, null, false],
  ['Paint Doors', qty, 100, null, null, false],
  ['Patch and Replace stucco ceiling', qty, 400, null, null, false],
  ['Replace Countertop, Sink, Faucet*', qty, 420, null, null, false],
  ['Replace Doorstop/Hinges/Closer', qty, 28, null, null, false],
  ['Replace Faucet/ Pop-up', qty, 210, null, null, false],
  ['Replace Exhaust Fan', qty, 105, null, null, false],
  ['Replace GFCI', qty, 105, null, null, false],
  ['Replace Electrical Fixture', qty, 42, null, null, false],
  ['Flooring', qty, ['custom', 2.1], null, null, vrb],
  ['Replace Handles and Index Buttons', qty, 35, null, null, false],
  ['Replace Light Fixture', qty, 42, null, null, false],
  ['Replace Medicine Cabinet ', qty, 150, null, null, false],
  ['Replace Mirror', qty, 70, null, null, false],
  ['Replace Shower Door', qty, 350, null, null, false],
  ['Replace Shower Head / Rod', qty, 70, null, null, false],
  ['Install 2 Rows of Wall Tile for Vanity Backsplash - Subway (SQFT)', qty, 22, null, null, false],
  ['Replace Sink/Vanity', qty, 575, ['24"', '30"', '48"', 'Pedestal Sink'], null, false],
  ['Replace Existing Toilet', qty, 210, null, null, false],
  ['Remove and Install New Toilet', qty, 210, null, null, false],
  ['Replace Door Trim', qty, 4.2, null, null, false],
  ['Replace Baseboard', qty, 4.2, null, null, false],
  ['Replace Walls (LNFT)', qty, [8.4, 32], null, null, vrb]
]

var additionalItems = [
  'Additional Items',
  ['Apply Tub and Tile Caulk', qty, 175, null, null, false],
  ['Clean Carpets', qty, 0, null, null, false],
  ['Deodorize Carpets', qty, 0, null, null, false],
  ['Intercom', qty, 105, null, null, false],
  ['Paint and Patch Walls (SQFT)', qty, 3.5, null, null, false],
  ['Replace Registers', qty, 21, null, null, false],
  ['Replace Wall Plates', qty, 9, null, null, false],
  ['Smoke Detector', qty, 84, null, null, false],
  ['Upgrade Cabinet and Drawer Pulls', qty, 0, null, null, false],
  ['Windows', qty, 0, null, null, false],
  ['Apply Drain Options', qty, 0, null, null, false],
  ['Audit Fire Extinguisher', qty, 0, null, null, false],
  ['Inspect Air Conditioner/Heat Pump (outside)', qty, 0, null, null, false],
  ['Inspect Air Handler (inside)', qty, 0, null, null, false],
  ['Inspect Garage Entry Door ', qty, 0, null, null, false],
  ['Inspect Water Heater ', qty, 0, null, null, false],
  ['Replace Air Filter', qty, 0, null, null, false],
  ['Replace Light Bulbs ', qty, 0, null, null, false],
  ['Replace Portion of Ceiling in Bedroom and Living Room & Paint Ceilings Entire Unit', qty, 0, null, null, false],
  ['Washer 43 1/2H x 26 7/8W x 26 5/8D (in.)', qty, 105, null, false],
  ['Dryer 42 3/5H x 26 7/8W x 29 1/2D (in.)', qty, 105, null, false],
  ['Front Load Washer 33 5/16H x 23 1/2W x 26 5/8D (in.)', qty, 105, null, null, false],
  ['Front Load Dryer 33 3/8H x 23 1/2W x 25 11/16D (in.)', qty, 105, null, null, false]
]

const sectionsList = [preConstruction, demolition, livingRoom, kitchen, bedrooms, bathrooms, additionalItems]
var innerPage = document.getElementById('al-inner-page')
var customPriceCount = 0
var alGridItemCount = 0
function createHTML () {
  for (var i = 0; i < sectionsList.length; i++) {
    var newTitle = document.createElement('h2')
    newTitle.innerHTML = sectionsList[i][0]
    var newDiv = document.createElement('div')
    $(newDiv).addClass('content-wrap')
    for (var j = 1; j < sectionsList[i].length; j++) {
      var newDivContainer = document.createElement('div')
      $(newDivContainer).addClass('al-grid')
      newDivContainer.setAttribute('name', 'al-grid-item' + alGridItemCount)
      alGridItemCount++

      var divProductName = document.createElement('div')
      divProductName.innerHTML = sectionsList[i][j][0]
      $(divProductName).addClass('capitalize')
      $(divProductName).addClass('grid-col')

      var newInput = document.createElement('input')
      newInput.setAttribute('name', 'al-input')
      newInput.setAttribute('placeholder', 'quantity')

      $(newInput).addClass('grid-col')

      var hRule = document.createElement('hr')
      newDivContainer.appendChild(divProductName)

      var sizeSelector = document.createElement('div')
      if (Array.isArray(sectionsList[i][j][3])) {
        sizeSelector = document.createElement('select')
        for (var y = 0; y < sectionsList[i][j][3].length; y++) {
          var newOption = document.createElement('option')
          newOption.innerHTML = [sectionsList[i][j][3][y]]
          sizeSelector.appendChild(newOption)
        }
      }
      if (sizeSelector != null) {
        newDivContainer.appendChild(sizeSelector)
      }
      var variantSelector = document.createElement('div')
      if (Array.isArray(sectionsList[i][j][4])) {
        variantSelector = document.createElement('select')
        for (var yy = 0; yy < sectionsList[i][j][4].length; yy++) {
          var newOption2 = document.createElement('option')
          newOption2.innerHTML = [sectionsList[i][j][4][yy]]
          variantSelector.appendChild(newOption2)
        }
      }
      if (variantSelector != null) {
        newDivContainer.appendChild(variantSelector)
      }

      var vrbSelector = document.createElement('div')
      if (sectionsList[i][j][5]) {
        vrbSelector = document.createElement('select')
        var newOption3 = document.createElement('option')
        var newOption4 = document.createElement('option')
        newOption3.innerHTML = 'Replace'
        newOption4.innerHTML = 'Repair'

        vrbSelector.appendChild(newOption3)
        vrbSelector.appendChild(newOption4)
      }
      if (vrbSelector != null) {
        newDivContainer.appendChild(vrbSelector)
      }

      var customValue = document.createElement('div')
      if (Array.isArray(sectionsList[i][j][2])) {
        if ((sectionsList[i][j][2][0] === 'custom') && (sectionsList[i][j][2][1] === 'custom')) {
          customValue = document.createElement('input')
          customValue.setAttribute('name', 'al-input-price' + customPriceCount)
          customValue.setAttribute('placeholder', 'Input Price')
          $(customValue).addClass('grid-col')
          customPriceCount++
        } else if (sectionsList[i][j][2][0] === 'custom') {
          customValue = document.createElement('input')
          customValue.setAttribute('name', 'al-input-price' + customPriceCount)
          customValue.setAttribute('placeholder', 'Replace Price')
          $(customValue).addClass('grid-col')
          customPriceCount++
        } else if (sectionsList[i][j][2][1] === 'custom') {
          customValue = document.createElement('input')
          customValue.setAttribute('name', 'al-input-price' + customPriceCount)
          customValue.setAttribute('placeholder', 'Repair Price')
          $(customValue).addClass('grid-col')
          customPriceCount++
        } else {
          customValue = document.createElement('input')
          customValue.setAttribute('name', 'al-input-price' + customPriceCount)
          customValue.setAttribute('placeholder', 'Input Price')
          $(customValue).addClass('grid-col')
          $(customValue).addClass('hidden-vis')
          customPriceCount++
        }
      }

      newDivContainer.appendChild(newInput)

      if (customValue != null) {
        newDivContainer.appendChild(customValue)
      }
      newDiv.appendChild(newDivContainer)
      newDiv.appendChild(hRule)
    }

    innerPage.appendChild(newTitle)
    innerPage.appendChild(newDiv)
  }
}
createHTML()

var newFinalDiv = document.createElement('div')
var newFinalDivPre = document.createElement('div')
var newFinalDivHST = document.createElement('div')

$(newFinalDiv).addClass('cs-wrap-final')
newFinalDivPre.innerHTML = 'Total Price: ' + 0
newFinalDivHST.innerHTML = 'Total Price (Including HST): ' + 0
newFinalDiv.appendChild(newFinalDivPre)
newFinalDiv.appendChild(newFinalDivHST)

innerPage.appendChild(newFinalDiv)

function updateFinal (final) {
  newFinalDivPre.innerHTML = 'Total Price: ' + final
  newFinalDivHST.innerHTML = 'Total Price (Including HST): ' + (final * 1.13)
  // print(final)
}

var newFinalOutputContainer = document.createElement('div')
$(newFinalOutputContainer).addClass('cs-wrap-final')
$(newFinalOutputContainer).addClass('smallFont')
var customerName = document.getElementById('cs-customer-name')
var customerAdd = document.getElementById('cs-customer-address')
var customerNum = document.getElementById('cs-customer-lead')
setInterval(
  function custInfo () {
    customerName = document.getElementById('cs-customer-name')
    customerAdd = document.getElementById('cs-customer-address')
    customerNum = document.getElementById('cs-customer-lead')
  }, 5000)

// function print (final) {
//   newFinalOutputContainer.innerHTML = `Name: ${customerName.value} Address: ${customerAdd.value} Lead #: ${customerNum.value} `
//   var count = 0
//   for (let i = 0; i < listOfLists.length; i++) {

//     for (let j = 0; j < listOfLists[i].length; j++) {
//       var newFinalOutput = document.createElement('div')
//       newFinalOutput.innerHTML += `${listOfLists[i][j]} : quantity: ${quantityList[count]} at $${value[count]} `
//       document.createElement('br')
//       count++
//       newFinalOutputContainer.appendChild(newFinalOutput)
//     }
//   }
//   newFinalOutputContainer.innerHTML += `Total: ${final} w/ HST: ${(final * 1.13)}`

//   innerPage.appendChild(newFinalOutputContainer)
// }

var multiplierList = []
var multiplierCustomCount = -1
function multiplierTracker () {
  multiplierList = []
  multiplierCustomCount = -1

  for (var i = 0; i < sectionsList.length; i++) {
    for (var j = 1; j < sectionsList[i].length; j++) {
      var multiplierValue = sectionsList[i][j][2]
      if (Array.isArray(sectionsList[i][j][2])) {
        multiplierCustomCount++
        if (document.getElementsByName('al-input-price' + multiplierCustomCount)[0].parentElement.childNodes[3].childNodes[0].selected && (sectionsList[i][j][2][0] !== 'custom')) { // if replace is selected
          multiplierValue = sectionsList[i][j][2][0]
        } else if (document.getElementsByName('al-input-price' + multiplierCustomCount)[0].parentElement.childNodes[3].childNodes[1].selected && (sectionsList[i][j][2][1] !== 'custom')) { // if repair
          multiplierValue = sectionsList[i][j][2][1]
        } else if ((sectionsList[i][j][2][0] === 'custom' || sectionsList[i][j][2][1] === 'custom')) {
          if (sectionsList[i][j][2][0] === 'custom' && document.getElementsByName('al-input-price' + multiplierCustomCount)[0].parentElement.childNodes[3].childNodes[0].selected) { // if replace is selected
            multiplierValue = parseFloat($('input[name=' + 'al-input-price' + multiplierCustomCount + ']').val()) || 0
          } else if (sectionsList[i][j][2][1] === 'custom' && document.getElementsByName('al-input-price' + multiplierCustomCount)[0].parentElement.childNodes[3].childNodes[1].selected) {
            multiplierValue = parseFloat($('input[name=' + 'al-input-price' + multiplierCustomCount + ']').val()) || 0
          }
        }
        multiplierList.push(multiplierValue)
      } else {
        multiplierList.push(sectionsList[i][j][2])
      }
    }
  }
}

var quantityList = []
var value = []
var alInput = document.getElementsByName('al-input')
quantityList.length = multiplierList.length
quantityList.fill(0)
function doAddition (zValue) {
  if (parseFloat(alInput[zValue].value)) {
    quantityList[zValue] = parseFloat(alInput[zValue].value)
  } else {
    quantityList[zValue] = 0
    return null
  }
}

function doMultiplication () {
  var tempNum = 0
  for (let x = 0; x < multiplierList.length; x++) {
    value[x] = (quantityList[x] * multiplierList[x]) || 0
    tempNum += parseFloat(value[x])
  }
  updateFinal(tempNum)
}

function jsonCreation () {
  var jsonString = '{ '
  var sectionCount = 0
  var k = 0
  for (var i = 0; i < sectionsList.length; i++) {
    jsonString += '"list' + i + '": { "name": "' + sectionsList[i][0] + '", "rowList": ['
    for (var j = 1; j < sectionsList[i].length; j++) {
      jsonString += '{ "rowName": "' + document.getElementsByName('al-grid-item' + sectionCount)[0].childNodes[0].innerHTML.replace(/"/g, '\\"') + '",'
      try {
        for (k = 0; k < document.getElementsByName('al-grid-item' + sectionCount)[0].childNodes[1].length; k++) {
          if (document.getElementsByName('al-grid-item' + sectionCount)[0].childNodes[1].childNodes[k].selected) {
            jsonString += '"size": "' + document.getElementsByName('al-grid-item' + sectionCount)[0].childNodes[1].childNodes[k].innerHTML.replace(/"/g, '\\"') + '",'
          }
        }
      } catch (err) { console.log(err) }
      try {
        for (k = 0; k < document.getElementsByName('al-grid-item' + sectionCount)[0].childNodes[2].length; k++) {
          if (document.getElementsByName('al-grid-item' + sectionCount)[0].childNodes[2].childNodes[k].selected) {
            jsonString += '"variant": "' + document.getElementsByName('al-grid-item' + sectionCount)[0].childNodes[2].childNodes[k].innerHTML.replace(/"/g, '\\"') + '",'
          }
        }
      } catch (err) { console.log(err) }
      try {
        for (k = 0; k < document.getElementsByName('al-grid-item' + sectionCount)[0].childNodes[3].length; k++) {
          if (document.getElementsByName('al-grid-item' + sectionCount)[0].childNodes[3].childNodes[k].selected) {
            jsonString += '"variable": "' + document.getElementsByName('al-grid-item' + sectionCount)[0].childNodes[3].childNodes[k].innerHTML.replace(/"/g, '\\"') + '",'
          }
        }
      } catch (err) { console.log(err) }
      jsonString += '"quantity": "' + document.getElementsByName('al-grid-item' + sectionCount)[0].childNodes[4].value + '",'

      if (j === sectionsList[i].length - 1) {
        jsonString += '"price": "' + multiplierList[sectionCount] + '" }'
      } else { jsonString += '"price": "' + multiplierList[sectionCount] + '" },' }
      sectionCount++
    }
    jsonString += ']'

    if (i === sectionsList.length - 1) {
      jsonString += '}'
    } else { jsonString += '},' }
  }
  jsonString += '}'
  return jsonString
}

var finalJsonOutput = null
$('#al-button').on('click', function () {
  multiplierTracker()
  for (let z = 0; z < alInput.length; z++) {
    doAddition(z)
  }
  doMultiplication()
  finalJsonOutput = JSON.parse(jsonCreation())
  console.log(finalJsonOutput)

  console.log(rollOfRamBoard())
  console.log(blueTape())
  console.log(whiteSilicone())
  console.log(cordlessBlindsx())
  // PDF downloader
  // let doc = new jsPDF('p', 'pt', 'a4')
  // doc.addHTML(document.body, function() {
  //   doc.save('html.pdf')
  // http://raw.githack.com/MrRio/jsPDF/master/
  // });
})

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// ROUGH MATERIAL OBJECT
// var example = ['name', qty, price, sku, qty*price]

// var roughMaterial = [
//   rollOfRamBoard() //,
//   // blueTape(),
//   // drywall(),
//   // drywallScrews(),
//   // cornerBeads(),
//   // sheetrock90(),
//   // sheetrock20(),
//   // metalStuds(),
//   // meshTape(),
//   // bundleOfStrapping(),
//   // goldScrews(),
//   // sakrete(),
//   // siliconeClear(),
//   // whiteSilicone(),
//   // customSkimCoatPatchCementUnderlayment(),
//   // flexBondThinsetMortarLFT(),
//   // cementBoardScrews(),
//   // megalyte(),
//   // insulation(),
//   // paperTape(),
//   // doorstop(),
//   // pocketDoorFrame(),
//   // dap(),
//   // fourInchMarbleJamb(),
//   // tuckTape(),
//   // sixMmPoly(),
//   // sheetrockUltraLightMoldTough(),
//   // twox4x8WoodStuds(),
//   // toiletKit(),
//   // robertsTemporaryCarpetProtectionFilm(),
//   // omnigripTileStoneAdhesive(),
//   // sheetrockCeilingSprayTexture(),
//   // duraProAngleStop(),
//   // plPremium295mlWaterProof(),
//   // tubSurroundAdhesive()
// ]

function rollOfRamBoard () {
  var quantity = 0
  const price = 59.99
  if (finalJsonOutput.list0.rowList[0].quantity > 0) {
    quantity = quantity + parseFloat(finalJsonOutput.list0.rowList[0].quantity)
  }
  if (finalJsonOutput.list0.rowList[2].quantity > 0) {
    quantity += parseFloat(finalJsonOutput.list0.rowList[2].quantity)
  }
  return ['Roll of Ram Board ', quantity, price, '#1001063958', quantity * price]
}

function blueTape () {
  var tempArray = rollOfRamBoard()
  const price = 8.98
  return ['Blue Tape 2', tempArray[1], price, '#1000172308', tempArray[1] * price]
}

function drywall () {
  var price = 0
  return ['Drywall(1/2 Inch) ', placeholder3, price, '#1000686028', placeholder3 * price]
}

function drywallScrews () {
var price = 0
return ['Drywall Screws(Individual-Quantity) ', placeholder4, price, '#1001022574', placeholde4r * price]
}

function cornerBeads () {
var price = 0
return ['Corner Beads(90 degree) ', placeholder5, price, '#1000435640', placeholder5 * price]
}

function sheetrock90 () {
var price = 0
return ['Sheetrock 90 ', placeholder6, price,'#1000116303', placeholder6 * price]
}

function sheetrock20 () {
var price = 0
return ['Sheetrock 20 ', placeholder7, price, '#1000414533', placeholder7 * price]
}

function metalStuds () {
var price = 0
return ['Metal Studs 2.5 x 8 ', placeholder8, price, '#1000497123', placeholder8 * price]
}

function meshTape () {
var price = 0
return ['Mesh Tape ', placeholder9, price, '#1000115114', placeholder9 * price]
}

function bundleOfStrapping () {
var price = 0
return ['Bundle of strapping ', placeholderq, price,'', placeholderq * price]
}

function goldScrews () {
var price = 0
return ['Gold Screws (2 and a 1/2 Inch) ', placeholderw, price, '#1000174528', placeholderw * price]
}

function sakrete () {
var price = 0
return ['Sakrete ', placeholdere, price, '#1000109081', placeholdere * price]
}

function siliconeClear () {
var price = 0
return ['Silicone Clear(MONO) ', placeholderr, price, '#1001001931', placeholderr * price]
}

function whiteSilicone () {
  var price = 6.27
  var quantity = 0
  if (finalJsonOutput.list5.rowList[3].quantity > 0) {
    quantity = quantity + parseFloat(finalJsonOutput.list5.rowList[3].quantity)
  }

  return ['White Silicone ', quantity, price, '#1001001923', quantity * price]
}

function customSkimCoatPatchCementUnderlayment () {
var price = 0
return ['Custom - Skim Coat & Patch Cement Underlayment 11.34kg ', placeholdery, price, '#1000668621', placeholdery * price]
}

function flexBondThinsetMortarLFT () {
var price = 0
return ['FlexBond Thinset Mortar - LFT ', placeholderu, price, '#1000797773', placeholderu * price]
}

function cementBoardScrews () {
var price = 0
return ['Cement Board Screws  ', placeholderi, price, sku, placeholderi * price]
}

function megalyte () {
var price = 0
return ['Megalyte  ', placeholdero, price, sku, placeholdero * price]
}

function insulation () {
var price = 0
return ['Insulation(R20/OC16/2x4) ', placeholderp, price, '#1000181137', placeholderp * price]
}

function paperTape () {
var price = 0
return ['Paper Tape ', placeholdera, price, sku, placeholdera * price]
}

function doorstop () {
var price = 0
return ['Door stop  ', placeholders, price, sku, placeholders * price]
}

function pocketDoorFrame () {
var price = 0
return ['Pocket Door Frame ', placeholderd, price, sku, placeholderd * price]
}

function dap () {
var price = 0
return ['Dap ', placeholderf, price, '#1000158964', placeholderf * price]
}

function fourInchMarbleJamb () {
var price = 0
return ['4 Inch Marble Jamb ', placeholderg, price, sku, placeholderg * price]
}

function tuckTape () {
var price = 0
return ['Tuck Tape ', placeholderh, price, sku, placeholderh * price]
}

function sixMmPoly () {
var price = 0
return ['6MM Poly ', placeholderi, price, sku, placeholderj * price]
}

function sheetrockUltraLightMoldTough () {
var price = 0
return ['Sheetrock UltraLight Mold Tough 1/2x4x8 ', placeholderj, price, '#1000152285', placeholderk * price]
}

function twox4x8WoodStuds () {
var price = 0
return ['2x4x8 Wood Studs ', placeholderk, price, '#1000112108', placeholderl * price]
}

function toiletKit () {
var price = 0
return ['Toilet Kit(Wax Ring, Flexible Connector, Bolts) ', placeholderl, price, '#1000112461', placeholderz * price]
}

function robertsTemporaryCarpetProtectionFilm () {
var price = 0
return ['Roberts Temporary Carpet Protection Film ', placeholderm, price, '#1000538143', placeholderx * price]
}

function omnigripTileStoneAdhesive () {
var price = 0
return ['OMNIGRIP TILE & STONE ADHESIVE 3.79L ', placeholdern, price, '#1000160471', placeholderc * price]
}

function sheetrockCeilingSprayTexture () {
var price = 0
return ['Sheetrock Ceiling Spray Texture, Medium Finish, 20 kg Bag ', placeholdero, price, '#1000160957', placeholder * vprice]
}

function duraProAngleStop () {
var price = 0
return ['DuraPro Angle Stop, Quarter Turn, 1/2 inch Sweat X 3/8 inch Compression, Lead Free ', placeholderp, price, '#1001142024', placeholderb * price]
}

function plPremium295mlWaterProof () {
var price = 0
return ['PL Premium 295 mL Waterproof Interior/Exterior Construction Adhesive ', placeholderq, price, '#1000403473', placeholder * nprice]
}

function tubSurroundAdhesive () {
var price = 0
return ['TUB SURROUND ADHESIVE PL700-300ML - 1/4 P ', placeholderr, price, '#1000409508', placeholderm * price]
}

// var finishMaterial = [

//   vinylPlank(),
//   snowfall5GalSG(),
//   snowfall1Gal1GalSG(),
//   classicGrey5GalEGG(),
//   classicGrey1GalSG(),
//   interiorCeilingPaint(),
//   KilzOdorlessGallon(),
//   baseAlexandriaMoulding(),
//   trimAlexandriaMoulding(),
//   doorMasoniteLincolnParkx(),
//   doorMasoniteLincolinParkBiFoldx(),
//   everbiltClosetRod(),
//   everbiltPoleSockets(),
//   passageDoorLever(),
//   privacyDoorLever(),
//   hingePinDoorStop(),
//   springDoorStop(),
//   eurostyleCabinets(),
//   subwayTile(),
//   tileEdge(),
//   vanityx(),
//   bathroomFaucet(),
//   bathtubx(),
//   tubWallKit(),
//   moenShowerRod(),
//   mirrorBevelededge(),
//   toilet(),
//   showerFaucet(),
//   bathAccessoryKit(),
//   rangeHoodSS(),
//   plugs(),
//   switches(),
//   plugCoverPlates(),
//   gFCIOutlet(),
//   smokeDetector(),
//   lightFixture6pk(),
//   flushMounteach4PK(),
//   trackLight(),
//   brushedNickelBathBar(),
//   ledLights(),
//   bathroomexhaustfaneach(),
//   unsandedGrout(),
//   ArboriteCountertop(),
//   endcapKit(),
//   reginoxSSSink(),
//   kitchenFaucet(),
//   cordlessBlindsx(),
//   verticalBlindKitx(),
//   bathroomSink(),
//   refridgeratorx(),
//   rangex(),
//   dishwasherx(),
//   washer(),
//   dryer(),
//   frontLoadWasher(),
//   frontLoadDryer(),
//   stackingKit(),
//   libertyKnob(),
//   tMolding(),
//   showerBasex(),
//   hinge(),
//   showerTile(),
//   breakawayScrews(),
//   millworkCove(),
//   stairNosing(),
//   decora3Gang(),
//   decora2Gang(),
//   quarterRound()
// ]

 function vinylPlank () {
var price = 0
return ['Vinyl Plank - Unifloor Chateau - Imperial (1551-160-01)', placeholder, price, sku, placeholder * price]
}
function snowfall5GalSG () {
var price = 0
return ['BEHR i300 INT S/G WHT 18.5L  - Snowfall OC 118', placeholder, price, '#1000687090', placeholder * price]
}
function snowfall1Gal1GalSG () {
var price = 0
return ['BEHR i300 INT S/G WHT 1 Gal  - Snowfall OC 118', placeholder, price, '#1000687091', placeholder * price]
}
function classicGrey5GalEGG () {
var price = 0
return ['BEHR i300 INT EGG WHT 18.5L - Classic Grey OC-23', placeholder, price, '#1000687099', placeholder * price]
}
function classicGrey1GalSG () {
var price = 0
return ['BEHR i300 INT S/G WHT 1 Gal - Classic Grey OC -23', placeholder, price, '#1000687091', placeholder * price]
}
function interiorCeilingPaint () {
var price = 0
return ['Behr Premium Plus Interior Ceiling Paint - 18.9L', placeholder, price, '#1000402546', placeholder * price]
}
function kilzOdorlessGallon () {
var price = 0
return ['KILZ ODOURLESS GALLON', placeholder, price, '#1000510402', placeholder * price]
}
function baseAlexandriaMoulding () {
var price = 0
return ['Base - Alexandria Moulding 3-1/2 x 8 10PK', placeholder, price, '#1000725900', placeholder * price]
}
function trimAlexandriaMoulding () {
var price = 0
return ['Trim - Alexandria Moulding 1/2-inch x 2-1/2-inch x 8ft. 10PK', placeholder, price, '#1000724386', placeholder * price]
}
function doorMasoniteLincolnParkx () {
    // 'Masonite Lincoln Park 32" RH','Masonite Lincoln Park 30" LH','Masonite Lincoln Park 30" RH','Masonite Lincoln Park 28" LH','Masonite Lincoln Park 28" RH','Masonite Lincoln Park 24" LH','Masonite Lincoln Park 24" RH'
var price = 0
return ['Masonite Lincoln Park 32" LH', placeholder, price, sku, placeholder * price]
}
function doorMasoniteLincolinParkBiFoldx () {
    // 'Masonite Lincolin Park Bi-Fold 30"','Masonite Lincolin Park Bi-Fold 36"'
var price = 0
return ['Masonite Lincolin Park Bi-Fold 24"', placeholder, price, sku, placeholder * price]
}
function everbiltClosetRod () {
var price = 0
return ['Everbilt 96" Chrome Closet Rod', placeholder, price, '#1000797464', placeholder * price]
}
function everbiltPoleSockets () {
var price = 0
return ['Everbilt 1 5/16-inch Heavy Duty Closet Pole Sockets', placeholder, price, '#1000797435', placeholder * price]
}
function passageDoorLever () {
var price = 0
return ['Defiant Olympic Stainless Steel Passage Door Lever (6-Pack)', placeholder, price, '#1001013129', placeholder * price]
}
function privacyDoorLever () {
var price = 0
return ['Defiant Olympic Stainless Steel Privacy Door Lever', placeholder, price, '#1000462243', placeholder * price]
}
function hingePinDoorStop () {
var price = 0
return ['Everbilt Satin Nickel Hinge Pin Door Stop 6PC', placeholder, price, '#1001076030', placeholder * price]
}
function springDoorStop () {
var price = 0
return ['Everbilt 3inch. Satin Nickel Spring Door Stop 6PC', placeholder, price, '#1001076032', placeholder * price]
}
function eurostyleCabinets () {
var price = 0
return ['EUROSTYLE Cabinets - Oxford White', placeholder, price, '~', placeholder * price]
}
function subwayTile () {
var price = 0
return ['ENIGMA - Subway tile Metro warm grey 3" x 6"', placeholder, '#1001072427', sku, placeholder * price]
}
function tileEdge () {
var price = 0
return ['Schluter Bright Clear Tile Edge', placeholder, price, '#1000151559', placeholder * price]
}
function vanityx () {
    // 'Glacier Bay 48 Inch White Hampton Vanity ','GB 24" Peython Vanity ','White Premier Pedestal'
var price = 0
return ['GLACIER BAY  Lancaster 30-inch with Vanity', placeholder, price, '#1001048101', placeholder * price]
}
function bathroomFaucet () {
var price = 0
return ['Moen Zarina 1 H Bathroom Faucet', placeholder, price, sku, placeholder * price]
}
function bathtubx () {
    // 'MAAX Avenue 60-inch Alcove Bathtub in White with Left-Hand Drain'
var price = 0
return ['MAAX Avenue 60-inch Alcove Bathtub in White with Right-Hand Drain', placeholder, price, sku, placeholder * price]
}
function tubWallKit () {
var price = 0
return ['MAAX 59\'\' ALABAMA tub wall kit', placeholder, price, sku, placeholder * price]
}
function moenShowerRod () {
var price = 0
return ['Moen Shower Rod', placeholder, price, sku, placeholder * price]
}
function mirrorBevelededge () {
var price = 0
return ['THD 24 x 36 Beveled edge', placeholder, price, sku, placeholder * price]
}
function toilet () {
var price = 0
return ['KOHLER - Wellworth single flush', placeholder, price, sku, placeholder * price]
}
function showerFaucet () {
var price = 0
return ['Moen Zarina 1-Spray Tub and Shower Faucet in Chrome', placeholder, price, sku, placeholder * price]
}
function bathAccessoryKit () {
var price = 0
return ['Moen Danika Bath Accessory Kit in Chrome (3-Piece)', placeholder, price, sku, placeholder * price]
}
function rangeHoodSS () {
var price = 0
return ['Nutone 30-in 160 CFM Under Cabinet Range Hoo', placeholder, price, sku, placeholder * price]
}
function plugs () {
var price = 0
return ['Decora Plugs 10 pk', placeholder, price, sku, placeholder * price]
}
function switches () {
var price = 0
return ['Decora Switches 10 pk', placeholder, price, sku, placeholder * price]
}



function plugCoverPlates () {
  var price = 4.97
  var quantity = 0
  if (finalJsonOutput.list2.rowList[13].quantity > 0) {
    quantity += (parseFloat(finalJsonOutput.list2.rowList[13].quantity) / 10)
  }
  if (finalJsonOutput.list2.rowList[14].quantity > 0) {
    quantity += (parseFloat(finalJsonOutput.list2.rowList[14].quantity) / 10)
  }

  if (finalJsonOutput.list4.rowList[21].quantity > 0) {
    quantity += (parseFloat(finalJsonOutput.list2.rowList[21].quantity) / 10)
  }
  if (finalJsonOutput.list4.rowList[22].quantity > 0) {
    quantity += (parseFloat(finalJsonOutput.list2.rowList[22].quantity) / 10)
  }

  return ['Decora Plug Cover Plates', quantity, price, '#1000126191', quantity * price]
}





function gFCIOutlet () {
var price = 0
return ['GFCI Outlet', placeholder, price, sku, placeholder * price]
}
function smokeDetector () {
var price = 0
return ['Smoke Detector', placeholder, price, sku, placeholder * price]
}
function lightFixture6Pack () {
var price = 0
return ['Commercial Electric 2-Light 60W Brushed Nickel & Alabaster Glass', placeholder, price, sku, placeholder * price]
}
function flushMounteach4PK () {
var price = 0
return ['Commercial Electric Alabaster Glass 4PK Flush Mount', placeholder, price, sku, placeholder * price]
}
function trackLight () {
var price = 0
return ['Hampton Bay 3-Light Semi-Flushmount Track Light Fixture in Brushed Nickel', placeholder, price, sku, placeholder * price]
}
function brushedNickelBathBar () {
var price = 0
return ['Commercial Electric 3-Light Brushed Nickel Bath Bar', placeholder, price, sku, placeholder * price]
}
function ledLights () {
var price = 0
return ['Ecosmart 60W Equivalent Daylight 5000K LED Lights', placeholder, price, sku, placeholder * price]
}
function bathroomexhaustfaneach () {
var price = 0
return ['Nutone 70cfm bathroom exhaust fan', placeholder, price, sku, placeholder * price]
}
function unsandedGrout () {
var price = 0
return ['#165 Delorean Grey 10lb Unsanded Grout', placeholder, price, sku, placeholder * price]
}
function ArboriteCountertop () {
    // '8FT ELEMENTAL CONCRETE COUNTERTOP','6FT ELEMENTAL CONCRETE COUNTERTOP','4FT ELEMENTAL CONCRETE COUNTERTOP'
var price = 0
return ['10FT ELEMENTAL CONCRETE COUNTERTOP', placeholder, price, sku, placeholder * price]
}
function endcapKit () {
var price = 0
return ['END CAP KIT 8830-58 ELEMENTAL CONC', placeholder, price, sku, placeholder * price]
}
function reginoxSSSink () {
var price = 0
return ['Reginox SS sink & half, 3 hole', placeholder, price, sku, placeholder * price]
}
function kitchenFaucet  () {
var price = 0
return ['MOEN TORRANCE 1H KITCHEN FAUCET CHROME', placeholder, price, sku, placeholder * price]
}



function cordlessBlindsx () {
  //'HDC 2.5 CORDLESS FAUXWD BLD 18x72 WH','HDC 2.5 CORDLESS FAUXWD BLD 24x72 WH','HDC 2.5 CORDLESS FAUXWD BLD 30x72 WH','HDC 2.5 CORDLESS FAUXWD BLD 36x72 WH','HDC 2.5 CORDLESS FAUXWD BLD 42x72 WH','HDC 2.5 CORDLESS FAUXWD BLD 48x72 WH','HDC 2.5 CORDLESS FAUXWD BLD 60x48 WH','HDC 2.5 CORDLESS FAUXWD BLD 60x72 WH','HDC 2.5 CORDLESS FAUXWD BLD 72x72 WH','HDC 2.5 CORDLESS FAUXWD BLD 36x48 WH'
  
  ////// make a map from name -> sku
  var price = 0
  var quantity = 0
  var name = 'HDC 2.5 CORDLESS FAUXWD BLD'

  if (finalJsonOutput.list2.rowList[0].quantity > 0) {
    quantity += parseInt(finalJsonOutput.list2.rowList[0].quantity)
    name += ' ' + finalJsonOutput.list2.rowList[0].size + ' ' + finalJsonOutput.list2.rowList[0].variant
  }

  return [name, quantity, price, '343243242', quantity * price]
}



function verticalBlindKitx () {
    // 'HB 3.5" 66x84 Vertical Blind Kit White'
var price = 0
return ['HB 3.5" 78x84 Vertical Blind Kit White', placeholder, price, sku, placeholder * price]
}
function bathroomSink () {
var price = 0
return ['GB Oval drop in Sink', placeholder, price, sku, placeholder * price]
}
function refridgeratorx () {
    // 'White Refrigerator 66 5/8H x 29 1/2W x 30 15/16D (in.)','White Refrigerator 61 3/4H x 28W x 31 5/8D (in.)','Stainless Steel Refridgerator 66 5/8H x 29 1/2W x 30 15/16D (in.)'
var price = 0
return ['White Refrigerator 59 7/8H x 24W x 28 5/8D (in.)', placeholder, price, sku, placeholder * price]
}
function rangex () {
    // 'White Range 30W x 46 1/2H x 29 7/8D (in.)','Stainless Steel Range 30W x 46 7/8H x 26 1/4D (in.)'
var price = 0
return ['White Range 24W x 42 1/8H x 26 5/8D (in.)', placeholder, price, sku, placeholder * price]
}
function dishwasherx () {
    // 'White Dishwasher 32 1/2H x 23 1/2W x 22 13/32D (in.)','Stainless Steel Dishwasher 32 1/2H x 23 1/2W x 22 13/32D (in.)'
var price = 0
return ['White Dishwasher 32 1/2H x 17 19/32W x 22 13/32D (in.)', placeholder, price, sku, placeholder * price]
}
function washer () {
var price = 0
return ['Washer 43 1/2H x 26 7/8W x 26 5/8D (in.)', placeholder, price, sku, placeholder * price]
}
function dryer () {
var price = 0
return ['Dryer 42 3/5H x 26 7/8W x 29 1/2D (in.)', placeholder, price, sku, placeholder * price]
}
function frontLoadWasher () {
var price = 0
return ['Front Load Washer 33 5/16H x 23 1/2W x 26 5/8D (in.)', placeholder, price, sku, placeholder * price]
}
function frontLoadDryer () {
var price = 0
return ['Front Load Dryer 33 3/8H x 23 1/2W x 25 11/16D (in.)', placeholder, price, sku, placeholder * price]
}
function stackingKit () {
var price = 0
return ['Stacking Kit fo 24" Front Load Laundry', placeholder, price, sku, placeholder * price]
}
function libertyKnob () {
var price = 0
return ['Liberty 1-1/4 in. Garrett Knob 10PK', placeholder, price, sku, placeholder * price]
}
function tMolding () {
var price = 0
return ['Kaindl Silver Oak 7/16-inch Thick x 1 3/4-inch W x 72-inch L T-Molding', placeholder, price, sku, placeholder * price]
}
function showerBasex () {
    // 'MAAX Olympia 60-inch x 32-inch Left-Drain Shower Base in White','GLACIER BAY 48 inch x 32 inch Acrylic Shower Base with Left Concealed Drain','GLACIER BAY 48 inch x 32 inch Acrylic Shower Base with Right Concealed Drain'
var price = 0
return ['MAAX Olympia 60-inch x 32-inch Right-Drain Shower Base in White', placeholder, price, sku, placeholder * price]
}
function hinge () {
var price = 0
return ['Richelieu Semi-Concealed Self-Closing Hinge - Brushed Nickel 20 Pack', placeholder, price, sku, placeholder * price]
}
function showerTile () {
var price = 0
return ['Enigma 12-inch x 24 Gladstone Grey Rectified', placeholder, price, sku, placeholder * price]
}
function breakawayScrews () {
var price = 0
return ['Richelieu Hardware 6-Pack, Break-Away Zinc Plated Machine screw ', placeholder, price, sku, placeholder * price]
}
function millworkCove () {
var price = 0
return ['R2i Millwork Cove - 3/4 In. x 3/4 In. x 8 Ft.', placeholder, price, sku, placeholder * price]
}
function stairNosing () {
var price = 0
return ['Shur Trim Stair Nosing Floor Moulding, Hammered Silver - 1-5/8 Inch', placeholder, price, sku, placeholder * price]
}
function decora3Gang () {
var price = 0
return ['Leviton Decora wall plate 3 Gang, White', placeholder, price, sku, placeholder * price]
}
function decora2Gang () {
var price = 0
return ['Leviton Decora wall plate 2 Gang, White', placeholder, price, sku, placeholder * price]
}
function quarterRound () {
var price = 0
return ['Quarter Round (In SQFT) - Alexandria Molding', placeholder, price, sku, placeholder * price]
}
