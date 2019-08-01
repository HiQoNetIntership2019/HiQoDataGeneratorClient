export function validateInput(value, regex, inputId, spanId) {
    var regexp = new RegExp(regex);

    var input = document.getElementById(inputId);
    var span = document.getElementById(spanId);   
    if(value !== undefined && regexp.test(value))
    {
      input.classList.remove("invalid");
      span.classList.add("text-hidden");
      return true;
    }
    else{
      input.classList.add("invalid");
      span.classList.remove("text-hidden");
      return false;
    }
}

export function dismissInputValidation(inputId, spanId){
    var input = document.getElementById(inputId);
    var span = document.getElementById(spanId);   

    input.classList.remove("invalid");
    span.classList.add("text-hidden");
}