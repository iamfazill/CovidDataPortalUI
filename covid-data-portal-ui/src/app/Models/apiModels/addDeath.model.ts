export interface addDeathModel
{

  name: string;
  age: number;
  Gender: string;
  Address: string;
  ContactNumber: string;
  Block: string;
  District: string;

  DateOfAdmission:Date;

  SampleCollected: Date;

  SampleTestedAt: string;

  UnderlyingCondition: string;

  HospitalWhereAdmitted: string;

  DateOfDeath: Date;

  DaysTestedBeforeDeath: string;

  DaysAdmitted: string;

  DaysAdmittedInICU: string;

  DaysInOxygenSupportOrVentillator: string;

  Remarks: string;

  VaccinationStatus: string;

}
