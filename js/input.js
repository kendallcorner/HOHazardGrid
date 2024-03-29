var inputdata = [
   {  Node: "Feed",
      Deviation: null,
      Cause: null,
      Consequences: null,
      __children: [

      {
         Deviation: "Low/ No Flow",
         Cause: null,
         Consequence: null,
         __children: [

     {
       "Node": "Feed",
       "Deviation": "Low / No flow",
       "Cause": "3.1.1. V150 Plugged",
       "Consequence": "3.1.1. See Low/No flow issue in previous node",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Low / No flow",
       "Cause": "4.1.1. V150 Plugged",
       "Consequence": "3.1.2. No hazardous consequences this node",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Low / No flow",
       "Cause": "3.1.2. Manual valve before Drain-all closed or Drain-all fails to open",
       "Consequence": "3.1.3. Liquid build up in drains and/or vessels; potential liquid to sulfa treat vessels causing operational issues. Potential to send liquid downstream causing operational issues. No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Low / No flow",
       "Cause": "3.1.3. Incorrect valve line up (HV-151,161,155,165,156,166)",
       "Consequence": "3.1.4. Blocked in both sulfa treat vessels. See Low flow previous node.",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "3.1.1. Lock out/ Tag out for maintenance and startup and operating procedures for normal operations.",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Low / No flow",
       "Cause": "4.1.3. Incorrect valve line up (HV-151,161,155,165,156,166)",
       "Consequence": "3.1.5. Only sending gas through one Sulfa treat vessel. Operational issue. No hazardous consequences.",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Low / No flow",
       "Cause": "5.1.3. Incorrect valve line up (HV-151,161,155,165,156,166)",
       "Consequence": "3.1.7. Potential to bypass both Sulfa treat vessels sending untreated process gas downstream; Potential hydrogen sulfide in areas not expected. Secondary failure could cause hydrogen sulfide release.",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Low / No flow",
       "Cause": "3.1.4. Sulfa treat vessel(s) plugged",
       "Consequence": "3.1.4. Blocked in both sulfa treat vessels. See Low flow previous node.",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Low / No flow",
       "Cause": "3.1.5. HV-154/164 open when not required",
       "Consequence": "3.1.6. Sending gas to the flare. Loss of production. No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     }]},

      {
         Deviation: "High Flow",
         Cause: null,
         Consequence: null,
         __children: [
     {
       "Node": "Feed",
       "Deviation": "High flow",
       "Cause": "3.2.1. High flow from Feed Compressor node",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     }]},

      {
         Deviation: "Low/ No Flow",
         Cause: null,
         Consequence: null,
         __children: [
     {
       "Node": "Feed",
       "Deviation": "Reverse flow",
       "Cause": "3.3.1. No causes identified",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Misdirected flow",
       "Cause": "3.4.1. HV-160 open when not required",
       "Consequence": "3.4.1. Potential to send less treated gas downstream; operational issue, no hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Misdirected flow",
       "Cause": "3.4.2. More than one valve from K, J, and G drain lines is open at a time",
       "Consequence": "3.4.2. Potential to equalize pressure between headers; operational issue. No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "High pressure",
       "Cause": "3.5.1. PCV-207A closed when required open",
       "Consequence": "3.5.2. No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "High pressure",
       "Cause": "3.5.2. Sudden, high pressure during startup from a surge",
       "Consequence": "3.5.1. Hammering of the bed; operational issues. No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Low pressure",
       "Cause": "3.6.1. PCV-207A open when not required",
       "Consequence": "3.6.1. Operational issue; No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "High temperature",
       "Cause": "3.7.1. High gas from previous node",
       "Consequence": "3.7.1. Potential performance issues; No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Low temperature",
       "Cause": "3.8.1. Low temperature from previous node",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "High Level",
       "Cause": "3.9.1. Clogged line on KO pots",
       "Consequence": "3.9.1. Water build up with potential carry over to Sulfa treat vessels; operational issue, no hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "High Level",
       "Cause": "3.9.2. Liquid carry over from previous node",
       "Consequence": "3.9.1. Water build up with potential carry over to Sulfa treat vessels; operational issue, no hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Low Level",
       "Cause": "3.10.1. Gas breakthrough into codensate header through open drain-all",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Deviation During Startup",
       "Cause": "3.11.1. No new issues identified",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Deviation During Shutdown",
       "Cause": "3.12.1. No new issues identified",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Deviation During Maintenance",
       "Cause": "3.13.1. No new issues identified",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Contaminants / Analysis",
       "Cause": "3.14.1. Oil carry over from previous node",
       "Consequence": "3.14.1. Operational issues, no hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Materials of Construction / Corrosion",
       "Cause": "3.15.1. Carbon steel vessels in service with moisture, carbon dioxide and acidic environments",
       "Consequence": "3.15.1. Pinhole leaks, Vessel corrosion, Pitting and mechanical integrity issues; Potential for release of flammable material with hydrogen sulfide, fire, explosion and personnel injury or fatality",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "3.15.1. Epoxy coating\n3.15.2. Vessel inspections yearly and mechanical integrity.",
       "ML": 3,
       "Actions": "Rec 2. Replace with Stainless Steel vessels"
     },
     {
       "Node": "Feed",
       "Deviation": "Erosion",
       "Cause": "3.16.1. Sulfa treat media entrained in gas",
       "Consequence": "3.16.1. Pinhole leaks, Pitting and mechanical integrity issues; Potential for release of flammable material, fire, explosion and personnel injury or fatality",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "3.16.1. Vessel inspections yearly and mechanical integrity.",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Loss of containment",
       "Cause": "3.17.1. PSVs release to atmosphere",
       "Consequence": "3.17.1. PSVs release to safe location greater than 8 ft. No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Feed",
       "Deviation": "Loss of containment",
       "Cause": "3.17.2. See Erosion/Corrosion this node",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     }]}]
  },
  {
   Node: "Purification",
   __children: [
     {
       "Node": "Purification",
       "Deviation": "Low / No flow",
       "Cause": "3.1.1. V150 Plugged",
       "Consequence": "3.1.1. See Low/No flow issue in previous node",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Low / No flow",
       "Cause": "4.1.1. V150 Plugged",
       "Consequence": "3.1.2. No hazardous consequences this node",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Low / No flow",
       "Cause": "3.1.2. Manual valve before Drain-all closed or Drain-all fails to open",
       "Consequence": "3.1.3. Liquid build up in drains and/or vessels; potential liquid to sulfa treat vessels causing operational issues. Potential to send liquid downstream causing operational issues. No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Low / No flow",
       "Cause": "3.1.3. Incorrect valve line up (HV-151,161,155,165,156,166)",
       "Consequence": "3.1.4. Blocked in both sulfa treat vessels. See Low flow previous node.",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "3.1.1. Lock out/ Tag out for maintenance and startup and operating procedures for normal operations.",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Low / No flow",
       "Cause": "4.1.3. Incorrect valve line up (HV-151,161,155,165,156,166)",
       "Consequence": "3.1.5. Only sending gas through one Sulfa treat vessel. Operational issue. No hazardous consequences.",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Low / No flow",
       "Cause": "5.1.3. Incorrect valve line up (HV-151,161,155,165,156,166)",
       "Consequence": "3.1.7. Potential to bypass both Sulfa treat vessels sending untreated process gas downstream; Potential hydrogen sulfide in areas not expected. Secondary failure could cause hydrogen sulfide release.",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Low / No flow",
       "Cause": "3.1.4. Sulfa treat vessel(s) plugged",
       "Consequence": "3.1.4. Blocked in both sulfa treat vessels. See Low flow previous node.",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Low / No flow",
       "Cause": "3.1.5. HV-154/164 open when not required",
       "Consequence": "3.1.6. Sending gas to the flare. Loss of production. No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "High flow",
       "Cause": "3.2.1. High flow from Feed Compressor node",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Reverse flow",
       "Cause": "3.3.1. No causes identified",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Misdirected flow",
       "Cause": "3.4.1. HV-160 open when not required",
       "Consequence": "3.4.1. Potential to send less treated gas downstream; operational issue, no hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Misdirected flow",
       "Cause": "3.4.2. More than one valve from K, J, and G drain lines is open at a time",
       "Consequence": "3.4.2. Potential to equalize pressure between headers; operational issue. No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "High pressure",
       "Cause": "3.5.1. PCV-207A closed when required open",
       "Consequence": "3.5.2. No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "High pressure",
       "Cause": "3.5.2. Sudden, high pressure during startup from a surge",
       "Consequence": "3.5.1. Hammering of the bed; operational issues. No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Low pressure",
       "Cause": "3.6.1. PCV-207A open when not required",
       "Consequence": "3.6.1. Operational issue; No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "High temperature",
       "Cause": "3.7.1. High gas from previous node",
       "Consequence": "3.7.1. Potential performance issues; No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Low temperature",
       "Cause": "3.8.1. Low temperature from previous node",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "High Level",
       "Cause": "3.9.1. Clogged line on KO pots",
       "Consequence": "3.9.1. Water build up with potential carry over to Sulfa treat vessels; operational issue, no hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "High Level",
       "Cause": "3.9.2. Liquid carry over from previous node",
       "Consequence": "3.9.1. Water build up with potential carry over to Sulfa treat vessels; operational issue, no hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Low Level",
       "Cause": "3.10.1. Gas breakthrough into codensate header through open drain-all",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Deviation During Startup",
       "Cause": "3.11.1. No new issues identified",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Deviation During Shutdown",
       "Cause": "3.12.1. No new issues identified",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Deviation During Maintenance",
       "Cause": "3.13.1. No new issues identified",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Contaminants / Analysis",
       "Cause": "3.14.1. Oil carry over from previous node",
       "Consequence": "3.14.1. Operational issues, no hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Materials of Construction / Corrosion",
       "Cause": "3.15.1. Carbon steel vessels in service with moisture, carbon dioxide and acidic environments",
       "Consequence": "3.15.1. Pinhole leaks, Vessel corrosion, Pitting and mechanical integrity issues; Potential for release of flammable material with hydrogen sulfide, fire, explosion and personnel injury or fatality",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "3.15.1. Epoxy coating\n3.15.2. Vessel inspections yearly and mechanical integrity.",
       "ML": 3,
       "Actions": "Rec 2. Replace with Stainless Steel vessels"
     },
     {
       "Node": "Purification",
       "Deviation": "Erosion",
       "Cause": "3.16.1. Sulfa treat media entrained in gas",
       "Consequence": "3.16.1. Pinhole leaks, Pitting and mechanical integrity issues; Potential for release of flammable material, fire, explosion and personnel injury or fatality",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "3.16.1. Vessel inspections yearly and mechanical integrity.",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Loss of containment",
       "Cause": "3.17.1. PSVs release to atmosphere",
       "Consequence": "3.17.1. PSVs release to safe location greater than 8 ft. No hazardous consequences",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     },
     {
       "Node": "Purification",
       "Deviation": "Loss of containment",
       "Cause": "3.17.2. See Erosion/Corrosion this node",
       "Consequence": "",
       "UMS": 4,
       "UML": 1,
       "Safeguards": "",
       "ML": 3,
       "Actions": ""
     }
     ]}
];