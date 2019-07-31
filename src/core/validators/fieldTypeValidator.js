export default function validateFieldType(value, fieldTypeButtonId, spanId) {
    var fieldTypeButton = document.getElementById(fieldTypeButtonId);
    var span = document.getElementById(spanId);      
    if(value !== undefined)
    {
      fieldTypeButton.classList.remove("invalid");
      span.classList.add("text-hidden");
      return true;
    }
    else{
      fieldTypeButton.classList.add("invalid");
      span.classList.remove("text-hidden");
      return false;
    }
}