import { Schema, model } from "mongoose";

 export interface PortType  {
  mainPortName: string;
  countryCode: string;
  portNameUUID: string;
  CountryNameUUID: string;
  worldPortIndexNumber: string;
  regionName: string;
  alternatePortName: string;
  unLOCODE: string;
  worldWaterBody: string;
  latitude: string;
  longitude: string;
  sailingDirectionorPublication: string;
  standardNauticalChart: string;
  digitalNauticalChart: string;
  waterDepth: {
    countryFlag:string;
    tidalRange: string;
    entranceWidth: string;
    channelDepth: string;
    anchorageDepth: string;
    cargoPierDepth: string;
    oilTerminalDepth: string;
    liquifiedNaturalGasTerminalDepth: string;
  };
  harborCharacteristics: {
    harborSize: string;
    harborType: string;
    harborUse: string;
    goodHoldingGround: string;
    turningArea: string;
    shelterAfforded: string;
    maximumVesselLength: string;
    maximumVesselBeam: string;
    maximumVesselDraft: string;
    offshoreMaximumVesselLength: string;
  };
  entranceRestriction: {
    tide: string;
    heavySwell: string;
    ice: string;
    Other: string;
    overheadLimits: string;
  };
  underkeelClearanceManagementSystem: string;
  portSecurity: string;
  estimatedTimeofArrivalMessage: string;
  trafficSeparationScheme: string;

  firstPortofEntry: string;
  usRepresentative: string;
  quarantine: {
    pratique: string;
    sanitation: string;
    other: string;
  };
  pilotage: {
    compulsory: string;
    available: string;
    localAssistance: string;
    advisable: string;
  };
  tugs: {
    salvage: string;
    assistance: string;
  };
  searchAndrescue: string;
  NAVAREA: string;
  communication: {
    telephone: string;
    telefax: string;
    radio: string;
    radiotelephone: string;
    airport: string;
    rail: string;
  };
  facilities: {
    wharves: string;
    anchorage: string;
    dangerousCargoAnchorage: string;
    medMooring: string;
    beachMooring: string;
    "ro-Ro": string;
    solidBulk: string;
    liquidBulk: string;
    container: string;
    breakbulk: string;
    oilTerminal: string;
    lNGTerminal: string;
    other: string;
    medicalFacilities: string;
    garbageDisposal: string;
    chemicalHoldingTankDisposal: string;
    degaussing: string;
    dirtyBallastDisposal: string;
  };

  liftAndCranes: {
    fixedCranes: string;
    mobileCranes: string;
    floatingCranes: string;
    lifts100TonsAndMore: string;
    lifts50To100Tons: string;
    lifts25To49Tons: string;
    lifts0To24Tons: string;
  };
  portServicies: {
    longshoremen: string;
    electricity: string;
    steam: string;
    navigationEquipment: string;
    electricalRepair: string;
    repairs: string;
    dryDock: string;
    railway: string;
    vesselTrafficService: string;
  };
  supplies: {
    provisions: string;
    potableWater: string;
    fuelOil: string;
    dieselOil: string;
    deck: string;
    engine: string;
  };
  updatedAt: string;
};
 
const portSchema = new Schema<PortType>({
  portNameUUID: String,
  CountryNameUUID: String,

  mainPortName: {
    type: String,
  },
  countryCode: {
    type: String,
  },
  worldPortIndexNumber: {
    type: String,
  },
  regionName: {
    type: String,
  },
  alternatePortName: {
    type: String,
  },
  unLOCODE: {
    type: String,
  },
  worldWaterBody: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  sailingDirectionorPublication: {
    type: String,
  },
  standardNauticalChart: {
    type: String,
  },
  digitalNauticalChart: {
    type: String,
  },
  waterDepth: {
    tidalRange: {
      type: String,
    },
    entranceWidth: {
      type: String,
    },
    channelDepth: {
      type: String,
    },
    anchorageDepth: {
      type: String,
    },
    cargoPierDepth: {
      type: String,
    },
    oilTerminalDepth: {
      type: String,
    },
    liquifiedNaturalGasTerminalDepth: {
      type: String,
    },
  },
  harborCharacteristics: {
    harborSize: String,
    harborType: String,
    harborUse: String,
    goodHoldingGround: String,
    turningArea: String,
    shelterAfforded: String,
    maximumVesselLength: String,
    maximumVesselBeam: String,
    maximumVesselDraft: String,
    offshoreMaximumVesselLength: String,
  },
  entranceRestriction: {
    tide: String,
    heavySwell: String,
    ice: String,
    Other: String,
    overheadLimits: String,
  },
  underkeelClearanceManagementSystem: String,
  portSecurity: String,
  estimatedTimeofArrivalMessage: String,
  trafficSeparationScheme: String,

  firstPortofEntry: String,
  usRepresentative: String,
  quarantine: {
    qratique: String,
    sanitation: String,
    other: String,
  },
  pilotage: {
    compulsory: String,
    available: String,
    localAssistance: String,
    advisable: String,
  },
  tugs: {
    salvage: String,
    assistance: String,
  },
  searchAndrescue: String,
  NAVAREA: String,
  communication: {
    telephone: String,
    telefax: String,
    radio: String,
    radiotelephone: String,
    airport: String,
    rail: String,
  },
  facilities: {
    wharves: String,
    anchorage: String,
    dangerousCargoAnchorage: String,
    medMooring: String,
    beachMooring: String,
    "ro-Ro": String,
    solidBulk: String,
    liquidBulk: String,
    container: String,
    breakbulk: String,
    oilTerminal: String,
    lNGTerminal: String,
    other: String,
    medicalFacilities: String,
    garbageDisposal: String,
    chemicalHoldingTankDisposal: String,
    degaussing: String,
    dirtyBallastDisposal: String,
  },

  liftAndCranes: {
    fixedCranes: String,
    mobileCranes: String,
    floatingCranes: String,
    lifts100TonsAndMore: String,
    lifts50To100Tons: String,
    lifts25To49Tons: String,
    lifts0To24Tons: String,
  },
  portServicies: {
    longshoremen: String,
    electricity: String,
    steam: String,
    navigationEquipment: String,
    electricalRepair: String,
    repairs: String,
    dryDock: String,
    railway: String,
    vesselTrafficService: String,
  },
  supplies: {
    provisions: String,
    potableWater: String,
    fuelOil: String,
    dieselOil: String,
    deck: String,
    engine: String,
  },
  updatedAt: String,
});
export const portModel = model<PortType>("port", portSchema);
