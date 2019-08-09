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
  ['Boiler Pan', qty, 'custom', null, null, vrb],
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
  ['Replace Closet/Drawer Knobs	', qty, 35, null, null, false],
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
  ['Flooring', qty, ['custom', 2.1], null, null, false],
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
var multiplierList = []
function createHTML () {
  for (var i = 0; i < sectionsList.length; i++) {
    var newTitle = document.createElement('h2')
    newTitle.innerHTML = sectionsList[i][0]
    var newDiv = document.createElement('div')
    $(newDiv).addClass('content-wrap')
    console.log(' **** ' + sectionsList[i][0])

    for (var j = 1; j < sectionsList[i].length; j++) {
      var newDivContainer = document.createElement('div')
      $(newDivContainer).addClass('al-grid')

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
      if (Array.isArray(sectionsList[i][j][2]) || sectionsList[i][j][2] === 'custom') {
        // multiplierList.push(parseFloat(sectionsList[i][j][2]))
        console.log(sectionsList[i][j][2])
        customValue = document.createElement('input')
        customValue.setAttribute('name', 'al-input-price')
        customValue.setAttribute('placeholder', 'Input Price')
        $(customValue).addClass('grid-col')
        // multiplierList.push(parseFloat(sectionsList[i][j][2][1]))
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

var quantityList = []
var value = []
var alInput = document.getElementsByName('al-input')
quantityList.length = multiplierList.length
quantityList.fill(0)
function doAddition (zValue) {
  if (parseFloat(alInput[zValue].value)) {
    quantityList[zValue] = parseFloat(alInput[zValue].value)
  } else {
    return null
  }
  var tempNum = 0

  for (let x = 0; x < multiplierList.length; x++) {
    value[x] = (quantityList[x] * multiplierList[x])
    tempNum += parseFloat(value[x])
  }
  updateFinal(tempNum)
}
// console.log(multiplierList)
// console.log(quantityList)

setTimeout(function () {
  setInterval(
    function addValues () {
      for (let z = 0; z < alInput.length; z++) {
        alInput[z].addEventListener('change', doAddition(z))
      }
    }, 5000)
}, 400)

// ROUGH MATERIAL OBJECT
// var example = ['name', qty, price, sku, qty*price]

var roughMaterial = [
  rollOfRamBoard(),
  blueTape(),
  drywall(),
  drywallScrews(),
  cornerBeads(),
  sheetrock90(),
  sheetrock20(),
  metalStuds(),
  meshTape(),
  bundleOfStrapping(),
  goldScrews(),
  sakrete(),
  siliconeClear(),
  whiteSilicone(),
  customSkimCoatPatchCementUnderlayment(),
  flexBondThinsetMortarLFT(),
  cementBoardScrews(),
  megalyte(),
  insulation(),
  paperTape(),
  doorstop(),
  pocketDoorFrame(),
  dap(),
  fourInchMarbleJamb(),
  tuckTape(),
  sixMmPoly(),
  sheetrockUltraLightMoldTough(),
  twox4x8WoodStuds(),
  toiletKit(),
  robertsTemporaryCarpetProtectionFilm(),
  omnigripTileStoneAdhesive(),
  sheetrockCeilingSprayTexture(),
  duraProAngleStop(),
  plPremium295mlWaterProof(),
  tubSurroundAdhesive()
]

function rollOfRamBoard () {

  return ['Roll of Ram Board ', placeholder, price, sku, placeholder * price]
}
function blueTape () {
  return ['Blue Tape 2', placeholder2, price, sku, placeholder2 * price]
}

function drywall () {
  return ['Drywall(1/2 Inch) ', placeholder3, price, sku, placeholder3 * price]
}

function drywallScrews () {
  return ['Drywall Screws(Individual-Quantity) ', placeholder4, price, sku, placeholde4r * price]
}

function cornerBeads () {
  return ['Corner Beads(90 degree) ', placeholder5, price, sku, placeholder5 * price]
}

function sheetrock90 () {
  return ['Sheetrock 90 ', placeholder6, price, sku, placeholder6 * price]
}

function sheetrock20 () {
  return ['Sheetrock 20 ', placeholder7, price, sku, placeholder7 * price]
}

function metalStuds () {
  return ['Metal Studs 2.5 x 8 ', placeholder8, price, sku, placeholder8 * price]
}

function meshTape () {
  return ['Mesh Tape ', placeholder9, price, sku, placeholder9 * price]
}

function bundleOfStrapping () {
  return ['Bundle of strapping ', placeholderq, price, sku, placeholderq * price]
}

function goldScrews () {
  return ['Gold Screws (2 and a 1/2 Inch) ', placeholderw, price, sku, placeholderw * price]
}

function sakrete () {
  return ['Sakrete ', placeholdere, price, sku, placeholdere * price]
}

function siliconeClear () {
  return ['Silicone Clear(MONO) ', placeholderr, price, sku, placeholderr * price]
}

function whiteSilicone () {
  return ['White Silicone ', placeholdert, price, sku, placeholdert * price]
}

function customSkimCoatPatchCementUnderlayment () {
  return ['Custom - Skim Coat & Patch Cement Underlayment 11.34kg ', placeholdery, price, sku, placeholdery * price]
}

function flexBondThinsetMortarLFT () {
  return ['FlexBond Thinset Mortar - LFT ', placeholderu, price, sku, placeholderu * price]
}

function cementBoardScrews () {
  return ['Cement Board Screws  ', placeholderi, price, sku, placeholderi * price]
}

function megalyte () {
  return ['Megalyte  ', placeholdero, price, sku, placeholdero * price]
}

function insulation () {
  return ['Insulation(R20/OC16/2x4) ', placeholderp, price, sku, placeholderp * price]
}

function paperTape () {
  return ['Paper Tape ', placeholdera, price, sku, placeholdera * price]
}

function doorstop () {
  return ['Door stop  ', placeholders, price, sku, placeholders * price]
}

function pocketDoorFrame () {  
  return ['Pocket Door Frame ', placeholderd, price, sku, placeholderd * price]
}

function dap () {
  return ['Dap ', placeholderf, price, sku, placeholderf * price]
}

function fourInchMarbleJamb () {
  return ['4 Inch Marble Jamb ', placeholderg, price, sku, placeholderg * price]
}

function tuckTape () {
  return ['Tuck Tape ', placeholderh, price, sku, placeholderh * price]
}

function sixMmPoly () {
  return ['6MM Poly ', placeholderi, price, sku, placeholderj * price]
}

function sheetrockUltraLightMoldTough () {
  return ['Sheetrock UltraLight Mold Tough 1/2x4x8 ', placeholderj, price, sku, placeholderk * price]
}

function twox4x8WoodStuds () {
  return ['2x4x8 Wood Studs ', placeholderk, price, sku, placeholderl * price]
}

function toiletKit () {
  return ['Toilet Kit(Wax Ring, Flexible Connector, Bolts) ', placeholderl, price, sku, placeholderz * price]
}

function robertsTemporaryCarpetProtectionFilm () {
  return ['Roberts Temporary Carpet Protection Film ', placeholderm, price, sku, placeholderx * price]
}

function omnigripTileStoneAdhesive () {
  return ['OMNIGRIP TILE & STONE ADHESIVE 3.79L ', placeholdern, price, sku, placeholderc * price]
}

function sheetrockCeilingSprayTexture () {
  return ['Sheetrock Ceiling Spray Texture, Medium Finish, 20 kg Bag ', placeholdero, price, sku, placeholder * vprice]
}

function duraProAngleStop () {
  return ['DuraPro Angle Stop, Quarter Turn, 1/2 inch Sweat X 3/8 inch Compression, Lead Free ', placeholderp, price, sku, placeholderb * price]
}

function plPremium295mlWaterProof () {
  return ['PL Premium 295 mL Waterproof Interior/Exterior Construction Adhesive ', placeholderq, price, sku, placeholder * nprice]
}

function tubSurroundAdhesive () {
  return ['TUB SURROUND ADHESIVE PL700-300ML - 1/4 P ', placeholderr, price, sku, placeholderm * price]
}
