// var rowObject = [ 'Words', Quantity, Price, Size, Variant, variable]
var qty = 0
var vrb = true
var preConstruction = [
    'Pre Construction Prep',
    ['Protect Flooring With RAM board', qty,600, null, null, false],
    ['Clean Suite - Move in ready condition', qty,550, null, null, false],
    ['Cover Stairs - with RAM board', qty,100, null, null, false],
    ['Cover Hallways/Carpet Stairs - Roberts Carpet Protection Film', qty,190, null, null, false]
]

var demolition = [
    'Demolition',
    ['Classic Suite Demolition', qty,1200, null, null, false],
    ['Semi-Premium Demolition', qty,1800, null, null, false],
    ['Premium Suite Demolition', qty,2300, null, null, false],
]

var livingRoom = [
    'Living Room',
    ['2.5 Inch Cordless Blinds', qty,105, ['72x48"','18x72"','24x72"','30x72"','36x72"','42x72"','48x72"','60x48"','60x72"','72x72"','36x48"'], ['Esspresso','White'], false],
    ['Vertical Blinds', qty,105, ['78x84"','66x84"'], ['White'], false],
    ['Balcony Door', qty, [200,115], null, null,vrb],
    ['Replace Ceiling Fan', qty,140, null, null, false],
    ['Replace Crown Molding', qty,14, null, null, false],
    ['Flooring', qty, [2.1,"custom"], null, null,vrb],
    ['Replace Light Fixture', qty,42, null, null, false],
    ['Replace Stairs', qty,140, null, null, false],
    ['Replace Smoke Alarm or CO2 Alarm', qty, 84, null, null, false]
    ['Replace Baseboard', qty,4.2, null, null, false],
    ['Replace Door Trim', qty,4.2, null, null, false],
    ['Replace Receptacles', qty,35, null, null, false],
    ['Replace Switches', qty,35, null, null, false],
    ['Walls', qty, [35,8.4], null, null,vrb],
    ['Replace Window Screens', qty,28, null, null, false],
    ['Screw Down Flooring', qty,0.8, null, null, false],
    ['Paint Doors', qty,100, null, null, false],
    ['S Paint Walls (SQFT)', qty,3.5, null, null, false],
    ['Paint Crown Molding (LNFT)', qty,4.2, null, null, false],
    ['Paint Baseboard or Trim', qty,2.1, null, null, false],
    ['Paint Ceiling - ENTIRE UNIT', qty,1, null, null, false],
    ['Paint Ceiling - PER ROOM', qty,1000, null, null, false],
    ['Patch and Replace Stucco Ceiling', qty, [1000,400], null, null,vrb],
    ['Replace Door', qty,200, ['16"','32"','30"','28"','24"'], ['Left Handed','Right Handed'], false],
    ['Replace Bi-fold Door', qty, 150, ['24"','30"','36"'], null, false]
]

var kitchen = [
    'Kitchen',
    ['Angle Stop', qty,75, null, null,vrb],
    ['Boiler Pan', qty,'custom', null, null,vrb],
    ['Cabinets and Drawer Pulls', qty, [20,'custom'], null, null,vrb],
    ['Replace Cabinet Door Hinges', qty,350, null, null, false],
    ['Replace Cabinets and Drawers', qty, [1400,1800,2100], ['Small','Medium','Large'], null, false],
    ['Paint Cabinets and Drawers', qty, 980, null, null, false],
    ['Paint Crown Molding (LNFT)', qty, 4.2, null, null, false],
    ['Paint Baseboard (LNFT)', qty, 2.1, null, null, false],
    ['Paint Trim (LNFT)', qty, 2.1, null, null, false],
    ['Paint Walls (SQFT)', qty, 3.5, null, null, false],	
    ['Paint Doors', qty,100, null, null, false],
    ['Install Countertop', qty,420, ['10\'','8\'','6\'','4\''], null, false],
    ['Miter Kitchen Countertop', qty,220, null, null, false],
    ['Replace Faucet', qty,70, null, null, false],
    ['Flooring', qty, [2.1,'custom'], null, null,vrb],
    ['Replace Light Fixture', qty,42, null, null, false],
    ['Replace GFCI', qty,105, null, null, false],
    ['Replace Microwave', qty,70, null, null, false],
    ['Replace Range Hood', qty,210, null, null, false],
    ['Install Charcoal Filtered Range Hood', qty,450, null, null, false],
    ['Replace Sink', qty,420, null, null, false],
    ['Replace Sink and Faucet', qty,420, ['Glacier Bay','Moen'], null, false],
    ['Replace Baseboard', qty,4.2, null, null, false],
    ['Replace Door Trim', qty,4.2, null, null, false],
    ['Walls', qty, [35,8.4], ['Repair','Replace'], null,vrb],
    ['Replace Ceiling', qty,5, null, null, false],
    ['Kitchen Backsplash Install', qty,22, null, null, false],
    ['Repair Dishwasher', qty,75, null, null, false],
    ['Refridgerator', qty,105, ['White 59 7/8H x 24W x 28 5/8D (in.)','White 66 5/8H x 29 1/2W x 30 15/16D (in.)','White 61 3/4H x 28W x 31 5/8D (in.)','Stainless Steel 66 5/8H x 29 1/2W x 30 15/16D (in.)'], null, false],
    ['Stove', qty,105, ['White 24W x 42 1/8H x 26 5/8D (in.)','White 30W x 46 1/2H x 29 7/8D (in.)','Stainless Steel 30W x 46 7/8H x 26 1/4D (in.)'], null, false],
    ['Dishwasher', qty,640, ['White 32 1/2H x 17 19/32W x 22 13/32D (in.)','White 32 1/2H x 23 1/2W x 22 13/32D (in.)','Stainless Steel 32 1/2H x 23 1/2W x 22 13/32D (in.)'], null, false]
]

var bedrooms = [
    "Bedroom(s)",
    ['Replace Blinds', qty, 105, null, null, false],
    ['Replace Door - Masonite Lincoln Park Bi-Fold', qty, 150, ['24"','30"','36"'], null, false],
    ['Replace Bypass Door - White VERANDA', qty, 200, ['72', '48'], null, false],
    ['Paint Doors', qty,100, null, null, false],
    // ['Paint Bi-folding Door', qty, 105, null, null, false],
    ['Paint Baseboard or Trim', qty, 2.1, null, null, false],
    ['Paint Walls (SQFT)', qty, 3.5, null, null, false],
    ['Patch and Replace Stucco Ceiling', qty, 400, null, null, false],
    ['Replace Ceiling Fan', qty, 105, null, null, false],
    ['Replace Closet Rod/Rack', qty, 105, null, null, false],
    ['Replace Closet/Drawer Knobs	', qty, 35, null, null, false],
    ['Replace Crown Molding', qty, 14, null, null, false]
    ['Replace Doorstop/Hinges/Closer', qty, 28, null, null, false],
    ['Flooring', qty, ['custom', 2.1], null, null, true],
    ['Replace Light Fixtures', qty, 42, null, null, false],
    ['Replace Privacy Lockset', qty, 35, null, null, false],
    ['Smoke alarm/CO2 Alarm', qty, 84, null, null, false],
    ['Replace Baseboard (LNFT)', qty, 4.2, null, null, false],
    ['Replace Trim (LNFT)', qty, 4.2, null, null, false],
    ['Walls', qty, [8.4, 35], null, null, true],
    ['Replace Switches', qty, 25, null, null, false],
    ['Replace Receptacle', qty, 25, null, null, false],
    // ['Replace Wall Plates for Electrical', qty, 35, null, null, false],
    ['Repair Window Screens', qty, 28, null, null, false]
]

var bathrooms = [
    'Bathroom(s)',
    ['Tub to Shower Conversion - Tile and Acrylic Shower Base', qty, 2500, null, null, false],
    ['Replace Door - Masonite Lincoln Park', qty, 200, ['32"','30"','28"','24"'], ['LH', 'RH'], false],
    ['Replace Angle Stop', qty, 75, null, null, false],
    ['Replace Greenboard, Acrylic Shower Walls, Bathtub, and Shower Faucet', qty, 1400, null, null, false],
    ['Replace Hardware - End Brackets/ Soap Holder/ Toilet Paper Holder(s)', qty, 105, null, null, false],
    ['Cabinets and Drawer Pulls', qty, [70, 210], null, null, true],
    ['Replace Cabinet Door Hinges', qty, 210, null, null, false],
    ['Paint Cabinets and Drawers', qty, 350, null, null, false],
    ['Pain Medicine Cabinet', qty, 140, null, null, false],
    ['Paint Baseboard or Trim', qty, 2.1, null, null, false],
    ['Paint Walls (SQFT)', qty, 3.5, null, null, false],
    ['Paint Doors', qty,100, null, null, false],
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
    ['Replace Sink/Vanity', qty, 575, ['24"', '30"', '48"', 'Pedestal Sink'], null, false],
    ['Replace Toilet', qty, 210, null, null, false],
    ['Replace Tub', qty, 1540, null, ['LH','RH'], false],
    ['Replace Door Trim', qty, 4.2, null, null, false],
    ['Replace Baseboard', qty, 4.2, null, null, false],
    ['Replace Walls (LNFT)', qty, [8.4, 32], null, null, true]
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
    ['Inspect Garage Entry Door	', qty, 0, null, null, false],
    ['Inspect Water Heater ', qty, 0, null, null, false],
    ['Replace Air Filter', qty, 0, null, null, false],
    ['Replace Light Bulbs ', qty, 0, null, null, false],
    ['Replace Portion of Ceiling in Bedroom and Living Room & Paint Ceilings Entire Unit', qty, 0, null, null, false],
    ['Washer 43 1/2H x 26 7/8W x 26 5/8D (in.)', qty, 105, null, false],
    ['Dryer 42 3/5H x 26 7/8W x 29 1/2D (in.)', qty, 105, null, false],
    ['Front Load Washer 33 5/16H x 23 1/2W x 26 5/8D (in.)', qty, 105, null, false],
    ['Front Load Dryer 33 3/8H x 23 1/2W x 25 11/16D (in.)', qty, 105, null, false]
]

const sectionsList = [preConstruction, demolition, livingRoom, kitchen, bedrooms, bathrooms, additionalItems]



for (var i = 0; i < sectionsList.length; i++) {
    for (var j = 0; j < sectionList[i].length; j++) {
        for (var z = 0; z < sectionList[i][j].length; z++) {
        console.log(sectionsList[i][j][z])
        }
    }
}