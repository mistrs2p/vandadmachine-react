export type Language = 'fa' | 'en';

export interface MachineryProduct {
  id: string;
  slug: string;
  category: 'spray_dryer' | 'atomizer' | 'fluid_bed' | 'drum_flaker' | 'reactor' | 'homogenizer';
  name_fa: string;
  name_en: string;
  tagline_fa: string;
  tagline_en: string;
  description_fa: string;
  description_en: string;
  image_url: string;
  highlightSpecs: {
    label_fa: string;
    label_en: string;
    value: string;
  }[];
  specifications: {
    parameter_fa: string;
    parameter_en: string;
    value_fa: string;
    value_en: string;
  }[];
  advantages_fa: string[];
  advantages_en: string[];
  applications_fa: string[];
  applications_en: string[];
  schematicType?: 'spray_tower' | 'rotary_disk' | 'fluid_bed' | 'drum_cooler';
}

export interface PowderProduct {
  id: string;
  name_fa: string;
  name_en: string;
  chemicalFormula?: string;
  category_fa: string;
  category_en: string;
  description_fa: string;
  description_en: string;
  specifications: {
    purity: string;
    moisture: string;
    meshSize: string;
    color: string;
  };
  industrialUses_fa: string[];
  industrialUses_en: string[];
}

export interface EngineeringService {
  id: string;
  title_fa: string;
  title_en: string;
  shortDesc_fa: string;
  shortDesc_en: string;
  fullDesc_fa: string;
  fullDesc_en: string;
  icon: string;
  deliverables_fa: string[];
  deliverables_en: string[];
}

export interface ExhibitionItem {
  id: string;
  title_fa: string;
  title_en: string;
  event_fa: string;
  event_en: string;
  year: string;
  location_fa: string;
  location_en: string;
  description_fa: string;
  description_en: string;
  booth_fa: string;
  booth_en: string;
  image_url: string;
  highlights_fa: string[];
  highlights_en: string[];
}

export interface RFQFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  equipmentType: string;
  feedRateKgH: string;
  solidsPercentage: string;
  desiredMoisture: string;
  heatSource: 'gas' | 'steam' | 'electric' | 'thermal_oil';
  materialGrade: 'ss304' | 'ss316l' | 'carbon_steel' | 'titanium';
  projectStage: 'budgeting' | 'pilot_trial' | 'immediate_purchase' | 'consultation';
  projectNotes: string;
}
