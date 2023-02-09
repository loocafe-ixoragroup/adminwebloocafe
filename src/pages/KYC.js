import React from "react";
import {
  BlackButton,
  DateInput,
  LightButton,
  Phoneinput,
  SimpleInput,
  StateCity,
  UploadInput,
} from "../components/form-fields";
import Maintain from "../subpages/MaintainDetails/Maintain";
import Rental from "../subpages/RentalDetails/Rental";
import Tenant from "../subpages/TenantDetails/Tenant";
import Unit from "../subpages/UnitDetails/Unit";

const KYC = () => {
  return (
    <>
      {/* <Unit /> */}
      <Tenant />
    </>
  );
};

export default KYC;
