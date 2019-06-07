
//var testObject = ['Words', Quantity: user-input, Price: Int, Size [], Variant [], Variable ]
//repair/replace


var bedrooms = [
    "Bedroom(s)",
    ['Replace Blinds', qty, 105, null, null, false],
    ['Replace Door - Masonite Lincoln Park Bi-Fold', qty, 150, ['24"','30"','36"'], null, false],
    ['Replace Bypass Door - White VERANDA', qty, 200, ['72', '48'], null, false],
    ['Paint Bi-folding Door', qty, 105, null, null, false],
    ['Paint Baseboard or Trim', qty, 2.1, null, null, false],
    ['Paint Walls (SQFT)', qty, 3.5, null, null, false],
    ['Patch and Replace Stucco Ceiling', qty, 400, null, null, false],
    ['Replace Ceiling Fan', qty, 105, null, null, false],
    ['Replace Closet Rod/Rack', qty, 105, null, null, false],
    ['Replace Closet/Drawer Knobs	', qty, 35, null, null, false],
    ['Replace Doorstop/Hinges/Closer', qty, 28, null, null, false],
    ['Flooring', qty, ['custom', 2.1], null, null, true],
    ['Replace Light Fixtures', qty, 42, null, null, false],
    ['Replace Privacy Lockset', qty, 35, null, null, false],
    ['Smoke alarm/CO2 Alarm', qty, 84, null, null, false],
    ['Replace Baseboard (LNFT)', qty, 4.2, null, null, false],
    ['Walls', qty, [8.4, 32], null, null, true],
    ['Replace Switches', qty, 25, null, null, false],
    ['Replace Receptacle', qty, 25, null, null, false],
    ['Replace Wall Plates for Electrical', qty, 35, null, null, false],
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
