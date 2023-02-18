'use strict';

function EduDropDwn() {
    return(
        <select name="selecEdu" id="selecEdu">
        <option value="associates">Associates degree</option>
        <option value="bachelors">Bachelors degree</option>
        </select>
    );
  }

export default function EduDropDwn(){

    <div>
        <h1 id="eduLbl">Please select from the list to see my education background: </h1>
        <EduDropDwn />
    </div>

}




/*<select name="selecEdu" id="selecEdu">
  <option value="associates">Associates degree</option>
  <option value="bachelors">Bachelors degree</option>
</select>*/