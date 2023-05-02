let aghh1 = 0;
let aghh2 = 0;
let aghh3 = 0;
let aghh4 = 0;
let agh1 = 0;
let agh2 = 0;
let agh3 = 0;
let agh4 = 0;

function deleteRow(row) {
  row.remove();
}

function newElement(element) {
  return document.createElement(element);
}
//address
function prevAdd() {
  let container = newElement(`div`);
  let row = newElement(`div`);
  let adddiv = newElement(`div`);
  let addlabel = newElement(`label`);
  let addinp = newElement(`input`);
  let DIV = newElement("div");
  document.getElementById(`prevAdd`).appendChild(DIV);
  DIV.appendChild(container);
  DIV.appendChild(row);

  container.setAttribute(`class`, `container financing-title`);
  DIV.setAttribute(`id`, `prevAdd${aghh1}`);
  container.setAttribute(`onclick`, `deleteRow(prevAdd${aghh1})`);
  container.innerHTML = `-  Previous Address`;

  row.setAttribute(`class`, `row`);
  row.appendChild(adddiv);
  adddiv.setAttribute(`class`, `col-md-3`);
  adddiv.appendChild(addlabel);
  addlabel.setAttribute(`class`, `minor-form-label`);
  addlabel.setAttribute(`for`, `address${aghh1}`);
  addlabel.innerHTML = `Address`;
  adddiv.appendChild(addinp);
  addinp.setAttribute(`class`, `form-control`);
  addinp.setAttribute(`type`, `text`);
  addinp.setAttribute(`name`, `address${aghh1}`);
  addinp.setAttribute(`id`, `address${aghh1}`);
  addinp.setAttribute(`placeholder`, `123 Unicorn Way`);

  //city
  let citydiv = newElement(`div`);
  let citylabel = newElement(`label`);
  let cityinp = newElement(`input`);

  row.appendChild(citydiv);
  citydiv.setAttribute(`class`, `col-md-3`);
  citydiv.appendChild(citylabel);
  citylabel.setAttribute(`class`, `minor-form-label`);
  citylabel.setAttribute(`for`, `city${aghh1}`);
  citylabel.innerHTML = `City`;
  citydiv.appendChild(cityinp);
  cityinp.setAttribute(`class`, `form-control`);
  cityinp.setAttribute(`type`, `text`);
  cityinp.setAttribute(`name`, `city${aghh1}`);
  cityinp.setAttribute(`id`, `city${aghh1}`);
  cityinp.setAttribute(`placeholder`, `New York City`);

  //State
  let statediv = newElement(`div`);
  let statelabel = newElement(`label`);
  let stateinp = newElement(`input`);

  row.appendChild(statediv);
  statediv.setAttribute(`class`, `col-md-2`);
  statediv.appendChild(statelabel);
  statelabel.setAttribute(`class`, `minor-form-label`);
  statelabel.setAttribute(`for`, `state${aghh1}`);
  statelabel.innerHTML = `State`;
  statediv.appendChild(stateinp);
  stateinp.setAttribute(`class`, `form-control`);
  stateinp.setAttribute(`type`, `text`);
  stateinp.setAttribute(`name`, `state${aghh1}`);
  stateinp.setAttribute(`id`, `state${aghh1}`);
  stateinp.setAttribute(`placeholder`, `New York`);

  //Zip
  let zipdiv = newElement(`div`);
  let ziplabel = newElement(`label`);
  let zipinp = newElement(`input`);

  row.appendChild(zipdiv);
  zipdiv.setAttribute(`class`, `col-md-2`);
  zipdiv.appendChild(ziplabel);
  ziplabel.setAttribute(`class`, `minor-form-label`);
  ziplabel.setAttribute(`for`, `zip${aghh1}`);
  ziplabel.innerHTML = `Zip Code`;
  zipdiv.appendChild(zipinp);
  zipinp.setAttribute(`class`, `form-control`);
  zipinp.setAttribute(`type`, `text`);
  zipinp.setAttribute(`name`, `zip${aghh1}`);
  zipinp.setAttribute(`id`, `zip${aghh1}`);
  zipinp.setAttribute(`placeholder`, `10001`);
  zipinp.setAttribute(`maxlength`, `5`);

  //Home ownership
  let homediv = newElement(`div`);
  let homelabel = newElement(`label`);
  let homeselect = newElement(`select`);
  let homerent = newElement(`option`);
  let homeown = newElement(`option`);
  let homemortgage = newElement(`option`);
  let homeff = newElement(`option`);
  let homemilitary = newElement(`option`);

  row.appendChild(homediv);
  homediv.setAttribute(`class`, `col-md-2`);
  homediv.appendChild(homelabel);
  homelabel.setAttribute(`class`, `minor-form-label`);
  homelabel.setAttribute(`for`, `homeowner${aghh1}`);
  homelabel.innerHTML = `Home Ownership`;
  homediv.appendChild(homeselect);
  homeselect.setAttribute(`name`, `homeowner${aghh1}`);
  homeselect.setAttribute(`id`, `homeowner${aghh1}`);
  homeselect.setAttribute(`class`, `form-control`);
  homeselect.appendChild(homerent);
  homerent.setAttribute(`value`, `rent`);
  homerent.innerHTML = `Rent`;
  homeselect.appendChild(homeown);
  homeown.setAttribute(`value`, `own`);
  homeown.innerHTML = `Own`;
  homeselect.appendChild(homemortgage);
  homemortgage.setAttribute(`value`, `mortgage`);
  homemortgage.innerHTML = `Mortgage`;
  homeselect.appendChild(homeff);
  homeff.setAttribute(`value`, `familyfriend`);
  homeff.innerHTML = `Friend/Family`;
  homeselect.appendChild(homemilitary);
  homemilitary.setAttribute(`value`, `military`);
  homemilitary.innerHTML = `Military`;

  //Monthlypay
  let monthlydiv = newElement(`div`);
  let monthlylabel = newElement(`label`);
  let monthlyinp = newElement(`input`);

  row.appendChild(monthlydiv);
  monthlydiv.setAttribute(`class`, `col-md-3`);
  monthlydiv.appendChild(monthlylabel);
  monthlylabel.setAttribute(`class`, `minor-form-label`);
  monthlylabel.setAttribute(`for`, `MonthlyPay${aghh1}`);
  monthlylabel.innerHTML = `Monthly Payment`;
  monthlydiv.appendChild(monthlyinp);
  monthlyinp.setAttribute(`class`, `form-control`);
  monthlyinp.setAttribute(`type`, `number`);
  monthlyinp.setAttribute(`name`, `monthlypay${aghh1}`);
  monthlyinp.setAttribute(`id`, `monthlypay${aghh1}`);

  //Mortgagecomp
  let mortcompdiv = newElement(`div`);
  let mortcomplabel = newElement(`label`);
  let mortcompinp = newElement(`input`);

  row.appendChild(mortcompdiv);
  mortcompdiv.setAttribute(`class`, `col-md-3`);
  mortcompdiv.appendChild(mortcomplabel);
  mortcomplabel.setAttribute(`class`, `minor-form-label`);
  mortcomplabel.setAttribute(`for`, `mortgagecompany${aghh1}`);
  mortcomplabel.innerHTML = `Mortgage Company`;
  mortcompdiv.appendChild(mortcompinp);
  mortcompinp.setAttribute(`class`, `form-control`);
  mortcompinp.setAttribute(`type`, `text`);
  mortcompinp.setAttribute(`name`, `mortgagecompany${aghh1}`);
  mortcompinp.setAttribute(`id`, `mortgagecompany${aghh1}`);

  //Mortgagecomp
  let mortphonediv = newElement(`div`);
  let mortphonelabel = newElement(`label`);
  let mortphoneinp = newElement(`input`);

  row.appendChild(mortphonediv);
  mortphonediv.setAttribute(`class`, `col-md-3`);
  mortphonediv.appendChild(mortphonelabel);
  mortphonelabel.setAttribute(`class`, `minor-form-label`);
  mortphonelabel.setAttribute(`for`, `otherMortgagePhone${aghh1}`);
  mortphonelabel.innerHTML = `Mortgage Phone`;
  mortphonediv.appendChild(mortphoneinp);
  mortphoneinp.setAttribute(`class`, `form-control`);
  mortphoneinp.setAttribute(`type`, `tel`);
  mortphoneinp.setAttribute(`name`, `otherMortgagePhone${aghh1}`);
  mortphoneinp.setAttribute(`id`, `otherMortgagePhone${aghh1}`);
  mortphoneinp.setAttribute(`placeholder`, `###-###-####`);

  //Mortgagecomp
  let resSincediv = newElement(`div`);
  let resSincelabel = newElement(`label`);
  let resSinceinp = newElement(`input`);

  row.appendChild(resSincediv);
  resSincediv.setAttribute(`class`, `col-md-3`);
  resSincediv.appendChild(resSincelabel);
  resSincelabel.setAttribute(`class`, `minor-form-label`);
  resSincelabel.setAttribute(`for`, `residenceSince${aghh1}`);
  resSincelabel.innerHTML = `Residence Since`;
  resSincediv.appendChild(resSinceinp);
  resSinceinp.setAttribute(`class`, `form-control`);
  resSinceinp.setAttribute(`type`, `date`);
  resSinceinp.setAttribute(`name`, `residenceSince${aghh1}`);
  resSinceinp.setAttribute(`id`, `residenceSince${aghh1}`);
  aghh1++;
}

//employer
function prevEmp() {
  let row = newElement(`div`);
  let empdiv = newElement(`div`);
  let emplabel = newElement(`label`);
  let empinp = newElement(`input`);
  let container = newElement(`div`);

  let DIV = newElement("div");
  document.getElementById(`prevEmp`).appendChild(DIV);
  DIV.appendChild(container);
  DIV.appendChild(row);

  container.setAttribute(`class`, `container financing-title`);
  DIV.setAttribute(`id`, `prevEmp${aghh2}`);
  container.setAttribute(`onclick`, `deleteRow(prevEmp${aghh2})`);
  container.innerHTML = `-  Previous Employment`;

  row.setAttribute(`class`, `row`);
  row.appendChild(empdiv);
  empdiv.setAttribute(`class`, `col-md-2`);
  empdiv.appendChild(emplabel);
  emplabel.setAttribute(`class`, `minor-form-label`);
  emplabel.setAttribute(`for`, `prevEmployer${aghh2}`);
  emplabel.innerHTML = `Employer`;
  empdiv.appendChild(empinp);
  empinp.setAttribute(`class`, `form-control`);
  empinp.setAttribute(`type`, `text`);
  empinp.setAttribute(`name`, `prevEmployer${aghh2}`);
  empinp.setAttribute(`id`, `prevEmployer${aghh2}`);
  empinp.setAttribute(`placeholder`, `Dutch Bros`);

  //job title
  let jTitlediv = newElement(`div`);
  let jTitlelabel = newElement(`label`);
  let jTitleinp = newElement(`input`);

  row.appendChild(jTitlediv);
  jTitlediv.setAttribute(`class`, `col-md-2`);
  jTitlediv.appendChild(jTitlelabel);
  jTitlelabel.setAttribute(`class`, `minor-form-label`);
  jTitlelabel.setAttribute(`for`, `oldJobTitle${aghh2}`);
  jTitlelabel.innerHTML = `Job Title`;
  jTitlediv.appendChild(jTitleinp);
  jTitleinp.setAttribute(`class`, `form-control`);
  jTitleinp.setAttribute(`type`, `text`);
  jTitleinp.setAttribute(`name`, `oldJobTitle${aghh2}`);
  jTitleinp.setAttribute(`id`, `oldJobTitle${aghh2}`);
  jTitleinp.setAttribute(`placeholder`, `Barista`);

  //supervisor
  let xSupervisordiv = newElement(`div`);
  let xSupervisorlabel = newElement(`label`);
  let xSupervisorinp = newElement(`input`);

  row.appendChild(xSupervisordiv);
  xSupervisordiv.setAttribute(`class`, `col-md-2`);
  xSupervisordiv.appendChild(xSupervisorlabel);
  xSupervisorlabel.setAttribute(`class`, `minor-form-label`);
  xSupervisorlabel.setAttribute(`for`, `prevSupervisor${aghh2}`);
  xSupervisorlabel.innerHTML = `Supervisor`;
  xSupervisordiv.appendChild(xSupervisorinp);
  xSupervisorinp.setAttribute(`class`, `form-control`);
  xSupervisorinp.setAttribute(`type`, `text`);
  xSupervisorinp.setAttribute(`name`, `prevSupervisor${aghh2}`);
  xSupervisorinp.setAttribute(`id`, `prevSupervisor${aghh2}`);
  xSupervisorinp.setAttribute(`placeholder`, `Jane Doe`);

  //Employed from
  let empFromdiv = newElement(`div`);
  let empFromlabel = newElement(`label`);
  let empFrominp = newElement(`input`);

  row.appendChild(empFromdiv);
  empFromdiv.setAttribute(`class`, `col-md-2`);
  empFromdiv.appendChild(empFromlabel);
  empFromlabel.setAttribute(`class`, `minor-form-label`);
  empFromlabel.setAttribute(`for`, `empFrom`);
  empFromlabel.innerHTML = `Employed From`;
  empFromdiv.appendChild(empFrominp);
  empFrominp.setAttribute(`class`, `form-control`);
  empFrominp.setAttribute(`type`, `date`);
  empFrominp.setAttribute(`name`, `empFrom`);
  empFrominp.setAttribute(`id`, `empFrom`);

  //Employed to
  let empTodiv = newElement(`div`);
  let empTolabel = newElement(`label`);
  let empToinp = newElement(`input`);

  row.appendChild(empTodiv);
  empTodiv.setAttribute(`class`, `col-md-2`);
  empTodiv.appendChild(empTolabel);
  empTolabel.setAttribute(`class`, `minor-form-label`);
  empTolabel.setAttribute(`for`, `empTo${aghh2}`);
  empTolabel.innerHTML = `Employed To`;
  empTodiv.appendChild(empToinp);
  empToinp.setAttribute(`class`, `form-control`);
  empToinp.setAttribute(`type`, `date`);
  empToinp.setAttribute(`name`, `empTo${aghh2}`);
  empToinp.setAttribute(`id`, `empTo${aghh2}`);

  //Monthly Income
  let xIncomediv = newElement(`div`);
  let xIncomelabel = newElement(`label`);
  let xIncomeinp = newElement(`input`);

  row.appendChild(xIncomediv);
  xIncomediv.setAttribute(`class`, `col-md-2`);
  xIncomediv.appendChild(xIncomelabel);
  xIncomelabel.setAttribute(`class`, `minor-form-label`);
  xIncomelabel.setAttribute(`for`, `prevIncome${aghh2}`);
  xIncomelabel.innerHTML = `Monthly Income`;
  xIncomediv.appendChild(xIncomeinp);
  xIncomeinp.setAttribute(`class`, `form-control`);
  xIncomeinp.setAttribute(`type`, `number`);
  xIncomeinp.setAttribute(`name`, `prevIncome${aghh2}`);
  xIncomeinp.setAttribute(`id`, `prevIncome${aghh2}`);

  //Address
  let xAddressdiv = newElement(`div`);
  let xAddresslabel = newElement(`label`);
  let xAddressinp = newElement(`input`);

  row.appendChild(xAddressdiv);
  xAddressdiv.setAttribute(`class`, `col-md-3`);
  xAddressdiv.appendChild(xAddresslabel);
  xAddresslabel.setAttribute(`class`, `minor-form-label`);
  xAddresslabel.setAttribute(`for`, `prevAddress${aghh2}`);
  xAddresslabel.innerHTML = `Address`;
  xAddressdiv.appendChild(xAddressinp);
  xAddressinp.setAttribute(`class`, `form-control`);
  xAddressinp.setAttribute(`type`, `text`);
  xAddressinp.setAttribute(`name`, `prevAddress${aghh2}`);
  xAddressinp.setAttribute(`id`, `prevAddress${aghh2}`);
  xAddressinp.setAttribute(`placeholder`, `123 Unicorn Way`);

  //City
  let xCitydiv = newElement(`div`);
  let xCitylabel = newElement(`label`);
  let xCityinp = newElement(`input`);

  row.appendChild(xCitydiv);
  xCitydiv.setAttribute(`class`, `col-md-2`);
  xCitydiv.appendChild(xCitylabel);
  xCitylabel.setAttribute(`class`, `minor-form-label`);
  xCitylabel.setAttribute(`for`, `prevCity${aghh2}`);
  xCitylabel.innerHTML = `City`;
  xCitydiv.appendChild(xCityinp);
  xCityinp.setAttribute(`class`, `form-control`);
  xCityinp.setAttribute(`type`, `text`);
  xCityinp.setAttribute(`name`, `prevCity${aghh2}`);
  xCityinp.setAttribute(`id`, `prevCity${aghh2}`);
  xCityinp.setAttribute(`placeholder`, `New York City`);

  //State
  let xStatediv = newElement(`div`);
  let xStatelabel = newElement(`label`);
  let xStateinp = newElement(`input`);

  row.appendChild(xStatediv);
  xStatediv.setAttribute(`class`, `col-md-2`);
  xStatediv.appendChild(xStatelabel);
  xStatelabel.setAttribute(`class`, `minor-form-label`);
  xStatelabel.setAttribute(`for`, `prevState${aghh2}`);
  xStatelabel.innerHTML = `State`;
  xStatediv.appendChild(xStateinp);
  xStateinp.setAttribute(`class`, `form-control`);
  xStateinp.setAttribute(`type`, `text`);
  xStateinp.setAttribute(`name`, `prevState${aghh2}`);
  xStateinp.setAttribute(`id`, `prevState${aghh2}`);
  xStateinp.setAttribute(`placeholder`, `New York`);

  //Zip
  let xZipdiv = newElement(`div`);
  let xZiplabel = newElement(`label`);
  let xZipinp = newElement(`input`);

  row.appendChild(xZipdiv);
  xZipdiv.setAttribute(`class`, `col-md-1`);
  xZipdiv.appendChild(xZiplabel);
  xZiplabel.setAttribute(`class`, `minor-form-label`);
  xZiplabel.setAttribute(`for`, `prevZip${aghh2}`);
  xZiplabel.innerHTML = `Zip`;
  xZipdiv.appendChild(xZipinp);
  xZipinp.setAttribute(`class`, `form-control`);
  xZipinp.setAttribute(`type`, `text`);
  xZipinp.setAttribute(`name`, `prevZip${aghh2}`);
  xZipinp.setAttribute(`id`, `prevZip${aghh2}`);
  xZipinp.setAttribute(`placeholder`, `10001`);
  xZipinp.setAttribute(`maxlength`, `5`);

  //Primary Phone
  let xPriPhonediv = newElement(`div`);
  let xPriPhonelabel = newElement(`label`);
  let xPriPhoneinp = newElement(`input`);

  row.appendChild(xPriPhonediv);
  xPriPhonediv.setAttribute(`class`, `col-md-2`);
  xPriPhonediv.appendChild(xPriPhonelabel);
  xPriPhonelabel.setAttribute(`class`, `minor-form-label`);
  xPriPhonelabel.setAttribute(`for`, `prevPriPhone${aghh2}`);
  xPriPhonelabel.innerHTML = `Primary Phone`;
  xPriPhonediv.appendChild(xPriPhoneinp);
  xPriPhoneinp.setAttribute(`class`, `form-control`);
  xPriPhoneinp.setAttribute(`type`, `tel`);
  xPriPhoneinp.setAttribute(`name`, `prevPriPhone${aghh2}`);
  xPriPhoneinp.setAttribute(`id`, `prevPriPhone${aghh2}`);
  xPriPhoneinp.setAttribute(`placeholder`, `###-###-####`);

  //Cell Phone
  let xCellPhonediv = newElement(`div`);
  let xCellPhonelabel = newElement(`label`);
  let xCellPhoneinp = newElement(`input`);

  row.appendChild(xCellPhonediv);
  xCellPhonediv.setAttribute(`class`, `col-md-2`);
  xCellPhonediv.appendChild(xCellPhonelabel);
  xCellPhonelabel.setAttribute(`class`, `minor-form-label`);
  xCellPhonelabel.setAttribute(`for`, `prevCellPhone${aghh2}`);
  xCellPhonelabel.innerHTML = `Cell Phone`;
  xCellPhonediv.appendChild(xCellPhoneinp);
  xCellPhoneinp.setAttribute(`class`, `form-control`);
  xCellPhoneinp.setAttribute(`type`, `tel`);
  xCellPhoneinp.setAttribute(`name`, `prevCellPhone${aghh2}`);
  xCellPhoneinp.setAttribute(`id`, `prevCellPhone${aghh2}`);
  xCellPhoneinp.setAttribute(`placeholder`, `###-###-####`);
  aghh2++;
}

//Personal References Start

//personalRefrences
function personalRef() {
  let row = newElement(`div`);
  let refdiv = newElement(`div`);
  let reflabel = newElement(`label`);
  let refinp = newElement(`input`);
  let container = newElement(`div`);
  let DIV = newElement("div");
  document.getElementById(`personalRef`).appendChild(DIV);
  DIV.appendChild(container);
  DIV.appendChild(row);

  container.setAttribute(`class`, `container financing-title`);
  DIV.setAttribute(`id`, `personalRef${aghh3}`);
  container.setAttribute(`onclick`, `deleteRow(personalRef${aghh3})`);
  container.innerHTML = `-  Personal Reference`;

  row.setAttribute(`class`, `row`);
  row.appendChild(refdiv);
  refdiv.setAttribute(`class`, `col-md-2`);
  refdiv.appendChild(reflabel);
  reflabel.setAttribute(`class`, `minor-form-label`);
  reflabel.setAttribute(`for`, `personalReference${aghh3}`);
  reflabel.innerHTML = `First Name`;
  refdiv.appendChild(refinp);
  refinp.setAttribute(`class`, `form-control`);
  refinp.setAttribute(`type`, `text`);
  refinp.setAttribute(`name`, `personalReference${aghh3}`);
  refinp.setAttribute(`id`, `personalReference${aghh3}`);
  refinp.setAttribute(`placeholder`, `Logan`);

  //Last Name
  let refLastNamediv = newElement(`div`);
  let refLastNamelabel = newElement(`label`);
  let refLastNameinp = newElement(`input`);

  row.appendChild(refLastNamediv);
  refLastNamediv.setAttribute(`class`, `col-md-2`);
  refLastNamediv.appendChild(refLastNamelabel);
  refLastNamelabel.setAttribute(`class`, `minor-form-label`);
  refLastNamelabel.setAttribute(`for`, `refLastName${aghh3}`);
  refLastNamelabel.innerHTML = `Last Name`;
  refLastNamediv.appendChild(refLastNameinp);
  refLastNameinp.setAttribute(`class`, `form-control`);
  refLastNameinp.setAttribute(`type`, `text`);
  refLastNameinp.setAttribute(`name`, `refLastName${aghh3}`);
  refLastNameinp.setAttribute(`id`, `refLastName${aghh3}`);
  refLastNameinp.setAttribute(`placeholder`, `Woods`);

  //Address
  let refAdddiv = newElement(`div`);
  let refAddlabel = newElement(`label`);
  let refAddinp = newElement(`input`);

  row.appendChild(refAdddiv);
  refAdddiv.setAttribute(`class`, `col-md-3`);
  refAdddiv.appendChild(refAddlabel);
  refAddlabel.setAttribute(`class`, `minor-form-label`);
  refAddlabel.setAttribute(`for`, `refAdd${aghh3}`);
  refAddlabel.innerHTML = `Address`;
  refAdddiv.appendChild(refAddinp);
  refAddinp.setAttribute(`class`, `form-control`);
  refAddinp.setAttribute(`type`, `text`);
  refAddinp.setAttribute(`name`, `refAdd${aghh3}`);
  refAddinp.setAttribute(`id`, `refAdd${aghh3}`);
  refAddinp.setAttribute(`placeholder`, `123 Unicorn Way`);

  //City
  let refCitydiv = newElement(`div`);
  let refCitylabel = newElement(`label`);
  let refCityinp = newElement(`input`);

  row.appendChild(refCitydiv);
  refCitydiv.setAttribute(`class`, `col-md-2`);
  refCitydiv.appendChild(refCitylabel);
  refCitylabel.setAttribute(`class`, `minor-form-label`);
  refCitylabel.setAttribute(`for`, `refCity${aghh3}`);
  refCitylabel.innerHTML = `City`;
  refCitydiv.appendChild(refCityinp);
  refCityinp.setAttribute(`class`, `form-control`);
  refCityinp.setAttribute(`type`, `text`);
  refCityinp.setAttribute(`name`, `refCity${aghh3}`);
  refCityinp.setAttribute(`id`, `refCity${aghh3}`);
  refCityinp.setAttribute(`placeholder`, `New York City`);

  //State
  let refStatediv = newElement(`div`);
  let refStatelabel = newElement(`label`);
  let refStateinp = newElement(`input`);

  row.appendChild(refStatediv);
  refStatediv.setAttribute(`class`, `col-md-2`);
  refStatediv.appendChild(refStatelabel);
  refStatelabel.setAttribute(`class`, `minor-form-label`);
  refStatelabel.setAttribute(`for`, `refState${aghh3}`);
  refStatelabel.innerHTML = `State`;
  refStatediv.appendChild(refStateinp);
  refStateinp.setAttribute(`class`, `form-control`);
  refStateinp.setAttribute(`type`, `text`);
  refStateinp.setAttribute(`name`, `refState${aghh3}`);
  refStateinp.setAttribute(`id`, `refState${aghh3}`);
  refStateinp.setAttribute(`placeholder`, `New York`);

  //Zip
  let refZipdiv = newElement(`div`);
  let refZiplabel = newElement(`label`);
  let refZipinp = newElement(`input`);

  row.appendChild(refZipdiv);
  refZipdiv.setAttribute(`class`, `col-md-2`);
  refZipdiv.appendChild(refZiplabel);
  refZiplabel.setAttribute(`class`, `minor-form-label`);
  refZiplabel.setAttribute(`for`, `refZip${aghh3}`);
  refZiplabel.innerHTML = `Zip`;
  refZipdiv.appendChild(refZipinp);
  refZipinp.setAttribute(`class`, `form-control`);
  refZipinp.setAttribute(`type`, `text`);
  refZipinp.setAttribute(`name`, `refZip${aghh3}`);
  refZipinp.setAttribute(`id`, `refZip${aghh3}`);
  refZipinp.setAttribute(`placeholder`, `10001`);
  refZipinp.setAttribute(`maxlength`, `5`);

  //PrimaryPhone
  let refPrimaryPhonediv = newElement(`div`);
  let refPrimaryPhonelabel = newElement(`label`);
  let refPrimaryPhoneinp = newElement(`input`);

  row.appendChild(refPrimaryPhonediv);
  refPrimaryPhonediv.setAttribute(`class`, `col-md-3`);
  refPrimaryPhonediv.appendChild(refPrimaryPhonelabel);
  refPrimaryPhonelabel.setAttribute(`class`, `minor-form-label`);
  refPrimaryPhonelabel.setAttribute(`for`, `refPrimaryPhone${aghh3}`);
  refPrimaryPhonelabel.innerHTML = `Primary Phone`;
  refPrimaryPhonediv.appendChild(refPrimaryPhoneinp);
  refPrimaryPhoneinp.setAttribute(`class`, `form-control`);
  refPrimaryPhoneinp.setAttribute(`type`, `tel`);
  refPrimaryPhoneinp.setAttribute(`name`, `refPrimaryPhone${aghh3}`);
  refPrimaryPhoneinp.setAttribute(`id`, `refPrimaryPhone${aghh3}`);
  refPrimaryPhoneinp.setAttribute(`placeholder`, `###-###-####`);

  //Relationship
  let refRelationshipdiv = newElement(`div`);
  let refRelationshiplabel = newElement(`label`);
  let refRelationshipinp = newElement(`input`);

  row.appendChild(refRelationshipdiv);
  refRelationshipdiv.setAttribute(`class`, `col-md-3`);
  refRelationshipdiv.appendChild(refRelationshiplabel);
  refRelationshiplabel.setAttribute(`class`, `minor-form-label`);
  refRelationshiplabel.setAttribute(`for`, `refRelationship${aghh3}`);
  refRelationshiplabel.innerHTML = `Relationship`;
  refRelationshipdiv.appendChild(refRelationshipinp);
  refRelationshipinp.setAttribute(`class`, `form-control`);
  refRelationshipinp.setAttribute(`type`, `text`);
  refRelationshipinp.setAttribute(`name`, `refRelationship${aghh3}`);
  refRelationshipinp.setAttribute(`id`, `refRelationship${aghh3}`);
  aghh3++;
}

//Bank References Start

// bankRefrences
function bankRef() {
  let row = newElement(`div`);
  let bankdiv = newElement(`div`);
  let banklabel = newElement(`label`);
  let bankinp = newElement(`input`);
  let container = newElement(`div`);

  let DIV = newElement("div");
  document.getElementById(`bankRef`).appendChild(DIV);
  DIV.appendChild(container);
  DIV.appendChild(row);

  container.setAttribute(`class`, `container financing-title`);
  DIV.setAttribute(`id`, `bankRef${aghh4}`);
  container.setAttribute(`onclick`, `deleteRow(bankRef${aghh4})`);
  container.innerHTML = `-  Bank Refrence`;

  row.setAttribute(`class`, `row`);
  row.appendChild(bankdiv);
  bankdiv.setAttribute(`class`, `col-md-3`);
  bankdiv.appendChild(banklabel);
  banklabel.setAttribute(`class`, `minor-form-label`);
  banklabel.setAttribute(`for`, `bankName${aghh4}`);
  banklabel.innerHTML = `Bank Name`;
  bankdiv.appendChild(bankinp);
  bankinp.setAttribute(`class`, `form-control`);
  bankinp.setAttribute(`type`, `text`);
  bankinp.setAttribute(`name`, `bankName${aghh4}`);
  bankinp.setAttribute(`id`, `bankName${aghh4}`);
  bankinp.setAttribute(`placeholder`, `Imperial Bank Services`);

  // account type
  let bankAccTypediv = newElement(`div`);
  let bankAccTypelabel = newElement(`label`);
  let bankAccTypeSelect = newElement(`select`);
  let bankAccTypeChecking = newElement(`option`);
  let bankAccTypeSaving = newElement(`option`);
  let bankAccTypeCredit = newElement(`option`);
  let bankAccTypeOther = newElement(`option`);

  row.appendChild(bankAccTypediv);
  bankAccTypediv.setAttribute(`class`, `col-md-2`);
  bankAccTypediv.appendChild(bankAccTypelabel);
  bankAccTypelabel.setAttribute(`class`, `minor-form-label`);
  bankAccTypelabel.setAttribute(`for`, `bankAccType${aghh4}`);
  bankAccTypelabel.innerHTML = `Account Type`;
  bankAccTypediv.appendChild(bankAccTypeSelect);
  bankAccTypeSelect.setAttribute(`name`, `bankAccType${aghh4}`);
  bankAccTypeSelect.setAttribute(`id`, `bankAccType${aghh4}`);
  bankAccTypeSelect.setAttribute(`class`, `form-control`);
  bankAccTypeSelect.appendChild(bankAccTypeChecking);
  bankAccTypeChecking.setAttribute(`value`, `checking`);
  bankAccTypeChecking.innerHTML = `Checking`;
  bankAccTypeSelect.appendChild(bankAccTypeSaving);
  bankAccTypeSaving.setAttribute(`value`, `saving`);
  bankAccTypeSaving.innerHTML = `Saving`;
  bankAccTypeSelect.appendChild(bankAccTypeCredit);
  bankAccTypeCredit.setAttribute(`value`, `credit`);
  bankAccTypeCredit.innerHTML = `Credit`;
  bankAccTypeSelect.appendChild(bankAccTypeOther);
  bankAccTypeOther.setAttribute(`value`, `other`);
  bankAccTypeOther.innerHTML = `Other`;

  //City
  let bankCitydiv = newElement(`div`);
  let bankCitylabel = newElement(`label`);
  let bankCityinp = newElement(`input`);

  row.appendChild(bankCitydiv);
  bankCitydiv.setAttribute(`class`, `col-md-2`);
  bankCitydiv.appendChild(bankCitylabel);
  bankCitylabel.setAttribute(`class`, `minor-form-label`);
  bankCitylabel.setAttribute(`for`, `bankCity${aghh4}`);
  bankCitylabel.innerHTML = `City`;
  bankCitydiv.appendChild(bankCityinp);
  bankCityinp.setAttribute(`class`, `form-control`);
  bankCityinp.setAttribute(`type`, `text`);
  bankCityinp.setAttribute(`name`, `bankCity${aghh4}`);
  bankCityinp.setAttribute(`id`, `bankCity${aghh4}`);
  bankCityinp.setAttribute(`placeholder`, `New York City`);

  //State
  let bankStatediv = newElement(`div`);
  let bankStatelabel = newElement(`label`);
  let bankStateinp = newElement(`input`);

  row.appendChild(bankStatediv);
  bankStatediv.setAttribute(`class`, `col-md-2`);
  bankStatediv.appendChild(bankStatelabel);
  bankStatelabel.setAttribute(`class`, `minor-form-label`);
  bankStatelabel.setAttribute(`for`, `bankState${aghh4}`);
  bankStatelabel.innerHTML = `State`;
  bankStatediv.appendChild(bankStateinp);
  bankStateinp.setAttribute(`class`, `form-control`);
  bankStateinp.setAttribute(`type`, `text`);
  bankStateinp.setAttribute(`name`, `bankState${aghh4}`);
  bankStateinp.setAttribute(`id`, `bankState${aghh4}`);
  bankStateinp.setAttribute(`placeholder`, `New York`);

  //Bank Pri Phone
  let bankPrimaryPhonediv = newElement(`div`);
  let bankPrimaryPhonelabel = newElement(`label`);
  let bankPrimaryPhoneinp = newElement(`input`);

  row.appendChild(bankPrimaryPhonediv);
  bankPrimaryPhonediv.setAttribute(`class`, `col-md-3`);
  bankPrimaryPhonediv.appendChild(bankPrimaryPhonelabel);
  bankPrimaryPhonelabel.setAttribute(`class`, `minor-form-label`);
  bankPrimaryPhonelabel.setAttribute(`for`, `bankPrimaryPhone${aghh4}`);
  bankPrimaryPhonelabel.innerHTML = `Primary Phone`;
  bankPrimaryPhonediv.appendChild(bankPrimaryPhoneinp);
  bankPrimaryPhoneinp.setAttribute(`class`, `form-control`);
  bankPrimaryPhoneinp.setAttribute(`type`, `tel`);
  bankPrimaryPhoneinp.setAttribute(`name`, `bankPrimaryPhone${aghh4}`);
  bankPrimaryPhoneinp.setAttribute(`id`, `bankPrimaryPhone${aghh4}`);
  bankPrimaryPhoneinp.setAttribute(`placeholder`, `###-###-####`);

  aghh4++;
}

//Co Buyer Starts Here
//address
function prevAddCo() {
  let container = newElement(`div`);
  let row = newElement(`div`);
  let adddiv = newElement(`div`);
  let addlabel = newElement(`label`);
  let addinp = newElement(`input`);
  let DIV = newElement("div");
  document.getElementById(`prevAddCo`).appendChild(DIV);
  DIV.appendChild(container);
  DIV.appendChild(row);

  container.setAttribute(`class`, `container financing-title`);
  DIV.setAttribute(`id`, `prevAddCo${agh1}`);
  container.setAttribute(`onclick`, `deleteRow(prevAddCo${agh1})`);
  container.innerHTML = `-  Previous Address`;

  
  row.setAttribute(`class`, `row`);
  row.appendChild(adddiv);
  adddiv.setAttribute(`class`, `col-md-3`);
  adddiv.appendChild(addlabel);
  addlabel.setAttribute(`class`, `minor-form-label`);
  addlabel.setAttribute(`for`, `addressCo${agh1}`);
  addlabel.innerHTML = `Address`;
  adddiv.appendChild(addinp);
  addinp.setAttribute(`class`, `form-control`);
  addinp.setAttribute(`type`, `text`);
  addinp.setAttribute(`name`, `addressCo${agh1}`);
  addinp.setAttribute(`id`, `addressCo${agh1}`);
  addinp.setAttribute(`placeholder`, `123 Unicorn Way`);

  //city
  let citydiv = newElement(`div`);
  let citylabel = newElement(`label`);
  let cityinp = newElement(`input`);
  
  row.appendChild(citydiv);
  citydiv.setAttribute(`class`, `col-md-3`);
  citydiv.appendChild(citylabel);
  citylabel.setAttribute(`class`, `minor-form-label`);
  citylabel.setAttribute(`for`, `cityCo${agh1}`);
  citylabel.innerHTML = `City`;
  citydiv.appendChild(cityinp);
  cityinp.setAttribute(`class`, `form-control`);
  cityinp.setAttribute(`type`, `text`);
  cityinp.setAttribute(`name`, `cityCo${agh1}`);
  cityinp.setAttribute(`id`, `cityCo${agh1}`);
  cityinp.setAttribute(`placeholder`, `New York City`);
  
  //State
  let statediv = newElement(`div`);
  let statelabel = newElement(`label`);
  let stateinp = newElement(`input`);
  
  row.appendChild(statediv);
  statediv.setAttribute(`class`, `col-md-2`);
  statediv.appendChild(statelabel);
  statelabel.setAttribute(`class`, `minor-form-label`);
  statelabel.setAttribute(`for`, `stateCo${agh1}`);
  statelabel.innerHTML = `State`;
  statediv.appendChild(stateinp);
  stateinp.setAttribute(`class`, `form-control`);
  stateinp.setAttribute(`type`, `text`);
  stateinp.setAttribute(`name`, `stateCo${agh1}`);
  stateinp.setAttribute(`id`, `stateCo${agh1}`);
  stateinp.setAttribute(`placeholder`, `New York`);
  
  //Zip
  let zipdiv = newElement(`div`);
  let ziplabel = newElement(`label`);
  let zipinp = newElement(`input`);

  row.appendChild(zipdiv);
  zipdiv.setAttribute(`class`, `col-md-2`);
  zipdiv.appendChild(ziplabel);
  ziplabel.setAttribute(`class`, `minor-form-label`);
  ziplabel.setAttribute(`for`, `zipCo${agh1}`);
  ziplabel.innerHTML = `Zip Code`;
  zipdiv.appendChild(zipinp);
  zipinp.setAttribute(`class`, `form-control`);
  zipinp.setAttribute(`type`, `text`);
  zipinp.setAttribute(`name`, `zipCo${agh1}`);
  zipinp.setAttribute(`id`, `zipCo${agh1}`);
  zipinp.setAttribute(`placeholder`, `10001`);
  zipinp.setAttribute(`maxlength`, `5`);
  
  //Home ownership
  let homediv = newElement(`div`);
  let homelabel = newElement(`label`);
  let homeselect = newElement(`select`);
  let homerent = newElement(`option`);
  let homeown = newElement(`option`);
  let homemortgage = newElement(`option`);
  let homeff = newElement(`option`);
  let homemilitary = newElement(`option`);

  row.appendChild(homediv);
  homediv.setAttribute(`class`, `col-md-2`);
  homediv.appendChild(homelabel);
  homelabel.setAttribute(`class`, `minor-form-label`);
  homelabel.setAttribute(`for`, `homeownerCo${agh1}`);
  homelabel.innerHTML = `Home Ownership`;
  homediv.appendChild(homeselect);
  homeselect.setAttribute(`name`, `homeownerCo${agh1}`);
  homeselect.setAttribute(`id`, `homeownerCo${agh1}`);
  homeselect.setAttribute(`class`, `form-control`);
  homeselect.appendChild(homerent);
  homerent.setAttribute(`value`, `rent`);
  homerent.innerHTML = `Rent`;
  homeselect.appendChild(homeown);
  homeown.setAttribute(`value`, `own`);
  homeown.innerHTML = `Own`;
  homeselect.appendChild(homemortgage);
  homemortgage.setAttribute(`value`, `mortgage`);
  homemortgage.innerHTML = `Mortgage`;
  homeselect.appendChild(homeff);
  homeff.setAttribute(`value`, `familyfriend`);
  homeff.innerHTML = `Friend/Family`;
  homeselect.appendChild(homemilitary);
  homemilitary.setAttribute(`value`, `military`);
  homemilitary.innerHTML = `Military`;
  
  //Monthlypay
  let monthlydiv = newElement(`div`);
  let monthlylabel = newElement(`label`);
  let monthlyinp = newElement(`input`);

  row.appendChild(monthlydiv);
  monthlydiv.setAttribute(`class`, `col-md-3`);
  monthlydiv.appendChild(monthlylabel);
  monthlylabel.setAttribute(`class`, `minor-form-label`);
  monthlylabel.setAttribute(`for`, `monthlyPayCo${agh1}`);
  monthlylabel.innerHTML = `Monthly Payment`;
  monthlydiv.appendChild(monthlyinp);
  monthlyinp.setAttribute(`class`, `form-control`);
  monthlyinp.setAttribute(`type`, `number`);
  monthlyinp.setAttribute(`name`, `monthlyPayCo${agh1}`);
  monthlyinp.setAttribute(`id`, `monthlyPayCo${agh1}`);
  
  //Mortgagecomp
  let mortcompdiv = newElement(`div`);
  let mortcomplabel = newElement(`label`);
  let mortcompinp = newElement(`input`);
  
  row.appendChild(mortcompdiv);
  mortcompdiv.setAttribute(`class`, `col-md-3`);
  mortcompdiv.appendChild(mortcomplabel);
  mortcomplabel.setAttribute(`class`, `minor-form-label`);
  mortcomplabel.setAttribute(`for`, `mortgageCompanyCo${agh1}`);
  mortcomplabel.innerHTML = `Mortgage Company`;
  mortcompdiv.appendChild(mortcompinp);
  mortcompinp.setAttribute(`class`, `form-control`);
  mortcompinp.setAttribute(`type`, `text`);
  mortcompinp.setAttribute(`name`, `mortgageCompanyCo${agh1}`);
  mortcompinp.setAttribute(`id`, `mortgageCompanyCo${agh1}`);

  //Mortgagecomp
  let mortphonediv = newElement(`div`);
  let mortphonelabel = newElement(`label`);
  let mortphoneinp = newElement(`input`);
  
  row.appendChild(mortphonediv);
  mortphonediv.setAttribute(`class`, `col-md-3`);
  mortphonediv.appendChild(mortphonelabel);
  mortphonelabel.setAttribute(`class`, `minor-form-label`);
  mortphonelabel.setAttribute(`for`, `otherMortgagePhoneCo${agh1}`);
  mortphonelabel.innerHTML = `Mortgage Phone`;
  mortphonediv.appendChild(mortphoneinp);
  mortphoneinp.setAttribute(`class`, `form-control`);
  mortphoneinp.setAttribute(`type`, `tel`);
  mortphoneinp.setAttribute(`name`, `otherMortgagePhoneCo${agh1}`);
  mortphoneinp.setAttribute(`id`, `otherMortgagePhoneCo${agh1}`);
  mortphoneinp.setAttribute(`placeholder`, `###-###-####`);

  //Mortgagecomp
  let resSincediv = newElement(`div`);
  let resSincelabel = newElement(`label`);
  let resSinceinp = newElement(`input`);
  
  row.appendChild(resSincediv);
  resSincediv.setAttribute(`class`, `col-md-3`);
  resSincediv.appendChild(resSincelabel);
  resSincelabel.setAttribute(`class`, `minor-form-label`);
  resSincelabel.setAttribute(`for`, `residenceSinceCo${agh1}`);
  resSincelabel.innerHTML = `Residence Since`;
  resSincediv.appendChild(resSinceinp);
  resSinceinp.setAttribute(`class`, `form-control`);
  resSinceinp.setAttribute(`type`, `date`);
  resSinceinp.setAttribute(`name`, `residenceSinceCo${agh1}`);
  resSinceinp.setAttribute(`id`, `residenceSinceCo${agh1}`);
  agh1++;
}

//employer
function prevEmpCo() {
  let row = newElement(`div`);
  let empdiv = newElement(`div`);
  let emplabel = newElement(`label`);
  let empinp = newElement(`input`);
  let container = newElement(`div`);
  
  let DIV = newElement("div");
  document.getElementById(`prevEmpCo`).appendChild(DIV);
  DIV.appendChild(container);
  DIV.appendChild(row);
  
  container.setAttribute(`class`, `container financing-title`);
  DIV.setAttribute(`id`, `prevEmpCo${agh2}`);
  container.setAttribute(`onclick`, `deleteRow(prevEmpCo${agh2})`);
  container.innerHTML = `-  Previous Employment`;

  
  row.setAttribute(`class`, `row`);
  row.appendChild(empdiv);
  empdiv.setAttribute(`class`, `col-md-2`);
  empdiv.appendChild(emplabel);
  emplabel.setAttribute(`class`, `minor-form-label`);
  emplabel.setAttribute(`for`, `prevEmployerloyerCo${agh2}`);
  emplabel.innerHTML = `Employer`;
  empdiv.appendChild(empinp);
  empinp.setAttribute(`class`, `form-control`);
  empinp.setAttribute(`type`, `text`);
  empinp.setAttribute(`name`, `prevEmployerCo${agh2}`);
  empinp.setAttribute(`id`, `prevEmployerCo${agh2}`);
  empinp.setAttribute(`placeholder`, `Dutch Bros`);
  
  //job title
  let jTitlediv = newElement(`div`);
  let jTitlelabel = newElement(`label`);
  let jTitleinp = newElement(`input`);
  
  row.appendChild(jTitlediv);
  jTitlediv.setAttribute(`class`, `col-md-2`);
  jTitlediv.appendChild(jTitlelabel);
  jTitlelabel.setAttribute(`class`, `minor-form-label`);
  jTitlelabel.setAttribute(`for`, `oldJobTitleCo${agh2}`);
  jTitlelabel.innerHTML = `Job Title`;
  jTitlediv.appendChild(jTitleinp);
  jTitleinp.setAttribute(`class`, `form-control`);
  jTitleinp.setAttribute(`type`, `text`);
  jTitleinp.setAttribute(`name`, `oldJobTitleCo${agh2}`);
  jTitleinp.setAttribute(`id`, `oldJobTitleCo${agh2}`);
  jTitleinp.setAttribute(`placeholder`, `Barista`);
  
  //supervisor
  let xSupervisordiv = newElement(`div`);
  let xSupervisorlabel = newElement(`label`);
  let xSupervisorinp = newElement(`input`);
  
  row.appendChild(xSupervisordiv);
  xSupervisordiv.setAttribute(`class`, `col-md-2`);
  xSupervisordiv.appendChild(xSupervisorlabel);
  xSupervisorlabel.setAttribute(`class`, `minor-form-label`);
  xSupervisorlabel.setAttribute(`for`, `prevSupervisorCo${agh2}`);
  xSupervisorlabel.innerHTML = `Supervisor`;
  xSupervisordiv.appendChild(xSupervisorinp);
  xSupervisorinp.setAttribute(`class`, `form-control`);
  xSupervisorinp.setAttribute(`type`, `text`);
  xSupervisorinp.setAttribute(`name`, `prevSupervisorCo${agh2}`);
  xSupervisorinp.setAttribute(`id`, `prevSupervisorCo${agh2}`);
  xSupervisorinp.setAttribute(`placeholder`, `Jane Doe`);
  
  //Employed from
  let empFromdiv = newElement(`div`);
  let empFromlabel = newElement(`label`);
  let empFrominp = newElement(`input`);
  
  row.appendChild(empFromdiv);
  empFromdiv.setAttribute(`class`, `col-md-2`);
  empFromdiv.appendChild(empFromlabel);
  empFromlabel.setAttribute(`class`, `minor-form-label`);
  empFromlabel.setAttribute(`for`, `empFromCo${agh2}`);
  empFromlabel.innerHTML = `Employed From`;
  empFromdiv.appendChild(empFrominp);
  empFrominp.setAttribute(`class`, `form-control`);
  empFrominp.setAttribute(`type`, `date`);
  empFrominp.setAttribute(`name`, `empFromCo${agh2}`);
  empFrominp.setAttribute(`id`, `empFromCo${agh2}`);
  
  //Employed to
  let empTodiv = newElement(`div`);
  let empTolabel = newElement(`label`);
  let empToinp = newElement(`input`);
  
  row.appendChild(empTodiv);
  empTodiv.setAttribute(`class`, `col-md-2`);
  empTodiv.appendChild(empTolabel);
  empTolabel.setAttribute(`class`, `minor-form-label`);
  empTolabel.setAttribute(`for`, `empToCo${agh2}`);
  empTolabel.innerHTML = `Employed To`;
  empTodiv.appendChild(empToinp);
  empToinp.setAttribute(`class`, `form-control`);
  empToinp.setAttribute(`type`, `date`);
  empToinp.setAttribute(`name`, `empToCo${agh2}`);
  empToinp.setAttribute(`id`, `empToCo${agh2}`);

  //Monthly Income
  let xIncomediv = newElement(`div`);
  let xIncomelabel = newElement(`label`);
  let xIncomeinp = newElement(`input`);

  row.appendChild(xIncomediv);
  xIncomediv.setAttribute(`class`, `col-md-2`);
  xIncomediv.appendChild(xIncomelabel);
  xIncomelabel.setAttribute(`class`, `minor-form-label`);
  xIncomelabel.setAttribute(`for`, `prevIncomeCo${agh2}`);
  xIncomelabel.innerHTML = `Monthly Income`;
  xIncomediv.appendChild(xIncomeinp);
  xIncomeinp.setAttribute(`class`, `form-control`);
  xIncomeinp.setAttribute(`type`, `number`);
  xIncomeinp.setAttribute(`name`, `prevIncomeCo${agh2}`);
  xIncomeinp.setAttribute(`id`, `prevIncomeCo${agh2}`);
  
  //Address
  let xAddressdiv = newElement(`div`);
  let xAddresslabel = newElement(`label`);
  let xAddressinp = newElement(`input`);
  
  row.appendChild(xAddressdiv);
  xAddressdiv.setAttribute(`class`, `col-md-3`);
  xAddressdiv.appendChild(xAddresslabel);
  xAddresslabel.setAttribute(`class`, `minor-form-label`);
  xAddresslabel.setAttribute(`for`, `prevAddCoressCo${agh2}`);
  xAddresslabel.innerHTML = `Address`;
  xAddressdiv.appendChild(xAddressinp);
  xAddressinp.setAttribute(`class`, `form-control`);
  xAddressinp.setAttribute(`type`, `text`);
  xAddressinp.setAttribute(`name`, `prevAddCoressCo${agh2}`);
  xAddressinp.setAttribute(`id`, `prevAddCoressCo${agh2}`);
  xAddressinp.setAttribute(`placeholder`, `123 Unicorn Way`);
  
  //City
  let xCitydiv = newElement(`div`);
  let xCitylabel = newElement(`label`);
  let xCityinp = newElement(`input`);
  
  row.appendChild(xCitydiv);
  xCitydiv.setAttribute(`class`, `col-md-2`);
  xCitydiv.appendChild(xCitylabel);
  xCitylabel.setAttribute(`class`, `minor-form-label`);
  xCitylabel.setAttribute(`for`, `prevCityCo${agh2}`);
  xCitylabel.innerHTML = `City`;
  xCitydiv.appendChild(xCityinp);
  xCityinp.setAttribute(`class`, `form-control`);
  xCityinp.setAttribute(`type`, `text`);
  xCityinp.setAttribute(`name`, `prevCityCo${agh2}`);
  xCityinp.setAttribute(`id`, `prevCityCo${agh2}`);
  xCityinp.setAttribute(`placeholder`, `New York City`);
  
  //State
  let xStatediv = newElement(`div`);
  let xStatelabel = newElement(`label`);
  let xStateinp = newElement(`input`);
  
  row.appendChild(xStatediv);
  xStatediv.setAttribute(`class`, `col-md-2`);
  xStatediv.appendChild(xStatelabel);
  xStatelabel.setAttribute(`class`, `minor-form-label`);
  xStatelabel.setAttribute(`for`, `prevStateCo${agh2}`);
  xStatelabel.innerHTML = `State`;
  xStatediv.appendChild(xStateinp);
  xStateinp.setAttribute(`class`, `form-control`);
  xStateinp.setAttribute(`type`, `text`);
  xStateinp.setAttribute(`name`, `prevStateCo${agh2}`);
  xStateinp.setAttribute(`id`, `prevStateCo${agh2}`);
  xStateinp.setAttribute(`placeholder`, `New York`);

  //Zip
  let xZipdiv = newElement(`div`);
  let xZiplabel = newElement(`label`);
  let xZipinp = newElement(`input`);
  
  row.appendChild(xZipdiv);
  xZipdiv.setAttribute(`class`, `col-md-1`);
  xZipdiv.appendChild(xZiplabel);
  xZiplabel.setAttribute(`class`, `minor-form-label`);
  xZiplabel.setAttribute(`for`, `prevZipCo${agh2}`);
  xZiplabel.innerHTML = `Zip`;
  xZipdiv.appendChild(xZipinp);
  xZipinp.setAttribute(`class`, `form-control`);
  xZipinp.setAttribute(`type`, `text`);
  xZipinp.setAttribute(`name`, `prevZipCo${agh2}`);
  xZipinp.setAttribute(`id`, `prevZipCo${agh2}`);
  xZipinp.setAttribute(`placeholder`, `10001`);
  xZipinp.setAttribute(`maxlength`, `5`);
  
  //Primary Phone
  let xPriPhonediv = newElement(`div`);
  let xPriPhonelabel = newElement(`label`);
  let xPriPhoneinp = newElement(`input`);
  
  row.appendChild(xPriPhonediv);
  xPriPhonediv.setAttribute(`class`, `col-md-2`);
  xPriPhonediv.appendChild(xPriPhonelabel);
  xPriPhonelabel.setAttribute(`class`, `minor-form-label`);
  xPriPhonelabel.setAttribute(`for`, `prevPriPhoneCo${agh2}`);
  xPriPhonelabel.innerHTML = `Primary Phone`;
  xPriPhonediv.appendChild(xPriPhoneinp);
  xPriPhoneinp.setAttribute(`class`, `form-control`);
  xPriPhoneinp.setAttribute(`type`, `tel`);
  xPriPhoneinp.setAttribute(`name`, `prevPriPhoneCo${agh2}`);
  xPriPhoneinp.setAttribute(`id`, `prevPriPhoneCo${agh2}`);
  xPriPhoneinp.setAttribute(`placeholder`, `###-###-####`);
  
  //Cell Phone
  let xCellPhonediv = newElement(`div`);
  let xCellPhonelabel = newElement(`label`);
  let xCellPhoneinp = newElement(`input`);
  
  row.appendChild(xCellPhonediv);
  xCellPhonediv.setAttribute(`class`, `col-md-2`);
  xCellPhonediv.appendChild(xCellPhonelabel);
  xCellPhonelabel.setAttribute(`class`, `minor-form-label`);
  xCellPhonelabel.setAttribute(`for`, `prevCellPhoneCo${agh2}`);
  xCellPhonelabel.innerHTML = `Cell Phone`;
  xCellPhonediv.appendChild(xCellPhoneinp);
  xCellPhoneinp.setAttribute(`class`, `form-control`);
  xCellPhoneinp.setAttribute(`type`, `tel`);
  xCellPhoneinp.setAttribute(`name`, `prevCellPhoneCo${agh2}`);
  xCellPhoneinp.setAttribute(`id`, `prevCellPhoneCo${agh2}`);
  xCellPhoneinp.setAttribute(`placeholder`, `###-###-####`);
  agh2++;
}

//Personal References Start

//personalRefrences
function personalRefCo() {
  let row = newElement(`div`);
  let refdiv = newElement(`div`);
  let reflabel = newElement(`label`);
  let refinp = newElement(`input`);
  let container = newElement(`div`);
  
  let DIV = newElement("div");
  document.getElementById(`personalRefCo`).appendChild(DIV);
  DIV.appendChild(container);
  DIV.appendChild(row);

  container.setAttribute(`class`, `container financing-title`);
  DIV.setAttribute(`id`, `personalRefCo${agh3}`);
  container.setAttribute(`onclick`, `deleteRow(personalRefCo${agh3})`);
  container.innerHTML = `-  Personal Refrence`;

  
  row.setAttribute(`class`, `row`);
  row.appendChild(refdiv);
  refdiv.setAttribute(`class`, `col-md-2`);
  refdiv.appendChild(reflabel);
  reflabel.setAttribute(`class`, `minor-form-label`);
  reflabel.setAttribute(`for`, `personalReferenceCo${agh3}`);
  reflabel.innerHTML = `First Name`;
  refdiv.appendChild(refinp);
  refinp.setAttribute(`class`, `form-control`);
  refinp.setAttribute(`type`, `text`);
  refinp.setAttribute(`name`, `personalReferenceCo${agh3}`);
  refinp.setAttribute(`id`, `personalReferenceCo${agh3}`);
  refinp.setAttribute(`placeholder`, `Logan`);

  //Last Name
  let refLastNamediv = newElement(`div`);
  let refLastNamelabel = newElement(`label`);
  let refLastNameinp = newElement(`input`);
  
  row.appendChild(refLastNamediv);
  refLastNamediv.setAttribute(`class`, `col-md-2`);
  refLastNamediv.appendChild(refLastNamelabel);
  refLastNamelabel.setAttribute(`class`, `minor-form-label`);
  refLastNamelabel.setAttribute(`for`, `refLastNameCo${agh3}`);
  refLastNamelabel.innerHTML = `Last Name`;
  refLastNamediv.appendChild(refLastNameinp);
  refLastNameinp.setAttribute(`class`, `form-control`);
  refLastNameinp.setAttribute(`type`, `text`);
  refLastNameinp.setAttribute(`name`, `refLastNameCo${agh3}`);
  refLastNameinp.setAttribute(`id`, `refLastNameCo${agh3}`);
  refLastNameinp.setAttribute(`placeholder`, `Woods`);

  //Address
  let refAdddiv = newElement(`div`);
  let refAddlabel = newElement(`label`);
  let refAddinp = newElement(`input`);

  row.appendChild(refAdddiv);
  refAdddiv.setAttribute(`class`, `col-md-3`);
  refAdddiv.appendChild(refAddlabel);
  refAddlabel.setAttribute(`class`, `minor-form-label`);
  refAddlabel.setAttribute(`for`, `refAddCo${agh3}`);
  refAddlabel.innerHTML = `Address`;
  refAdddiv.appendChild(refAddinp);
  refAddinp.setAttribute(`class`, `form-control`);
  refAddinp.setAttribute(`type`, `text`);
  refAddinp.setAttribute(`name`, `refAddCo${agh3}`);
  refAddinp.setAttribute(`id`, `refAddCo${agh3}`);
  refAddinp.setAttribute(`placeholder`, `123 Unicorn Way`);
  
  //City
  let refCitydiv = newElement(`div`);
  let refCitylabel = newElement(`label`);
  let refCityinp = newElement(`input`);
  
  row.appendChild(refCitydiv);
  refCitydiv.setAttribute(`class`, `col-md-2`);
  refCitydiv.appendChild(refCitylabel);
  refCitylabel.setAttribute(`class`, `minor-form-label`);
  refCitylabel.setAttribute(`for`, `refCityCo${agh3}`);
  refCitylabel.innerHTML = `City`;
  refCitydiv.appendChild(refCityinp);
  refCityinp.setAttribute(`class`, `form-control`);
  refCityinp.setAttribute(`type`, `text`);
  refCityinp.setAttribute(`name`, `refCityCo${agh3}`);
  refCityinp.setAttribute(`id`, `refCityCo${agh3}`);
  refCityinp.setAttribute(`placeholder`, `New York City`);

  //State
  let refStatediv = newElement(`div`);
  let refStatelabel = newElement(`label`);
  let refStateinp = newElement(`input`);

  row.appendChild(refStatediv);
  refStatediv.setAttribute(`class`, `col-md-2`);
  refStatediv.appendChild(refStatelabel);
  refStatelabel.setAttribute(`class`, `minor-form-label`);
  refStatelabel.setAttribute(`for`, `refStateCo${agh3}`);
  refStatelabel.innerHTML = `State`;
  refStatediv.appendChild(refStateinp);
  refStateinp.setAttribute(`class`, `form-control`);
  refStateinp.setAttribute(`type`, `text`);
  refStateinp.setAttribute(`name`, `refStateCo${agh3}`);
  refStateinp.setAttribute(`id`, `refStateCo${agh3}`);
  refStateinp.setAttribute(`placeholder`, `New York`);
  
  //Zip
  let refZipdiv = newElement(`div`);
  let refZiplabel = newElement(`label`);
  let refZipinp = newElement(`input`);
  
  row.appendChild(refZipdiv);
  refZipdiv.setAttribute(`class`, `col-md-2`);
  refZipdiv.appendChild(refZiplabel);
  refZiplabel.setAttribute(`class`, `minor-form-label`);
  refZiplabel.setAttribute(`for`, `refZipCo${agh3}`);
  refZiplabel.innerHTML = `Zip`;
  refZipdiv.appendChild(refZipinp);
  refZipinp.setAttribute(`class`, `form-control`);
  refZipinp.setAttribute(`type`, `text`);
  refZipinp.setAttribute(`name`, `refZipCo${agh3}`);
  refZipinp.setAttribute(`id`, `refZipCo${agh3}`);
  refZipinp.setAttribute(`placeholder`, `10001`);
  refZipinp.setAttribute(`maxlength`, `5`);

  //PrimaryPhone
  let refPrimaryPhonediv = newElement(`div`);
  let refPrimaryPhonelabel = newElement(`label`);
  let refPrimaryPhoneinp = newElement(`input`);
  
  row.appendChild(refPrimaryPhonediv);
  refPrimaryPhonediv.setAttribute(`class`, `col-md-3`);
  refPrimaryPhonediv.appendChild(refPrimaryPhonelabel);
  refPrimaryPhonelabel.setAttribute(`class`, `minor-form-label`);
  refPrimaryPhonelabel.setAttribute(`for`, `refPrimaryPhoneCo${agh3}`);
  refPrimaryPhonelabel.innerHTML = `Primary Phone`;
  refPrimaryPhonediv.appendChild(refPrimaryPhoneinp);
  refPrimaryPhoneinp.setAttribute(`class`, `form-control`);
  refPrimaryPhoneinp.setAttribute(`type`, `tel`);
  refPrimaryPhoneinp.setAttribute(`name`, `refPrimaryPhoneCo${agh3}`);
  refPrimaryPhoneinp.setAttribute(`id`, `refPrimaryPhoneCo${agh3}`);
  refPrimaryPhoneinp.setAttribute(`placeholder`, `###-###-####`);
  
  //Relationship
  let refRelationshipdiv = newElement(`div`);
  let refRelationshiplabel = newElement(`label`);
  let refRelationshipinp = newElement(`input`);
  
  row.appendChild(refRelationshipdiv);
  refRelationshipdiv.setAttribute(`class`, `col-md-3`);
  refRelationshipdiv.appendChild(refRelationshiplabel);
  refRelationshiplabel.setAttribute(`class`, `minor-form-label`);
  refRelationshiplabel.setAttribute(`for`, `refRelationshipCo${agh3}`);
  refRelationshiplabel.innerHTML = `Relationship`;
  refRelationshipdiv.appendChild(refRelationshipinp);
  refRelationshipinp.setAttribute(`class`, `form-control`);
  refRelationshipinp.setAttribute(`type`, `text`);
  refRelationshipinp.setAttribute(`name`, `refRelationshipCo${agh3}`);
  refRelationshipinp.setAttribute(`id`, `refRelationshipCo${agh3}`);
  agh3++;
}

//Bank References Start

// bankRefrences
function bankRefCo() {
  let row = newElement(`div`);
  let bankdiv = newElement(`div`);
  let banklabel = newElement(`label`);
  let bankinp = newElement(`input`);
  let container = newElement(`div`);
  
  let DIV = newElement("div");
  document.getElementById(`bankRefCo`).appendChild(DIV);
  DIV.appendChild(container);
  DIV.appendChild(row);

  container.setAttribute(`class`, `container financing-title`);
  DIV.setAttribute(`id`, `bankRefCo${agh4}`);
  container.setAttribute(`onclick`, `deleteRow(bankRefCo${agh4})`);
  container.innerHTML = `-  Bank Refrence`;

  
  row.setAttribute(`class`, `row`);
  row.appendChild(bankdiv);
  bankdiv.setAttribute(`class`, `col-md-3`);
  bankdiv.appendChild(banklabel);
  banklabel.setAttribute(`class`, `minor-form-label`);
  banklabel.setAttribute(`for`, `bankNameCo${agh4}`);
  banklabel.innerHTML = `Bank Name`;
  bankdiv.appendChild(bankinp);
  bankinp.setAttribute(`class`, `form-control`);
  bankinp.setAttribute(`type`, `text`);
  bankinp.setAttribute(`name`, `bankNameCo${agh4}`);
  bankinp.setAttribute(`id`, `bankNameCo${agh4}`);
  bankinp.setAttribute(`placeholder`, `Imperial Bank Services`);
  
  // account type
  let bankAccTypediv = newElement(`div`);
  let bankAccTypelabel = newElement(`label`);
  let bankAccTypeSelect = newElement(`select`);
  let bankAccTypeChecking = newElement(`option`);
  let bankAccTypeSaving = newElement(`option`);
  let bankAccTypeCredit = newElement(`option`);
  let bankAccTypeOther = newElement(`option`);

  row.appendChild(bankAccTypediv);
  bankAccTypediv.setAttribute(`class`, `col-md-2`);
  bankAccTypediv.appendChild(bankAccTypelabel);
  bankAccTypelabel.setAttribute(`class`, `minor-form-label`);
  bankAccTypelabel.setAttribute(`for`, `bankAccTypeCo${agh4}`);
  bankAccTypelabel.innerHTML = `Account Type`;
  bankAccTypediv.appendChild(bankAccTypeSelect);
  bankAccTypeSelect.setAttribute(`name`, `bankAccTypeCo${agh4}`);
  bankAccTypeSelect.setAttribute(`id`, `bankAccTypeCo${agh4}`);
  bankAccTypeSelect.setAttribute(`class`, `form-control`);
  bankAccTypeSelect.appendChild(bankAccTypeChecking);
  bankAccTypeChecking.setAttribute(`value`, `checking`);
  bankAccTypeChecking.innerHTML = `Checking`;
  bankAccTypeSelect.appendChild(bankAccTypeSaving);
  bankAccTypeSaving.setAttribute(`value`, `saving`);
  bankAccTypeSaving.innerHTML = `Saving`;
  bankAccTypeSelect.appendChild(bankAccTypeCredit);
  bankAccTypeCredit.setAttribute(`value`, `credit`);
  bankAccTypeCredit.innerHTML = `Credit`;
  bankAccTypeSelect.appendChild(bankAccTypeOther);
  bankAccTypeOther.setAttribute(`value`, `other`);
  bankAccTypeOther.innerHTML = `Other`;
  
  //City
  let bankCitydiv = newElement(`div`);
  let bankCityinp = newElement(`input`);
  let bankCitylabel = newElement(`label`);
  row.appendChild(bankCitydiv);
  
  bankCitydiv.setAttribute(`class`, `col-md-2`);
  bankCitydiv.appendChild(bankCitylabel);
  bankCitylabel.setAttribute(`class`, `minor-form-label`);
  bankCitylabel.setAttribute(`for`, `bankCityCo${agh4}`);
  bankCitylabel.innerHTML = `City`;
  bankCitydiv.appendChild(bankCityinp);
  bankCityinp.setAttribute(`class`, `form-control`);
  bankCityinp.setAttribute(`type`, `text`);
  bankCityinp.setAttribute(`name`, `bankCityCo${agh4}`);
  bankCityinp.setAttribute(`id`, `bankCityCo${agh4}`);
  bankCityinp.setAttribute(`placeholder`, `New York City`);
  
  //City
  let bankStatediv = newElement(`div`);
  let bankStatelabel = newElement(`label`);
  let bankStateinp = newElement(`input`);
  
  row.appendChild(bankStatediv);
  bankStatediv.setAttribute(`class`, `col-md-2`);
  bankStatediv.appendChild(bankStatelabel);
  bankStatelabel.setAttribute(`class`, `minor-form-label`);
  bankStatelabel.setAttribute(`for`, `bankStateCo${agh4}`);
  bankStatelabel.innerHTML = `State`;
  bankStatediv.appendChild(bankStateinp);
  bankStateinp.setAttribute(`class`, `form-control`);
  bankStateinp.setAttribute(`type`, `text`);
  bankStateinp.setAttribute(`name`, `bankStateCo${agh4}`);
  bankStateinp.setAttribute(`id`, `bankStateCo${agh4}`);
  bankStateinp.setAttribute(`placeholder`, `New York`);

  //Bank Pri Phone
  let bankPrimaryPhonediv = newElement(`div`);
  let bankPrimaryPhonelabel = newElement(`label`);
  let bankPrimaryPhoneinp = newElement(`input`);
  
  row.appendChild(bankPrimaryPhonediv);
  bankPrimaryPhonediv.setAttribute(`class`, `col-md-3`);
  bankPrimaryPhonediv.appendChild(bankPrimaryPhonelabel);
  bankPrimaryPhonelabel.setAttribute(`class`, `minor-form-label`);
  bankPrimaryPhonelabel.setAttribute(`for`, `bankPrimaryPhoneCo${agh4}`);
  bankPrimaryPhonelabel.innerHTML = `Primary Phone`;
  bankPrimaryPhonediv.appendChild(bankPrimaryPhoneinp);
  bankPrimaryPhoneinp.setAttribute(`class`, `form-control`);
  bankPrimaryPhoneinp.setAttribute(`type`, `tel`);
  bankPrimaryPhoneinp.setAttribute(`name`, `bankPrimaryPhoneCo${agh4}`);
  bankPrimaryPhoneinp.setAttribute(`id`, `bankPrimaryPhoneCo${agh4}`);
  bankPrimaryPhoneinp.setAttribute(`placeholder`, `###-###-####`);
  agh4++;
}

coBuyerDetails = document.getElementById('coBuyerDetails')
coFirstName = document.getElementById('coFirstName')
coLastName = document.getElementById('coLastName')
coSSN = document.getElementById('coSSN')
coPrimaryPhone = document.getElementById('coPrimaryPhone')
coMonthlyIncome = document.getElementById('coMonthlyIncome')
coBuyerDetails.addEventListener("toggle",function(){
  coFirstName.setAttribute('required', 'true')
  coLastName.setAttribute('required', 'true')
  coSSN.setAttribute('required', 'true')
  coPrimaryPhone.setAttribute('required', 'true')
  coMonthlyIncome.setAttribute('required', 'true')
})
