import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    change(event) {
       let company_id = event.target.selectedOptions[0].value

       if (company_id != null || company_id != ""){
         document.location.replace('/home/index?&id='+company_id);
       } else {
         event.target.preventDefault
       }
    }
}